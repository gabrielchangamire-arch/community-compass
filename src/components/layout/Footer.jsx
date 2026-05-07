import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-row">
        <div>
          <p className="site-footer-blurb">
            A free, ad-free directory. Built to point you to people and programs that already exist.
          </p>
          <p className="site-footer-fine">
            Always call ahead before visiting any resource — hours, eligibility, and locations change.
          </p>
        </div>
        <nav aria-label="footer">
          <Link to="/need-help">Find help</Link>
          <Link to="/give-help">Give help</Link>
          <Link to="/good-news">Good news</Link>
          <Link to="/about">About & sources</Link>
        </nav>
      </div>
    </footer>
  );
}
