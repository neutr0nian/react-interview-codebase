import { useState } from "react";
import "./dropdown.css";

interface DropdownProps {
  handleSelect: (value: string) => void;
  selected: number;
  options: number[];
}

const Dropdown = ({ options, handleSelect, selected }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selected}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-list-item"
              onClick={() => handleSelect(option.toString())}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
