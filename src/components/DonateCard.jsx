import { ExternalLink, ShieldCheck } from "lucide-react";

export default function DonateCard({ entry }) {
  const { name, mission, url, scope, vetted, tags = [] } = entry;
  return (
    <article className="donate-card">
      <div className="donate-card-head">
        <h3 className="donate-card-name">{name}</h3>
        <div className="donate-card-meta">
          <span className="chip chip--give">{scope}</span>
          {vetted && (
            <span className="chip chip--good" title={vetted}>
              <ShieldCheck size={12} aria-hidden="true" /> {vetted}
            </span>
          )}
        </div>
      </div>
      <p className="donate-card-mission">{mission}</p>
      {tags.length > 0 && (
        <div className="donate-card-tags">
          {tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      )}
      <a className="btn btn--give btn--small donate-card-cta" href={url} target="_blank" rel="noreferrer">
        Donate <ExternalLink size={14} aria-hidden="true" />
      </a>
    </article>
  );
}
