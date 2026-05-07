import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import GoodNewsCard from "../components/GoodNewsCard.jsx";
import { GOOD_NEWS } from "../data/goodNews.js";

export default function GoodNewsPage() {
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
            Long-run global trends from Our World in Data, UNICEF, the World Bank, and UNESCO. None of this means the
            work is done — but pretending nothing is improving makes it harder to keep going.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="good-news-grid">
          {GOOD_NEWS.map((entry) => (
            <GoodNewsCard key={entry.title} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
