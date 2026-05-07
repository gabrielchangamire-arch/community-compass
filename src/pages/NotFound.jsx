import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page container container--narrow page-empty">
      <h1 className="display display--lg">Lost?</h1>
      <p className="lede">That page doesn't exist. Use the compass.</p>
      <Link to="/" className="btn btn--ghost">
        Back to home
      </Link>
    </div>
  );
}
