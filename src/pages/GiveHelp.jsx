import { Link } from "react-router-dom";
import { ChevronLeft, Newspaper } from "lucide-react";
import DonateCard from "../components/DonateCard.jsx";
import VolunteerCard from "../components/VolunteerCard.jsx";
import Icon from "../components/Icon.jsx";
import { GIVE_CATEGORIES } from "../data/categories.js";
import { DONATE } from "../data/donate.js";
import { VOLUNTEER } from "../data/volunteer.js";
import { IMPACT_STATS } from "../data/impactStats.js";

export default function GiveHelp() {
  return (
    <div className="page">
      <section className="page-hero page-hero--give">
        <div className="container container--narrow">
          <Link to="/" className="back-link">
            <ChevronLeft size={16} aria-hidden="true" /> Back
          </Link>
          <span className="eyebrow eyebrow--give">Give help</span>
          <h1 className="display display--lg">Where can you help today?</h1>
          <p className="lede">
            Vetted local nonprofits, real volunteer shifts, and a reminder that small dollars and hours go further than
            we usually think.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="impact-strip">
          {IMPACT_STATS.map((s) => (
            <div key={s.caption} className="impact-stat">
              <span className="impact-stat-num">{s.number}</span>
              <span className="impact-stat-cap">{s.caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <header className="section-head">
          <span className="eyebrow eyebrow--give">Donate</span>
          <h2 className="display display--md">Vetted nonprofits, by cause</h2>
          <p className="lede">Each one is a registered 501(c)(3) and rated favorably by Charity Navigator or GiveWell.</p>
        </header>

        {GIVE_CATEGORIES.map((cat) => (
          <div key={cat.id} className="give-category-block">
            <div className="give-category-head">
              <div className="give-category-icon" aria-hidden="true">
                <Icon name={cat.iconName} size={20} />
              </div>
              <div>
                <h3 className="give-category-title">{cat.name}</h3>
                <p className="give-category-blurb">{cat.blurb}</p>
              </div>
            </div>
            <div className="donate-grid">
              {(DONATE[cat.id] ?? []).map((entry) => (
                <DonateCard key={entry.name} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container">
        <header className="section-head">
          <span className="eyebrow eyebrow--give">Volunteer</span>
          <h2 className="display display--md">Show up locally</h2>
          <p className="lede">Real shifts at real places in the Seattle / Bellevue area. Most welcome first-timers.</p>
        </header>
        <div className="volunteer-grid">
          {VOLUNTEER.map((v) => (
            <VolunteerCard key={v.org + v.role} entry={v} />
          ))}
        </div>
      </section>

      <section className="container container--narrow">
        <div className="give-good-cta">
          <Newspaper size={20} aria-hidden="true" />
          <div>
            <p className="give-good-cta-title">Need a reason to keep going?</p>
            <p className="give-good-cta-sub">The long-run trends look better than the news cycle suggests.</p>
          </div>
          <Link to="/good-news" className="btn btn--ghost btn--small">
            See the good news
          </Link>
        </div>
      </section>
    </div>
  );
}
