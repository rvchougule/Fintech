import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

const tabs = [
  "Mobile Recharge",
  "AEPS",
  "DMT",
  "DTH Recharge",
  "Micro ATM",
  "Bill Payments",
];

const dataByTab = {
  "Mobile Recharge": [
    { provider: "BSNL TOPUP", type: "Percent", distributor: "2.5" },
    { provider: "BSNL VALIDITY", type: "Percent", distributor: "2.5" },
    { provider: "JIORECH", type: "Percent", distributor: "0.6" },
    { provider: "VI", type: "Percent", distributor: "2.5" },
    { provider: "AIRTEL", type: "Percent", distributor: "0.6" },
  ],
  AEPS: [
    { provider: "Aeps Slab1 1-1000", type: "Percent", distributor: "0.31" },
    { provider: "Aeps Slab2 1000 -1499", type: "Percent", distributor: "0.31" },
    { provider: "Aeps Slab3 1500-1999", type: "Percent", distributor: "0.31" },
    { provider: "Aeps Slab4 2000-2499", type: "Percent", distributor: "0.31" },
    { provider: "Aeps Slab5 2500 -2999", type: "Percent", distributor: "0.31" },
    { provider: "Aeps Slab6 3000 - 5999", type: "Flat", distributor: "9" },
    { provider: "Aeps Slab7 6000-10000", type: "Flat", distributor: "9" },
  ],
  DMT: [{}],
  "DTH Recharge": [
    { provider: "Tata Sky", type: "Percent", distributor: "2.1" },
    { provider: "Dish TV", type: "Percent", distributor: "2.1" },
    { provider: "Videocon D2H", type: "Percent", distributor: "2.1" },
    {
      provider: "Sun Direct TV (With Validation)",
      type: "Percent",
      distributor: "2.1",
    },
    { provider: "Airtel DTH", type: "Percent", distributor: "2.1" },
  ],
  "Micro ATM": [{}],
  "Bill Payments": [
    { provider: "NCMC Recharge", type: "Flat", distributor: "0.6" },
  ],
};

const ViewCommission = () => {
  const [activeTab, setActiveTab] = useState("Mobile Recharge");
  const tableData = dataByTab[activeTab] || [];

  return (
    <div className=" h-[100vh] dark:text-white dark:bg-darkBlue/70 bg-gray-100 min-h-screen py-6 px-3 md:px-6 lg:px-10 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
      <div className="dark:text-white dark:bg-darkBlue/70 bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-screen-lg mx-auto w-full">
        {/* Tabs */}
        <div className="dark:text-white dark:bg-darkBlue/70 flex flex-wrap sm:flex-nowrap gap-2 border-b mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 text-sm sm:text-base font-medium px-3 sm:px-4 py-2 rounded-t-md transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "bg-[#7367f0] text-white "
                  : "text-gray-700 hover:text-[#7367f0] dark:text-white"
              }`}
            >
              <AiOutlineHome className="text-lg" />
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base text-gray-700 dark:text-white">
            <thead>
              <tr className="bg-white dark:text-white dark:bg-slate-900 border-b">
                <th className="text-left py-3 px-4 w-1/2">PROVIDER</th>
                <th className="text-left py-3 px-4 w-1/4">TYPE</th>
                <th className="text-center py-3 px-4 w-1/4">DISTRIBUTOR</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 && tableData[0].provider ? (
                tableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-200 hover:text-black dark:hover:bg-gray-300 dark:hover:text-black "
                  >
                    <td className="py-3 px-4">{row.provider}</td>
                    <td className="py-3 px-4">{row.type}</td>
                    <td className="py-3 px-4 text-center">{row.distributor}</td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewCommission;
