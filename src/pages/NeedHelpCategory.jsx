import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ResourceCard from "../components/ResourceCard.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import Icon from "../components/Icon.jsx";
import { NEED_CATEGORIES } from "../data/categories.js";
import { RESOURCES } from "../data/resources.js";

export default function NeedHelpCategory() {
  const { categoryId } = useParams();
  const category = NEED_CATEGORIES.find((c) => c.id === categoryId);
  const resources = RESOURCES[categoryId] ?? [];

  if (!category) {
    return (
      <div className="page container container--narrow page-empty">
        <h1 className="display display--md">We don't have that category yet.</h1>
        <p className="lede">
          <Link to="/need-help">Browse all need-help categories</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="page-hero page-hero--need">
        <div className="container container--narrow">
          <Link to="/need-help" className="back-link">
            <ChevronLeft size={16} aria-hidden="true" /> All categories
          </Link>
          <div className="page-hero-icon page-hero-icon--need">
            <Icon name={category.iconName} size={28} />
          </div>
          <span className="eyebrow eyebrow--need">Need help / {category.name}</span>
          <h1 className="display display--lg">{category.name}</h1>
          <p className="lede">{category.blurb}</p>
        </div>
      </section>

      <section className="container container--narrow">
        {resources.length === 0 ? (
          <div className="page-empty">
            <p>We're still curating this category. Check back soon.</p>
          </div>
        ) : (
          <>
            <div className="resource-list">
              {resources.map((r) => (
                <ResourceCard key={r.name} resource={r} />
              ))}
            </div>
            <Disclaimer>
              These are starting points — eligibility and waitlists vary. If a program turns you down, ask if they can
              refer you to one that fits. Calling 2-1-1 (King County) connects you to a live person who can route you.
            </Disclaimer>
          </>
        )}
      </section>
    </div>
  );
}
