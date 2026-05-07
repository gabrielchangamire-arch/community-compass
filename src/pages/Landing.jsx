import { Link } from "react-router-dom";
import { Compass, ArrowDown, Newspaper } from "lucide-react";
import PathCard from "../components/PathCard.jsx";
import { GOOD_NEWS } from "../data/goodNews.js";

export default function Landing() {
  const featuredNews = GOOD_NEWS.slice(0, 3);

  return (
    <div className="page landing">
      <section className="landing-hero">
        <div className="container container--narrow landing-hero-inner">
          <span className="landing-badge">
            <Compass size={14} aria-hidden="true" /> Seattle &amp; Bellevue area
          </span>
          <h1 className="display display--xl">
            Find help.
            <br />
            <span className="landing-hero-accent">Give help.</span>
          </h1>
          <p className="lede landing-hero-lede">
            A free, ad-free directory of real local resources. If you need food, housing, dental care, scholarships, or
            childcare — start here. If you want to help your neighbors — start here too.
          </p>

          <a href="#paths" className="landing-scroll-cue" aria-label="Choose a path">
            <span>Choose a path</span>
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="landing-hero-bg" aria-hidden="true">
          <span className="landing-bg-blob landing-bg-blob--need" />
          <span className="landing-bg-blob landing-bg-blob--give" />
        </div>
      </section>

      <section id="paths" className="landing-paths">
        <div className="container">
          <div className="landing-paths-grid">
            <PathCard
              kind="need"
              eyebrow="01 / Need help"
              title="I need help"
              blurb="Free dental, food, scholarships, housing, childcare, benefits, tutoring — curated and verified."
              ctaLabel="Browse resources"
              to="/need-help"
            />
            <PathCard
              kind="give"
              eyebrow="02 / Give help"
              title="I want to help"
              blurb="Donate to vetted local nonprofits, find volunteer shifts, and see proof that good is winning."
              ctaLabel="Find a way to help"
              to="/give-help"
            />
          </div>
        </div>
      </section>

      <section className="landing-good">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">03 / Good is winning</span>
            <h2 className="display display--lg">A few things going right.</h2>
            <p className="lede">
              The news cycle rewards bad news; the long-run trends often look very different. Real, sourced numbers.
            </p>
          </header>
          <div className="good-news-grid good-news-grid--featured">
            {featuredNews.map((entry) => (
              <article key={entry.title} className="good-news-mini">
                <div className="good-news-mini-stat">{entry.stat}</div>
                <div className="good-news-mini-title">{entry.title}</div>
                <a className="good-news-mini-source" href={entry.sourceUrl} target="_blank" rel="noreferrer">
                  via {entry.sourceLabel}
                </a>
              </article>
            ))}
          </div>
          <Link to="/good-news" className="btn btn--ghost landing-good-cta">
            <Newspaper size={16} aria-hidden="true" /> See more good news
          </Link>
        </div>
      </section>

      <section className="landing-values">
        <div className="container container--narrow">
          <p className="landing-values-text">
            <strong>Built on three values.</strong> Dignity — needing help is normal, asking for it is brave. Honesty —
            every resource is real, every donation goes to a vetted nonprofit, every stat has a source. Action — small
            acts compound. One meal. One tutoring hour. One donation.
          </p>
        </div>
      </section>
    </div>
  );
}
