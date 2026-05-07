import { Link } from "react-router-dom";
import { ArrowRight, HandHeart, Sparkles } from "lucide-react";

const ICONS = { need: HandHeart, give: Sparkles };

export default function PathCard({ kind, eyebrow, title, blurb, ctaLabel, to }) {
  const Icon = ICONS[kind];
  return (
    <Link to={to} className={`path-card path-card--${kind}`} aria-label={`${title}: ${blurb}`}>
      <div className="path-card-glow" aria-hidden="true" />
      <div className="path-card-icon" aria-hidden="true">
        <Icon size={28} strokeWidth={2} />
      </div>
      <div className="path-card-body">
        <span className={`eyebrow eyebrow--${kind}`}>{eyebrow}</span>
        <h2 className="path-card-title display display--lg">{title}</h2>
        <p className="path-card-blurb">{blurb}</p>
      </div>
      <div className={`path-card-cta path-card-cta--${kind}`}>
        <span>{ctaLabel}</span>
        <ArrowRight size={18} aria-hidden="true" />
      </div>
    </Link>
  );
}
