import { useState } from "react";
import BankDetails from "../../../components/super/account_settings/BankDetails";
import CertificateManager from "../../../components/super/account_settings/CertificateManager";
import KYCDetails from "../../../components/super/account_settings/KYCDetails";
import MappingManager from "../../../components/super/account_settings/MappingManager";
import PasswordManager from "../../../components/super/account_settings/PasswordManager";
import PinManager from "../../../components/super/account_settings/PinManager";
import ProfileDetails from "../../../components/super/account_settings/ProfileDetails";
import RoleManager from "../../../components/super/account_settings/RoleManager";

const AccountPortalSettings = () => {
  const [activePage, setActivePage] = useState("Profile Details");

  const pages = [
    "Profile Details",
    "KYC Details",
    "Password Manager",
    "Pin Manager",
    "Bank Details",
    "Certificate Manager",
    "Role Manager",
    "Mapping Manager",
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case "Profile Details":
        return <ProfileDetails />;
      case "KYC Details":
        return <KYCDetails />;
      case "Password Manager":
        return <PasswordManager />;
      case "Pin Manager":
        return <PinManager />;
      case "Bank Details":
        return <BankDetails />;
      case "Certificate Manager":
        return <CertificateManager />;
      case "Role Manager":
        return <RoleManager />;
      case "Mapping Manager":
        return <MappingManager />;
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto dark:text-white overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <h1 className="text-2xl mb-4 font-bold">My Profile</h1>

      <div className="flex flex-wrap">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`cursor-pointer px-4 py-2 rounded-t-md text-sm font-medium ${
              activePage === page
                ? "bg-secondary text-white"
                : "   hover:text-secondary"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <hr className="my-4 dark:border-gray-600" />

      <div className="p-4  rounded">{renderPageContent()}</div>
    </div>
  );
};

export default AccountPortalSettings;
