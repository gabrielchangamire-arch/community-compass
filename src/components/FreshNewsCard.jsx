import { ExternalLink } from "lucide-react";

export default function FreshNewsCard({ item }) {
  const { title, blurb, sourceLabel, sourceUrl, date, score } = item;

  return (
    <article className="fresh-card">
      <header className="fresh-card-head">
        <span className="fresh-card-source">{sourceLabel}</span>
        {date && <time className="fresh-card-date" dateTime={date}>{formatDate(date)}</time>}
      </header>
      <h3 className="fresh-card-title">{title}</h3>
      {blurb && <p className="fresh-card-blurb">{blurb}</p>}
      <footer className="fresh-card-foot">
        <a className="fresh-card-link" href={sourceUrl} target="_blank" rel="noreferrer">
          Read article <ExternalLink size={13} aria-hidden="true" />
        </a>
        {typeof score === "number" && score > 0 && (
          <span
            className="fresh-card-score"
            title="DistilBERT positive-sentiment probability"
            aria-label={`Sentiment score ${(score * 100).toFixed(0)} percent positive`}
          >
            {(score * 100).toFixed(0)}% positive
          </span>
        )}
      </footer>
    </article>
  );
}

function formatDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00Z");
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}
