// Input.jsx
import { Search } from "lucide-react";
import "./Input.scss";
import { InputTextContext } from "../../Contexts/InputTextContext";
import { useContext } from "react";

export default function Input({ onFocus }) {
  const { updateTextInput } = useContext(InputTextContext);
  const handleInputChange = (e) => {
    const newText = e.target.value;
    updateTextInput(newText);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search..."
        className="input"
        onFocus={onFocus}
        onChange={handleInputChange}
      />
      <Search className="search-icon" />
    </div>
  );
}
