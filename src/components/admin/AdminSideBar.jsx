import { useState } from "react";
import { Link } from "react-router";

import { IoIosArrowDown, IoIosArrowForward } from "../../assets/react-icons";

import {
  FaUser,
  FiSettings,
  HiOutlineDocumentReport,
  RiFileListLine,
  FaWallet,
  FaUsersCog,
  FaCogs,
  FaMoneyBillAlt,
  FaListAlt,
  FaPercent,
  BiSolidMessage,
} from "../../assets/react-icons";
import { Logo } from "../../assets/assets";
import { HiOutlineClipboardList } from "react-icons/hi";

const menuItems = [
  {
    icon: <FaUser />,
    label: "Member",
    component: "",
    subItems: [
      { label: "White Label", component: "" },
      { label: "Master Distributor", component: "" },
      { label: "Distributor", component: "" },
      { label: "Retail", component: "" },
      { label: "User", component: "" },
    ],
  },
  {
    icon: <FaMoneyBillAlt />,
    label: "Fund",
    component: "",
    subItems: [
      { label: "Transfer/Return", component: "" },
      { label: "Request", component: "" },
      { label: "Request Report", component: "" },
      { label: "CS Fund Report", component: "" },
      { label: "All Fund Report", component: "" },
    ],
  },
  {
    icon: <FaListAlt />,
    label: "Agent List",
    component: "",
    subItems: [
      { label: "AEPS", component: "" },
      { label: "UTI", component: "" },
    ],
  },
  {
    icon: <HiOutlineDocumentReport />,
    label: "Transaction Report",
    component: "",
    subItems: [
      { label: "All AEPS Transaction", component: "" },
      { label: "Commision Statement", component: "" },
      { label: "Bill Pay Statement", component: "" },
      { label: "Verification Statement", component: "" },
      { label: "Affilate Statement ", component: "" },
      { label: "Micro ATM Statement", component: "" },
      { label: "Recharge Statement", component: "" },
      { label: "UTI Pancard Statement", component: "" },
      { label: "Credit Card Payment", component: "" },
    ],
  },
  {
    icon: <FaWallet />,
    label: "Wallet History",
    component: "",
    subItems: [
      { label: "Main Wallet", component: "" },
      { label: "AEPS Wallet", component: "" },
      { label: "Commision Wallet", component: "" },
    ],
  },
  { icon: <BiSolidMessage />, label: "Complaints", component: "" },
  {
    icon: <FaPercent />,
    label: "Matching Percent",
    component: "",
  },
  {
    icon: <FaCogs />,
    label: "Setup Tools",
    component: "",
    subItems: [
      { label: "Mobile User Logout", component: "" },
      { label: "API Manager", component: "" },
      { label: "Bank Account", component: "" },
      { label: "Compaint Subject", component: "" },
      { label: "Operator Manager", component: "" },
      { label: "Portal Setting", component: "" },
      { label: "Quick Links", component: "" },
    ],
  },
  {
    icon: <FiSettings />,
    label: "Account Setting",
    component: "",
    subItems: [{ label: "Profile Setting", component: "" }],
  },
  {
    icon: <FaUsersCog />,
    label: "Roles & Permissions",
    component: "",
    subItems: [
      { label: "Roles", component: "" },
      { label: "Permission", component: "" },
    ],
  },
  {
    icon: <RiFileListLine />,
    label: "Resources",
    component: "",
    subItems: [
      { label: "Scheme Manager", component: "" },
      { label: "Company", component: "" },
      { label: "Company Profile", component: "" },
    ],
  },
];

export default function AdminSideBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="bg-primary w-64 h-screen text-white flex flex-col px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">
        <img src={Logo} className="w-20 mx-auto " />
      </h1>
      <Link
        to="/"
        className="flex items-center gap-3 text-white font-extrabold mb-1 hover:bg-white hover:text-[#3B74A5] px-3 py-2 rounded cursor-pointer transition-colors"
      >
        <HiOutlineClipboardList className="text-xl" />
        Dashboard
      </Link>

      <ul className="space-y-1 overflow-y-auto flex-1 min-h-0 scrollbar-thin">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <div
              onClick={() => item.subItems && toggleDropdown(item.label)}
              className="flex items-center justify-between text-sm hover:bg-white hover:text-[#3B74A5] px-3 py-2 rounded cursor-pointer transition-colors"
            >
              <Link to="" className="flex items-center gap-3 flex-1">
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
              {item.subItems && (
                <span className="transform transition-transform duration-200">
                  {openDropdown === item.label ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </span>
              )}
            </div>

            {/* Submenu */}
            {item.subItems && openDropdown === item.label && (
              <ul className="ml-6 mt-1 space-y-2 transition-all duration-300 border-l border-white/20 pl-3">
                {item.subItems.map((sub, subIdx) => (
                  <li
                    key={subIdx}
                    className="text-sm px-2 py-1 rounded hover:bg-white hover:text-[#3B74A5] transition-colors cursor-pointer"
                  >
                    <Link to="">{sub.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
