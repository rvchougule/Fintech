import { useState } from "react";
import { Link } from "react-router";

import { IoIosArrowDown, IoIosArrowForward } from "../../assets/react-icons";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";

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
  FaFileInvoiceDollar,
  FiLink,
  FaRegSquare,
  FaRegAddressCard,
  FaHandshake,
  FaHandHoldingDollar,
} from "../../assets/react-icons";

import Logo  from "./../../assets/img/logo.png";

const menuItems = [
  {
    icon: <FaFileInvoiceDollar />,
    label: "Utility Recharge",
    component: "",
    subItems: [
      { label: "Mobile Recharge", component: "utility/mobile-recharge" },
      { label: "DTH Recharge", component: "utility/dth-recharge" },
    ],
  },
  {
    icon: <HiOutlineClipboardList />,
    label: "Bill Payment",
    component: "",
    subItems: [
      { label: "Electricity", component: "/billpay/electricity" },
      { label: "Postpaid", component: "/billpay/postpaid" },
      { label: "Water", component: "/billpay/water" },
      { label: "Broadband", component: "/billpay/dashboard" },
      { label: "LPG Gas", component: "/billpay/lpggas" },
      { label: "Piped Gas", component: "/billpay/gas" },
      { label: "Landline", component: "/billpay/landline" },
      { label: "Education Fees", component: "/billpay/educationfees" },
      { label: "Fastag", component: "/billpay/fastag" },
      { label: "Loan Repayment", component: "/billpay/loanrepayment" },
      { label: "Insurance", component: "/billpay/insurance" },
      { label: "Rental", component: "/billpay/rental" },
      { label: "Donation", component: "/billpay/donation" },
      { label: "Subscription", component: "/billpay/subscription" },
      { label: "Hospital", component: "/billpay/hospital" },
      {
        label: "Clubs and Associations",
        component: "/billpay/clubsandassociations",
      },
      { label: "Municipal Services", component: "/billpay/municipalservices" },
      { label: "Municipal Taxes", component: "/billpay/municipaltaxes" },
      { label: "Housing Society", component: "/billpay/housingsociety" },
      { label: "Life Insurance", component: "/billpay/lifeinsurance" },
      { label: "Cable TV", component: "/billpay/cabletv" },
      { label: "Credit Card", component: "/billpay/creditcard" },
      { label: "Recurring Deposit", component: "/billpay/recurringdeposit" },
    ],
  },
  {
    icon: <FaRegAddressCard />,
    label: "Pan Card",
    component: "",
    subItems: [{ label: "UTI", component: "Pancard/Uti" }],
  },
  {
    icon: <FaFileInvoiceDollar />,
    label: "Banking Service",
    component: "",
    subItems: [
      { label: "AEPS", component: "/bankingservices/aepsRegistrationForm" },
      { label: "Payout", component: "/bankingservices/payout" },
    ],
  },
  {
    icon: <FiLink />,
    label: "Service Links",
    component: "",
    subItems: [{ label: "Aadhaar Update", component: "" }],
  },

  {
    icon: <FaUser />,
    label: "Member",
    component: "",
    subItems: [
      { label: "Retailer", component: "members/retail" },
      { label: "Customer", component: "members/customer" },
    ],
  },

  {
    icon: <FaMoneyBillAlt />,
    label: "Fund",
    component: "",
    subItems: [{ label: "Request Report", component: "fund/requestviewall" }],
  },
  {
    icon: <FaListAlt />,
    label: "Agent List",
    component: "",
    subItems: [{ label: "AePS", component: "/statement/aeps" }],
  },
  {
    icon: <FaHandshake />,
    label: "Affiliate",
    component: "",
    subItems: [
      { label: "Affiliate Service", component: "/affiliate/affiliateservices" },
    ],
  },
  {
    icon: <FaHandHoldingDollar />,
    label: "Commision",
    component: "",
    subItems: [{ label: "Request", component: "commission/request" }],
  },
  {
    icon: <HiOutlineDocumentReport />,
    label: "Transaction Report",
    component: "/statement/transaction-history",
    subItems: [
      { label: "All AEPS Transaction", component: "statement/aeps-txn" },
      { label: "Bill Pay Statement", component: "statement/bill-pay" },
      { label: "Payout Statement", component: "statement/money" },
      { label: "Verification Statement", component: "statement/verification" },
      { label: "Affilate Statement ", component: "statement/affiliate" },
      { label: "Micro ATM Statement", component: "statement/micro-atm" },
      { label: "Recharge Statement", component: "statement/recharge" },
      { label: "UTI Pancard Statement", component: "statement/uti-pancard" },
      { label: "Credit Card Payment", component: "statement/credit" },
    ],
  },

  {
    icon: <FaWallet />,
    label: "Wallet History",
    component: "",
    subItems: [
      { label: "Main Wallet", component: "statement/account" },
      { label: "AEPS Wallet", component: "statement/aeps-wallet" },
      { label: "Commision Wallet", component: "statement/commission-wallet" },
    ],
  },
  { icon: <BiSolidMessage />, label: "Complaints", component: "" },

  {
    icon: <FiSettings />,
    label: "Account Setting",
    component: "",
    subItems: [{ label: "Profile Setting", component: "profile/view" }],
  },
];

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="bg-primary dark:bg-darkBlue w-64 h-screen text-white flex flex-col px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">
        <img src={Logo} className="w-30 mx-auto " />
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
              <Link
                to={item?.component}
                onClick={(e) => (!item.component ? e.preventDefault() : null)}
                className="flex items-center gap-3 flex-1"
              >
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
                    <Link to={sub?.component}>{sub.label}</Link>
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
