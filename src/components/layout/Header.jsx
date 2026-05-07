import { NavLink, Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-row">
        <Link to="/" className="brand" aria-label="Community Compass home">
          <Compass size={22} aria-hidden="true" />
          <span className="brand-name">Community Compass</span>
        </Link>
        <nav aria-label="primary" className="site-nav">
          <NavLink to="/need-help" className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}>
            Need help
          </NavLink>
          <NavLink to="/give-help" className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}>
            Give help
          </NavLink>
          <NavLink to="/good-news" className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}>
            Good news
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
