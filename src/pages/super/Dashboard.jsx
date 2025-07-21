import { BsBank, BsShieldPlus, BsPersonBadge } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import WalletBalanceCard from "../../components/super/WalletBancedCard";
import { CustomDatePicker } from "../../components/utility/CustomDatePicker";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

const serviceCards = [
  { label: "Recharge & Bill Payment", color: "bg-[#fddbd5] dark:bg-[#60A5FA]" },
  { label: "Banking Services", color: "bg-[#ecd7f2] dark:bg-[#8B5CF6] " },
  { label: "Insurance", color: "bg-[#e4cccc] dark:bg-cardGreenBlue" },
  { label: "Loan Services", color: "bg-[#e0d5e8] dark:bg-[#f69f9f]" },
  { label: "Tours & Travels", color: "bg-[#d5f2e2]" },
];

const Dashboard = () => {
  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8  bg-secondaryOne dark:bg-darkBlue/70  rounded-2xl  2xl:mx-auto text-gray-800 overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-secondaryOne dark:bg-darkBlue/70 dark:text-adminOffWhite py-4">
        <div className="flex justify-between items-center px-4">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <HiOutlineClipboardList className="text-xl" />
            Dashboard
          </h2>
          <div className="flex items-center gap-2 text-sm">
            <CustomDatePicker />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[calc(100vh-120px)] px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {/* Services */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
          {serviceCards.map((card, idx) => (
            <div
              key={idx}
              className={`h-20 p-2 flex items-center justify-center text-center  text-sm font-semibold rounded-md ${card.color} `}
            >
              {card.label}
            </div>
          ))}
        </div>

        {/* Wallet Section */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-1 rounded-md shadow-md w-[60%]">
            <WalletBalanceCard />
          </div>
          <div className=" bg-white rounded-md shadow p-4 text-center w-[40%]">
            <div className="font-semibold text-sm">AEPS</div>
          </div>
        </div>

        {/* MATM Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-green-100 dark:bg-accentGreen p-4 text-center rounded-md">
            <p className="font-semibold text-sm">Success</p>
            <p className="text-xs">0/₹0.00</p>
          </div>
          <div className="bg-yellow-100  p-4 text-center rounded-md">
            <p className="font-semibold text-sm">Pending</p>
            <p className="text-xs">0/₹0.00</p>
          </div>
          <div className="bg-red-100 dark:bg-accentRed p-4 text-center rounded-md">
            <p className="font-semibold text-sm">Failed</p>
            <p className="text-xs">0/₹0.00</p>
          </div>
        </div>

        {/* User Counts & Support Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* User Counts */}
          <div className="bg-white dark:bg-cardOffWhite dark:text-adminOffWhite rounded-md shadow p-4 space-y-2 text-sm">
            <p className="font-semibold">User Counts</p>
           
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
    </div>
  );
};

export default Dashboard;
