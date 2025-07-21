import { useState } from "react";
import BankDetails from "../../../components/super/account_settings/BankDetails";
import KYCDetails from "../../../components/super/account_settings/KYCDetails";
import PinManager from "../../../components/super/account_settings/PinManager";
import ProfileDetails from "../../../components/super/account_settings/ProfileDetails";
import CertificateandID from "../../../components/super/account_settings/CertificateandID";


const AccountPortalSettings = () => {
  const [activePage, setActivePage] = useState("Profile Details");

  const pages = [
    "Profile Details",
    "KYC Details",
    "Pin Manager",
    "Bank Details",
    "Certificate And ID", 
   
  ];

  const user = {
    Profile_Details: {
      name: "kishore babu bandara",
      mobile: "8309207889",
      email: "nktaxconsultancy4all@gmail.com",
      state: "Telangana",
      city: "HYDERABAD",
      gender: "Select Gender",
      pinCode: "500089",
      
      securityPin: "",
      address: "7-15/62,PLOT NO 62,ROAD NO 4.SI",
    },
    KYC_Profile: {
      shopName: "",
      gstNumber: "",
      aadharNumber: "",
      panNumber: "",
      securityPin: "",
      passportPhoto: "",
    },
    Password_Manager: {
      newPassword: "",
      confirmPassword: "",
      securityPin: "",
    },
    Pin_Manager: {
      newPin: "",
      confirmPin: "",
      otp: "",
    },
    Bank_Details: {
      accountNUmber: "",
      bankName: "",
      ifscCode: "",
      securityPin: "",
    },
    Cetificate_Manager: {
      cmo: "",
      coo: "",
    },
    Role_Manager: {
      membersRole: "",
      securityPin: "",
    },
    Mapping_Manager: {
      parentMember: "",
      securityPin: "",
    },
  };
  const renderPageContent = () => {
    switch (activePage) {
      case "Profile Details":
        return <ProfileDetails initialData={user.Profile_Details} />;
      case "KYC Details":
        return <KYCDetails initialData={user.KYC_Profile} />;
      case "Pin Manager":
        return <PinManager initialData={user.Pin_Manager} />;
      case "Bank Details":
        return <BankDetails initialData={user.Bank_Details} />;
      case "Certificate And ID":
        return <CertificateandID initialData={user.Cetificate_Manager} />;
     
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="max-h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-white mt-2 dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto dark:text-white overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
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
