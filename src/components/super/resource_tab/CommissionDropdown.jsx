import { useState } from "react";

const CommissionDropdown = ({
  commissions,
  setSelectedCommission,
  commissionDropdownOptions,
  handleCommissionOptionClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // console.log(commissions);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="btn-secondary"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        Commission/Charge
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-1 z-50 w-48 bg-darkBlue border border-gray-600 rounded-md shadow-md">
          <span className="block px-4 py-2 text-sm text-gray-400">
            Commission
          </span>
          {commissionDropdownOptions.map((option) => (
            <div
              key={option.modalKey}
              onClick={() => {
                handleCommissionOptionClick(option.modalKey);
                setIsDropdownOpen(false); // Close on selection
                setSelectedCommission(commissions[option.label]);
              }}
              className="px-4 py-2 hover:bg-primaryBlue cursor-pointer text-white"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommissionDropdown;
