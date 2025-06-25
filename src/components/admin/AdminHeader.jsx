import { useState } from "react";
import { FaUser, FaSun, FaWallet } from "../../assets/react-icons";
import LoadAdminWalletModal from "./LoadAdminWalletModel";

export const AdminHeader = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  return (
    <header className=" text-black flex justify-between items-center px-6 py-3 rounded-t-lg ">
      {/* Left: Welcome text */}
      <h2 className="text-sm font-bold">WELCOME, ADMIN</h2>

      {/* Right: Action Items */}
      <div className="flex items-center gap-4">
        {/* Sun icon */}
        <FaSun className="text-xl text-black" />

        {/* Wallet Button */}
        <button
          onClick={() => setIsWalletOpen(true)}
          className="flex items-center bg-secondary text-white font-semibold px-4 py-1.5 rounded-md gap-2 shadow-md hover:bg-[#7a7bf0] transition cursor-pointer"
        >
          <span>Admin wallet</span>
          <FaWallet />
        </button>

        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#1c4ba1] to-[#002d62] flex items-center justify-center shadow-inner">
          <FaUser className="text-white text-xl" />
          {/* <img src={userIcon} alt="" className="w-20" /> */}
        </div>
      </div>
      {isWalletOpen && (
        <LoadAdminWalletModal onClose={() => setIsWalletOpen(false)} />
      )}
    </header>
  );
};
