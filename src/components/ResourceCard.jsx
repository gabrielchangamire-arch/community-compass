import { ExternalLink, MapPin, Phone } from "lucide-react";

export default function ResourceCard({ resource }) {
  const { name, offers, areas, website, phone, address, tags = [] } = resource;
  return (
    <article className="resource-card">
      <header className="resource-card-head">
        <h3 className="resource-card-name">{name}</h3>
        <div className="resource-card-areas">
          {areas?.map((a) => (
            <span key={a} className="chip chip--need">
              {a}
            </span>
          ))}
        </div>
      </header>

      <p className="resource-card-offers">{offers}</p>

      <ul className="resource-card-meta">
        {address && (
          <li>
            <MapPin size={15} aria-hidden="true" />
            <span>{address}</span>
          </li>
        )}
        {phone && (
          <li>
            <Phone size={15} aria-hidden="true" />
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}>{phone}</a>
          </li>
        )}
      </ul>

      {tags.length > 0 && (
        <div className="resource-card-tags">
          {tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      )}

      {website && (
        <a className="btn btn--need btn--small resource-card-cta" href={website} target="_blank" rel="noreferrer">
          Visit website <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
