import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const ActionDropdown = ({ items = [], row = {}, buttonLabel = "Action" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="btn bg-secondary flex items-center gap-1 cursor-pointer"
      >
        {buttonLabel}
        <FiChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 max-h-40 overflow-y-auto rounded-md bg-darkBlue text-white shadow-lg ring-1 ring-gray-700 z-50 text-sm">
          <div className="px-3 py-2 font-semibold text-xs text-gray-400">
            Action
          </div>
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.onClick?.(row);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-primary/20 flex items-center gap-2 cursor-pointer"
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;
