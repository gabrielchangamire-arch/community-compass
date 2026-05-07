import { Info } from "lucide-react";

export default function Disclaimer({ children }) {
  return (
    <aside className="disclaimer" role="note">
      <Info size={16} aria-hidden="true" />
      <p>{children}</p>
    </aside>
  );
}
