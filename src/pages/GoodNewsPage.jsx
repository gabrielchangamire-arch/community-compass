import { Link } from "react-router-dom";
import { ChevronLeft, Sparkles, RefreshCw } from "lucide-react";
import GoodNewsCard from "../components/GoodNewsCard.jsx";
import FreshNewsCard from "../components/FreshNewsCard.jsx";
import { GOOD_NEWS } from "../data/goodNews.js";
import freshNews from "../data/freshGoodNews.json";

export default function GoodNewsPage() {
  const freshItems = freshNews?.items ?? [];
  const generatedAt = freshNews?.generated_at;

  return (
    <div className="page">
      <section className="page-hero page-hero--good">
        <div className="container container--narrow">
          <Link to="/" className="back-link">
            <ChevronLeft size={16} aria-hidden="true" /> Back
          </Link>
          <span className="eyebrow">Good news</span>
          <h1 className="display display--lg">Good is winning. Here's the receipts.</h1>
          <p className="lede">
            Two layers: this week's fresh stories from reputable good-news outlets, filtered by a DistilBERT sentiment
            model — and long-run global trends from Our World in Data, UNICEF, the World Bank, and UNESCO. None of this
            means the work is done — but pretending nothing is improving makes it harder to keep going.
          </p>
        </div>
      </section>

      {freshItems.length > 0 && (
        <section className="container">
          <header className="section-head fresh-section-head">
            <span className="eyebrow">
              <Sparkles size={12} aria-hidden="true" /> This week
            </span>
            <h2 className="display display--md">Fresh stories</h2>
            <p className="lede">
              Pulled weekly from Good News Network, Positive News, and Reasons to be Cheerful. Each story is scored by
              DistilBERT — only strongly-positive ones make it through.
            </p>
            {generatedAt && (
              <p className="fresh-meta">
                <RefreshCw size={12} aria-hidden="true" />
                <span>Last refreshed: {formatRefreshTime(generatedAt)}</span>
              </p>
            )}
          </header>
          <div className="fresh-grid">
            {freshItems.map((item) => (
              <FreshNewsCard key={item.sourceUrl} item={item} />
            ))}
          </div>
        </section>
      )}

      <section className="container">
        <header className="section-head">
          <span className="eyebrow">Long-run trends</span>
          <h2 className="display display--md">The big picture</h2>
          <p className="lede">
            Numbers that don't make headlines because they move slowly — and that's the whole point.
          </p>
        </header>
        <div className="good-news-grid">
          {GOOD_NEWS.map((entry) => (
            <GoodNewsCard key={entry.title} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}

function formatRefreshTime(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
