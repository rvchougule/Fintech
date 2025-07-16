import { ServiceCard } from "../../components/admin/ServiceCard";
import { SummaryCard } from "../../components/admin/SummaryCard";
import WalletBalanceCard from "../../components/admin/WalletBancedCard";

// service icons
import { RiAdminFill } from "react-icons/ri";
import {
  BiSolidUserRectangle,
  HiShieldCheck,
  PiPottedPlantFill,
  FaMoneyCheck,
} from "../../assets/react-icons";
import { useModal } from "../../hooks/useModel";
import { AdminModal } from "../../components/admin/AdminModel";
import { useState } from "react";
import { CustomDatePicker } from "../../components/CustomDatePicker";

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

export function AdminDashboard() {
  const [modalData, setModalData] = useState(null);
  const { showModal, openModal, closeModal } = useModal();

  const handleCardClick = (data) => {
    setModalData(data);
    openModal();
  };
  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8  bg-secondaryOne rounded-t-2xl xl:rounded-b-2xl 2xl:mx-auto text-gray-800 overflow-hidden">
      <div className="sticky top-0 z-10 bg-secondaryOne py-4">
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
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-semibold mb-4">User Counts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <RiAdminFill className="inline mr-2" /> White Label{" "}
                <span className="float-right font-bold">1</span>
              </li>
              <li>
                <RiAdminFill className="inline mr-2" /> Master Distributor{" "}
                <span className="float-right font-bold">2</span>
              </li>
              <li>
                <RiAdminFill className="inline mr-2" /> Distributer{" "}
                <span className="float-right font-bold">1</span>
              </li>
              <li>
                <RiAdminFill className="inline mr-2" /> Retailor{" "}
                <span className="float-right font-bold">1</span>
              </li>
              <li>
                <RiAdminFill className="inline mr-2" /> Users{" "}
                <span className="float-right font-bold">1</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center text-center gap-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/user-female-circle.png"
                alt="Support"
                className="w-10 h-10"
              />
            </div>
            <p className="text-sm">Timing: 10am to 7pm</p>
            <p className="text-sm font-semibold">9059207545</p>
            <p className="text-sm text-blue-600 font-medium">
              support@phonesepay.in
            </p>
          </div>
        </div>
      </div>
      {showModal && modalData && (
        <AdminModal onClose={closeModal}>
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
        </AdminModal>
      )}
    </div>
  );
  P;
}
