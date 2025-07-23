import { Link } from "react-router-dom";
import { HiCreditCard, HiOutlineCalendar } from "react-icons/hi2";
import { MdAccountBalance, MdHomeWork, MdSpeed } from "react-icons/md";
import {
  FaClipboardCheck,
  FaHandHoldingUsd,
  FaHotel,
  FaTicketAlt,
  FaBus,
  FaTags,
  FaCarCrash,
  FaShieldAlt,
} from "react-icons/fa";
import { RiBankLine, RiFlightTakeoffFill } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { GiMedicines, GiTakeMyMoney } from "react-icons/gi";
import { AiFillFileText, AiOutlineEye } from "react-icons/ai";
import CreditCardModal from "../../../components/super/affiliate/CreditCardModal";

const cardData = [
  {
    title: "SBI Credit Card",
    earn: "1600.00",
    joiningFee: "200.00",
    annualFee: "480.00",
    approvalRate: "Excellent",
    benefits: [
      { icon: "🛍️", text: "Up to 5% Cashback on online spends" },
      { icon: "🎁", text: "Welcome Gifts like Smartwatch & Vouchers" },
      { icon: "🏆", text: "10X Reward Points on Myntra, BMS, Apollo, etc." },
      { icon: "🧳", text: "Free Airport Lounge Access (on select cards)" },
      { icon: "🛡️", text: "Insurance Cover up to ₹50 Lakhs*" },
      { icon: "⛽", text: "Fuel Surcharge Waiver" },
      { icon: "💳", text: "Instant EMI Conversion" },
      { icon: "🔥", text: "Trusted by 15 Million+ users | Backed by SBI" },
    ],
  },

  {
    title: "SBI Credit Card",
    earn: "1600.00",
    joiningFee: "200.00",
    annualFee: "480.00",
    approvalRate: "Excellent",
    benefits: [
      {
        icon: "🎁",
        text: "₹500 Cashback – Spend ₹5,000 in 30 days via HSBC App",
      },
      {
        icon: "🛢️",
        text: "Fuel Savings – Save up to ₹3,000 annually on fuel surcharge*",
      },
      {
        icon: "✈️",
        text: "Travel Smarter – Convert spends into Air Miles with InterMiles, British Airways & Singapore Airlines",
      },
      {
        icon: "🎯",
        text: "Accelerated Rewards – Earn 5X points post ₹4L spend (up to 15,000 bonus points)",
      },
      {
        icon: "🧳",
        text: "Lifestyle Perks – Enjoy complimentary domestic airport lounge access",
      },
    ],
  },
];

const Affiliateservices = () => {
  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4  bg-gray-100 dark:bg-darkBlue/70 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Section 1: Banking and Finance */}
      <div className="bg-white rounded-md p-4 mb-4 shadow-sm dark:text-white dark:bg-darkBlue/70">
        <p className="font-semibold text-gray-800 text-xl mb-4 dark:text-white">
          Banking and Finance
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Link to="/product/catgoryid" state={cardData}>
                <HiCreditCard size={30} className="text-lime-500" />
              </Link>
            </div>
            <p className="text-sm mt-1">Credit Card</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Link to="/product/catgoryid" state={cardData}>
                <MdAccountBalance size={30} className="text-lime-500" />
              </Link>
            </div>
            <p className="text-sm mt-1">Saving Account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Link to="/product/catgoryid" state={cardData}>
                <FaClipboardCheck size={30} className="text-lime-500" />
              </Link>
            </div>
            <p className="text-sm mt-1">Investment</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <Link to="/product/catgoryid" state={cardData}>
                <RiBankLine size={30} className="text-lime-500" />
              </Link>
            </div>
            <p className="text-sm mt-1">Demat Account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <HiOutlineCalendar size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Subscription</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <TbExchange size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Mutual Funds</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <MdHomeWork size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Loan DSA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaHandHoldingUsd size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Current Account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <MdSpeed size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">CIBIL Score</p>
          </div>
        </div>
      </div>

      {/* Section 2: Hotels and Tickets */}
      <div className="bg-white rounded-md p-4 mb-4 shadow-sm dark:text-white dark:bg-darkBlue/70">
        <p className="font-semibold text-gray-800 text-xl mb-4 dark:text-white">
          Hotels and Tickets
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaHotel size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Hotels</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <RiFlightTakeoffFill size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Flights</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaTicketAlt size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Movie Tickets</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaBus size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Bus</p>
          </div>
        </div>
      </div>

      {/* Section 3: Shopping, Health, Food */}
      <div className="bg-white rounded-md p-4 mb-4 shadow-sm dark:text-white dark:bg-darkBlue/70">
        <p className="font-semibold text-xl mb-4 dark:text-white">
          Shopping, Health, Food
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <TiShoppingCart size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Shopping</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaTags size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Brand Malls</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <GiMedicines size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Online Medicines</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <GiTakeMyMoney size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Order Food</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaCarCrash size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Car Insurance</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaShieldAlt size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Health Insurance</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <AiFillFileText size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Bike Insurance</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-white rounded-md p-4 mb-4 shadow-sm dark:text-white dark:bg-darkBlue/70">
        <p className="font-semibold text-xl mb-4 dark:text-white ">
          Product List
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <HiCreditCard size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Credit Card</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <MdAccountBalance size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Saving Account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaClipboardCheck size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Investment</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <RiBankLine size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Demat Account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <HiOutlineCalendar size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Subscription</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <TbExchange size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Mutual Funds</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <MdHomeWork size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Loan DSA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaHandHoldingUsd size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Current Account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <MdSpeed size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">CIBIL Score</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaHotel size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Hotels</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <RiFlightTakeoffFill size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Flights</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaTicketAlt size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Movie Tickets</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaBus size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Bus</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <TiShoppingCart size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Shopping</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaTags size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Brand Malls</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <GiMedicines size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Online Medicines</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <GiTakeMyMoney size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Order Food</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaCarCrash size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Car Insurance</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <FaShieldAlt size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Health Insurance</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <AiFillFileText size={30} className="text-lime-500" />
            </div>
            <p className="text-sm mt-1">Bike Insurance</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Affiliateservices;
