import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container container--narrow">
          <Link to="/" className="back-link">
            <ChevronLeft size={16} aria-hidden="true" /> Back
          </Link>
          <span className="eyebrow">About</span>
          <h1 className="display display--lg">Why this exists</h1>
          <p className="lede">
            Community Compass is a small, free, ad-free directory pointing people toward help that already exists —
            and pointing helpers toward places that already do good work. It's intentionally simple. It doesn't track
            you, doesn't sell your data, and doesn't take a cut of donations.
          </p>
        </div>
      </section>

      <section className="container container--narrow about-body">
        <h2 className="display display--md">How resources are chosen</h2>
        <p>
          The current build covers the Seattle / Bellevue / King County area. Each entry is a real organization or
          program we could verify by name. We prioritize: free or sliding-scale services, low barrier to entry (no
          ID requirements when possible), and broad eligibility.
        </p>
        <p>
          We don't include anything we couldn't independently confirm. We do not include for-profit programs, MLM
          "scholarships," or services that require upfront payment.
        </p>

        <h2 className="display display--md">How donate destinations are chosen</h2>
        <p>
          Every nonprofit listed is a registered 501(c)(3) and rated favorably by either{" "}
          <a href="https://www.charitynavigator.org/" target="_blank" rel="noreferrer">
            Charity Navigator
          </a>{" "}
          or{" "}
          <a href="https://www.givewell.org/" target="_blank" rel="noreferrer">
            GiveWell
          </a>
          . When the rating was last checked is noted on each card; donors should re-check before giving large amounts.
        </p>

        <h2 className="display display--md">How good news is sourced</h2>
        <p>
          Numbers come from public datasets at{" "}
          <a href="https://ourworldindata.org/" target="_blank" rel="noreferrer">
            Our World in Data
          </a>
          ,{" "}
          <a href="https://childmortality.org/" target="_blank" rel="noreferrer">
            UN-IGME
          </a>
          ,{" "}
          <a href="https://data.worldbank.org/" target="_blank" rel="noreferrer">
            World Bank Open Data
          </a>
          , and{" "}
          <a href="https://uis.unesco.org/" target="_blank" rel="noreferrer">
            UNESCO
          </a>
          . We pick the highest-quality long-run series we can find. If a trend reverses, we'll update.
        </p>

        <h2 className="display display--md">Important honest disclaimers</h2>
        <ul className="about-list">
          <li>This is a curated directory, not a hotline. If you're in crisis, call or text 988.</li>
          <li>Eligibility, hours, and addresses change. Always call ahead before going to a program in person.</li>
          <li>Listings are not endorsements. They're starting points.</li>
          <li>Information here may be out of date. The "last verified" date should be visible on each entry; if you spot something stale, please flag it.</li>
        </ul>

        <h2 className="display display--md">How to contribute</h2>
        <p>
          Spotted a missing resource, a stale entry, or a great local nonprofit we should add? Open an issue or PR on{" "}
          <a href="https://github.com/gabrielchangamire-arch/community-compass" target="_blank" rel="noreferrer">
            GitHub
          </a>
          . Contributions are reviewed before publishing.
        </p>

        <h2 className="display display--md">Who built this</h2>
        <p>
          Built by Gabriel Changamire — a CS student at Bellevue College — as a small contribution to the kind of
          internet I want to see more of. The code is open source. Reuse the structure for your own city.
        </p>
      </section>
    </div>
  );
}
