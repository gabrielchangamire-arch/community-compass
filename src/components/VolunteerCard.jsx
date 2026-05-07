import { ExternalLink, MapPin, Clock } from "lucide-react";

export default function VolunteerCard({ entry }) {
  const { org, role, commitment, url, area } = entry;
  return (
    <article className="volunteer-card">
      <h3 className="volunteer-card-org">{org}</h3>
      <p className="volunteer-card-role">{role}</p>
      <ul className="volunteer-card-meta">
        <li>
          <Clock size={14} aria-hidden="true" /> <span>{commitment}</span>
        </li>
        <li>
          <MapPin size={14} aria-hidden="true" /> <span>{area}</span>
        </li>
      </ul>
      <a className="btn btn--ghost btn--small" href={url} target="_blank" rel="noreferrer">
        Sign up <ExternalLink size={14} aria-hidden="true" />
      </a>
    </article>
  );
}
