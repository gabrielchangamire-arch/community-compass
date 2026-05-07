"""
Refresh the fresh-good-news feed for Community Compass.

Pipeline:
  1. Fetch recent items from a small allowlist of reputable good-news RSS feeds.
  2. Score every (title + description) with DistilBERT-SST2 (HuggingFace) so
     the filter is real, not heuristic.
  3. Keep the top N most-positive, deduplicate by URL, sort by recency.
  4. Write the result to src/data/freshGoodNews.json.

Run by the GitHub Action `.github/workflows/refresh-good-news.yml` on a weekly
cron and committed back to the repo. The static site reads the JSON directly.

Run locally:
    python -m pip install -r scripts/requirements.txt
    python scripts/refresh_good_news.py
"""

from __future__ import annotations

import datetime as dt
import html
import json
import re
import sys
from pathlib import Path
from typing import Iterable

import feedparser

# ── Configuration ──────────────────────────────────────────────────────────

SOURCES = [
    {"label": "Good News Network", "url": "https://www.goodnewsnetwork.org/feed/"},
    {"label": "Positive News", "url": "https://www.positive.news/feed/"},
    {"label": "Reasons to be Cheerful", "url": "https://reasonstobecheerful.world/feed/"},
]

# Score threshold (DistilBERT POSITIVE probability). Most curated good-news
# items score above 0.85 already; this filter just catches the occasional
# negative-framed piece that slipped through.
POSITIVE_THRESHOLD = 0.7

# Final output size.
MAX_ITEMS = 12

# Pull this many from each feed before filtering.
PER_SOURCE_LIMIT = 8

# Output path (relative to repo root, which is this script's parent's parent).
REPO_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_PATH = REPO_ROOT / "src" / "data" / "freshGoodNews.json"

MODEL_NAME = "distilbert-base-uncased-finetuned-sst-2-english"


# ── Helpers ────────────────────────────────────────────────────────────────

_TAG_RE = re.compile(r"<[^>]+>")
_WS_RE = re.compile(r"\s+")


def strip_html(text: str) -> str:
    """Remove HTML tags and collapse whitespace."""
    if not text:
        return ""
    text = html.unescape(text)
    text = _TAG_RE.sub(" ", text)
    text = _WS_RE.sub(" ", text)
    return text.strip()


def trim(text: str, limit: int) -> str:
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def isoformat_or_none(struct_time) -> str | None:
    if not struct_time:
        return None
    try:
        return dt.datetime(*struct_time[:6]).date().isoformat()
    except Exception:
        return None


# ── RSS fetch ──────────────────────────────────────────────────────────────


def fetch_source(source: dict) -> list[dict]:
    """Fetch one RSS feed; return raw entries normalized into our shape."""
    print(f"[fetch] {source['label']} <- {source['url']}", flush=True)
    feed = feedparser.parse(source["url"])
    if feed.bozo:
        print(f"[warn] parse error for {source['label']}: {feed.bozo_exception}", file=sys.stderr)

    entries = []
    for raw in (feed.entries or [])[:PER_SOURCE_LIMIT]:
        title = strip_html(raw.get("title", "")).strip()
        link = raw.get("link", "").strip()
        if not title or not link:
            continue

        description = strip_html(raw.get("summary", "") or raw.get("description", ""))
        date = isoformat_or_none(raw.get("published_parsed") or raw.get("updated_parsed"))

        entries.append({
            "title": trim(title, 140),
            "blurb": trim(description, 280),
            "sourceLabel": source["label"],
            "sourceUrl": link,
            "date": date,
        })
    return entries


def fetch_all() -> list[dict]:
    out: list[dict] = []
    for src in SOURCES:
        try:
            out.extend(fetch_source(src))
        except Exception as exc:
            print(f"[warn] failed to fetch {src['label']}: {exc}", file=sys.stderr)
    return out


# ── DistilBERT scoring ─────────────────────────────────────────────────────


def score_with_distilbert(items: Iterable[dict]) -> list[dict]:
    """Score each item with DistilBERT and add a `score` field."""
    items = list(items)
    if not items:
        return items

    # Heavy imports kept local so the script can import without torch.
    from transformers import pipeline

    print(f"[model] loading {MODEL_NAME}", flush=True)
    pipe = pipeline(
        task="sentiment-analysis",
        model=MODEL_NAME,
        tokenizer=MODEL_NAME,
        truncation=True,
        top_k=None,
    )

    inputs = [
        f"{it['title']}. {it['blurb']}".strip(". ").strip()
        for it in items
    ]
    print(f"[model] scoring {len(inputs)} items", flush=True)
    outputs = pipe(inputs)

    scored = []
    for it, out in zip(items, outputs):
        by_label = {o["label"].upper(): float(o["score"]) for o in out}
        p_pos = by_label.get("POSITIVE", 0.5)
        scored.append({**it, "score": round(p_pos, 4)})
    return scored


# ── Pipeline ───────────────────────────────────────────────────────────────


def dedupe(items: Iterable[dict]) -> list[dict]:
    """Drop duplicates by URL, keeping the first occurrence."""
    seen = set()
    out = []
    for it in items:
        key = it["sourceUrl"]
        if key in seen:
            continue
        seen.add(key)
        out.append(it)
    return out


def main() -> int:
    raw = fetch_all()
    if not raw:
        print("[error] no items fetched from any source", file=sys.stderr)
        return 1

    raw = dedupe(raw)
    scored = score_with_distilbert(raw)

    kept = [it for it in scored if it["score"] >= POSITIVE_THRESHOLD]
    if len(kept) < 4:
        # Defensive: if filter is too aggressive (e.g. unusual news week),
        # keep the top items by score regardless of threshold.
        kept = sorted(scored, key=lambda x: x["score"], reverse=True)
    kept.sort(
        key=lambda x: (x.get("date") or "0000-00-00", x.get("score", 0)),
        reverse=True,
    )
    final = kept[:MAX_ITEMS]

    payload = {
        "generated_at": dt.datetime.utcnow().replace(microsecond=0).isoformat() + "Z",
        "model": MODEL_NAME,
        "threshold": POSITIVE_THRESHOLD,
        "items": [
            {
                "title": it["title"],
                "blurb": it["blurb"],
                "sourceLabel": it["sourceLabel"],
                "sourceUrl": it["sourceUrl"],
                "date": it["date"],
                "score": it.get("score"),
            }
            for it in final
        ],
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"[done] wrote {len(final)} items to {OUTPUT_PATH.relative_to(REPO_ROOT)}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
