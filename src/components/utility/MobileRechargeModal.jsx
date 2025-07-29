import React from "react";

const MobileRechargeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50  bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white dark:bg-darkBlue w-[90%] md:w-[60%] lg:w-[50%] max-h-[80vh] rounded-lg shadow-lg p-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold dark:text-white text-gray-800">Mobile Plans</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Tab */}
        <div className="mb-4">
          <button className="border-b-2 border-purple-600 text-purple-600 font-medium px-2 py-1">
            Mobile Plan
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 text-sm uppercase bg-gray-100">
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Validity</th>
                <th className="py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm dark:text-white">
              {[
                { amount: "₹11.8", desc: "&tv" },
                { amount: "₹22.42", desc: "&tv HD" },
                { amount: "₹0", desc: "Anjan TV" },
                { amount: "₹0", desc: "Anmol Tv" },
                { amount: "₹0", desc: "Atrangii" },
                { amount: "₹0", desc: "Big Magic" },
                { amount: "₹0.11", desc: "BINDASS" },
                { amount: "₹22.42", desc: "Colors" },
              ].map((plan, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-2 px-4">
                    <button className="bg-purple-500 text-white text-sm px-3 py-1 rounded shadow-sm" >
                      {plan.amount}
                    </button>
                  </td>
                  <td className="py-2 px-4">30 days</td>
                  <td className="py-2 px-4">{plan.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MobileRechargeModal;
