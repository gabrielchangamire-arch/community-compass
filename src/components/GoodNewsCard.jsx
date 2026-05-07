import { ExternalLink } from "lucide-react";

export default function GoodNewsCard({ entry }) {
  const { title, stat, blurb, sourceLabel, sourceUrl, kind } = entry;
  return (
    <article className={`good-news-card good-news-card--${kind}`}>
      {kind === "stat" ? (
        <div className="good-news-stat">{stat}</div>
      ) : (
        <div className="good-news-stat good-news-stat--story">{stat}</div>
      )}
      <h3 className="good-news-title">{title}</h3>
      <p className="good-news-blurb">{blurb}</p>
      <a className="good-news-source" href={sourceUrl} target="_blank" rel="noreferrer">
        Source: {sourceLabel} <ExternalLink size={12} aria-hidden="true" />
      </a>
    </article>
  );
}
