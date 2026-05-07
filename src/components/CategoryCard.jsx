import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon.jsx";

export default function CategoryCard({ category, kind = "need", to, count }) {
  return (
    <Link to={to} className={`category-card category-card--${kind}`}>
      <div className={`category-card-icon category-card-icon--${kind}`} aria-hidden="true">
        <Icon name={category.iconName} size={22} />
      </div>
      <div className="category-card-body">
        <h3 className="category-card-name">{category.name}</h3>
        <p className="category-card-blurb">{category.blurb}</p>
        {typeof count === "number" && (
          <span className={`chip chip--${kind}`}>
            {count} {count === 1 ? "resource" : "resources"}
          </span>
        )}
      </div>
      <ArrowRight size={18} className="category-card-arrow" aria-hidden="true" />
    </Link>
  );
}
