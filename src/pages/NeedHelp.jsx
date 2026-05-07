import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import CategoryCard from "../components/CategoryCard.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import { NEED_CATEGORIES } from "../data/categories.js";
import { RESOURCES } from "../data/resources.js";

export default function NeedHelp() {
  return (
    <div className="page">
      <section className="page-hero page-hero--need">
        <div className="container container--narrow">
          <Link to="/" className="back-link">
            <ChevronLeft size={16} aria-hidden="true" /> Back
          </Link>
          <span className="eyebrow eyebrow--need">Need help</span>
          <h1 className="display display--lg">What kind of help do you need?</h1>
          <p className="lede">
            Pick a category. We'll show you free or low-cost programs in the Seattle / Bellevue / King County area, with
            phone numbers, websites, and what to bring.
          </p>
          <Disclaimer>
            Always call ahead before showing up. Hours, eligibility, and locations change — these are starting points,
            not guarantees.
          </Disclaimer>
        </div>
      </section>

      <section className="container">
        <div className="category-grid">
          {NEED_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              kind="need"
              to={`/need-help/${cat.id}`}
              count={RESOURCES[cat.id]?.length ?? 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
