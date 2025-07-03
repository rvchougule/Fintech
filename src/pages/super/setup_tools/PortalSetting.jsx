import React, { useState } from "react";
import ProfileForm from "../../../components/super/setup_tools/ProfileForm";
import pagesConfig from "../../../assets/data/pagesConfig";

export const PortalSetting = () => {
  const [activePage, setActivePage] = useState("Profile Details");

  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-white p-4">
      <h1 className="text-2xl mb-4 font-bold">My Profile</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(pagesConfig).map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-4 py-2 rounded ${
              activePage === page
                ? "bg-secondary"
                : "dark:bg-gray-800 hover:bg-slate-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <hr className="my-4 dark:border-gray-600" />
      <div className="p-4 dark:bg-gray-800 rounded">
        <ProfileForm config={pagesConfig[activePage]} />
      </div>
    </div>
  );
};
