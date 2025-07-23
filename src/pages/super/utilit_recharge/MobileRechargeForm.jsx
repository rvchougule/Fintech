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
    <div className="h-[100vh] dark:text-white 2xl:max-w-[100%] p-4 mx-8 dark:bg-transparent  mt-2 rounded-xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Mobile Recharge Form   */}
      <div className="bg-white dark:bg-darkBlue rounded-lg p-6 shadow mb-10">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white dark:bg-darkBlue">
          Mobile Recharge
        </h2>
        <RechargeForm />
      </div>

      <div className="bg-white dark:bg-dark rounded-lg p-6 shadow mt-2 dark:text-white dark:bg-darkBlue text-black">
        <h3 className="text-xl font-semibold mb-4">Recent Mobile Recharge</h3>
        <PaginatedTable
          data={history}
          columns={columns}
          pageSize={5}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MobileRechargeForm;
