import { Search } from "lucide-react";
import "./Input.scss";
export default function Input() {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search..."
        className="input"
      />

      <Search className="search-icon" />
    </div>
  );
}
