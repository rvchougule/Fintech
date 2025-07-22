// service icons
import { RiAdminFill } from "react-icons/ri";
import { BsBank, BsShieldPlus, BsPersonBadge } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  BiSolidUserRectangle,
  HiShieldCheck,
  PiPottedPlantFill,
  FaMoneyCheck,
} from "../../assets/react-icons";

import { CustomDatePicker } from "../../components/utility/CustomDatePicker";
import WalletBalanceCard from "../../components/super/dashboard/WalletBancedCard";
import { ServiceCard } from "../../components/super/dashboard/ServiceCard";
import { SummaryCard } from "../../components/super/dashboard/SummaryCard";
import { useState } from "react";
import { SuperModal } from "../../components/utility/SuperModel";
import { Link } from "react-router";

const serviceCards = [
  {
    icon: <BiSolidUserRectangle size={24} />,
    bgIcon: "bg-[#7fd3ec]",
    label: "Recharge & Bill Payment",
  },
  {
    icon: <HiShieldCheck size={24} />,
    bgIcon: "bg-[#978ee1]",
    label: "Banking Services",
    bgColor: "bg-[#00B89438]",
  },
  {
    icon: <PiPottedPlantFill size={24} />,
    bgIcon: "bg-[#f4bdcf]",
    label: "Insurance",
    bgColor: "bg-[#FDE7EF]",
  },
  {
    icon: <FaMoneyCheck size={24} />,
    bgIcon: "bg-[#978ee1]",
    label: "Loan Services",
    bgColor: "bg-[#6C5CE738]",
  },
];

const summaryData = [
  {
    label: "AEPS",
    color: "green",
    transactions: [
      { label: "Success", value: "0/₹0.00", color: "green" },
      { label: "Pending", value: "0/₹0.00", color: "yellow" },
      { label: "Failed", value: "0/₹0.00", color: "red" },
    ],
  },
  {
    label: "Recharge",
    color: "yellow",
    transactions: [
      { label: "Success", value: "10/₹500.00", color: "green" },
      { label: "Pending", value: "2/₹100.00", color: "yellow" },
      { label: "Failed", value: "1/₹50.00", color: "red" },
    ],
  },
  {
    label: "BillPayment",
    color: "red",
    transactions: [
      { label: "Success", value: "5/₹250.00", color: "green" },
      { label: "Pending", value: "0/₹0.00", color: "yellow" },
      { label: "Failed", value: "0/₹0.00", color: "red" },
    ],
  },
  {
    label: "AEPS",
    color: "green",
    transactions: [
      { label: "Success", value: "0/₹0.00", color: "green" },
      { label: "Pending", value: "0/₹0.00", color: "yellow" },
      { label: "Failed", value: "0/₹0.00", color: "red" },
    ],
  },
  {
    label: "Recharge",
    color: "yellow",
    transactions: [
      { label: "Success", value: "10/₹500.00", color: "green" },
      { label: "Pending", value: "2/₹100.00", color: "yellow" },
      { label: "Failed", value: "1/₹50.00", color: "red" },
    ],
  },
  {
    label: "BillPayment",
    color: "red",
    transactions: [
      { label: "Success", value: "5/₹250.00", color: "green" },
      { label: "Pending", value: "0/₹0.00", color: "yellow" },
      { label: "Failed", value: "0/₹0.00", color: "red" },
    ],
  },
];

export default function Dashboard() {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (data) => {
    setModalData(data);
    setShowModal(true);
  };
  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 dark:text-white  bg-secondaryOne dark:bg-darkBlue  rounded-t-2xl xl:rounded-b-2xl 2xl:mx-auto text-gray-800 overflow-hidden">
      <div className="sticky top-0 z-10  py-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <CustomDatePicker />
        </div>
      </div>
      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[calc(100vh-120px)] px-4 pb-6  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="">
          <div className="flex gap-2">
            <div className="w-1/2">
              <WalletBalanceCard />
            </div>
            <div className="grid grid-cols-2 gap-2 w-1/2">
              <ServiceCard {...serviceCards[0]} />
              <ServiceCard {...serviceCards[1]} />
            </div>
          </div>
          <div className="">
            {/* Summary */}
            <div className="flex  gap-4 my-6 ">
              <div className="grid grid-cols-3 gap-6 w-1/2">
                {summaryData.map((item, idx) => (
                  <div key={idx} onClick={() => handleCardClick(item)}>
                    <SummaryCard label={item.label} color={item.color} />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 w-1/2">
                <ServiceCard {...serviceCards[2]} />
                <ServiceCard {...serviceCards[3]} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {/* User Counts */}
          <div className="bg-white dark:bg-cardOffWhite dark:text-adminOffWhite rounded-md shadow p-4 space-y-2 text-sm">
            <p className="font-semibold">User Counts</p>

            <Link to="members/whitelabel">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BsBank className="text-purple-500" /> White Label
                </div>
                <span>2</span>
              </div>
            </Link>
            <Link to="members/mds">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BsShieldPlus className="text-pink-500" /> Master Distributer
                </div>
                <span>1</span>
              </div>
            </Link>
            <Link to="members/ds">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BsPersonBadge className="text-cyan-500" /> Distributer
                </div>
                <span>1</span>
              </div>
            </Link>
            <Link to="members/retail">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaUser className="text-amber-500" /> Retailer
                </div>
                <span>1</span>
              </div>
            </Link>
            <Link to="members/customer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaUser className="text-cyan-500" /> Customer
                </div>
                <span>1</span>
              </div>
            </Link>
          </div>
          {/* Support Box */}
          <div className="bg-white dark:bg-cardOffWhite dark:text-adminOffWhite rounded-md shadow p-4 text-center text-sm">
            <div className="flex justify-center mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="support"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <p className="mb-1">Timing: 10am to 7pm</p>
            <p>9059207545</p>
            <p className="font-semibold">support@phonesepay.in</p>
          </div>
        </div>
      </div>
      {showModal && modalData && (
        <SuperModal onClose={() => setShowModal(false)}>
          <div className="mb-4 text-lg font-semibold text-center">
            {modalData.label} Transactions
          </div>
          <div className="grid grid-cols-3 gap-6 justify-between">
            {modalData.transactions.map((tx, idx) => (
              <SummaryCard
                key={idx}
                label={tx.label}
                value={tx.value}
                color={tx.color}
              />
            ))}
          </div>
        </SuperModal>
      )}
    </div>
  );
  P;
}
