import { useState } from "react";
import { FaUser, FaSun, FaWallet } from "../../assets/react-icons";
import LoadWalletModal from "./LoadWalletModel";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const { isSuperDarkMode, toggleSuperTheme } = useDarkTheme();
  return (
    <header className=" text-black dark:text-adminOffWhite flex justify-between items-center px-6 py-3 rounded-t-lg ">
      {/* Left: Welcome text */}
      <h2 className="text-sm font-bold">WELCOME TO NK TAX CONSULTANCY</h2>

      {/* Right: Action Items */}
      <div className="flex items-center gap-4 ">
        {isSuperDarkMode ? (
          <FaSun
            className="text-xl text-black dark:text-adminOffWhite"
            onClick={toggleSuperTheme}
          />
        ) : (
          <FaMoon
            className="text-xl text-black dark:text-adminOffWhite"
            onClick={toggleSuperTheme}
          />
        )}

        {/* Wallet Button */}
        <button
          onClick={() => setIsWalletOpen(true)}
          className="flex items-center bg-secondary text-white font-semibold px-4 py-1.5 rounded-md gap-2 shadow-md hover:bg-[#7a7bf0] transition cursor-pointer"
        >
          <span>Super Admin wallet</span>
          <FaWallet />
        </button>

        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#1c4ba1] to-[#002d62] flex items-center justify-center shadow-inner">
          <FaUser className="text-white text-xl" />
          {/* <img src={userIcon} alt="" className="w-20" /> */}
        </div>
      </div>
      {isWalletOpen && (
        <LoadWalletModal onClose={() => setIsWalletOpen(false)} />
      )}
    </header>
  );
}
