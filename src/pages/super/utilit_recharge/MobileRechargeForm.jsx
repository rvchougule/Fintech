import React, { useState } from "react";
import RechargeForm from "../../../components/super/Utility_Recharg_componant/RechargeForm";
import PaginatedTable from "../../../components/utility/PaginatedTable";

const history = [
  {
    orderId: 103,
    dateTime: "30 Sep 24 - 03:31 PM",
    number: "8309207889",
    operator: "JIORECH",
    amount: "₹239",
    profit: "₹1.2",
    status: "Success",
  },
  // Add more records as needed
];

const MobileRechargeForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      header: "Order ID",
      accessor: "orderId",
      render: (row) => (
        <>
          <div className="font-semibold">{row.orderId}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {row.dateTime}
          </div>
        </>
      ),
    },
    {
      header: "Recharge Details",
      render: (row) => (
        <>
          <div>Number - {row.number}</div>
          <div>Operator - {row.operator}</div>
        </>
      ),
    },
    {
      header: "Amount/Commission",
      render: (row) => (
        <>
          <div>Amount - {row.amount}</div>
          <div>Profit - {row.profit}</div>
        </>
      ),
    },
    {
      header: "Status",
      render: (row) => (
        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded">
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-2 md:p-4 lg:p-6 bg-transparent dark:bg-darkBlue/70  dark:text-white overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Recharge Form */}
        <div className="bg-white dark:bg-darkBlue/70 rounded p-4 sm:p-6 lg:p-8 mb-8 shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
            Mobile Recharge
          </h2>
          <RechargeForm />
        </div>

        {/* Recharge History */}
        <div className="bg-white dark:bg-darkBlue/70 rounded p-4 sm:p-6 lg:p-8 shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Recent Mobile Recharge
          </h3>
          <PaginatedTable
            data={history}
            columns={columns}
            pageSize={5}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileRechargeForm;