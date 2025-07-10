import React, { useState } from "react";
import PaginatedTable from "../../../components/PaginatedTable";

const CommissionRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const data = [];

  const columns = [
    { header: "#", accessor: "#" },
    { header: "USER DETAILS", accessor: "UserDetai" },
    { header: "SETTLEMENT DETAILS", accessor: "transactionDetails" },
    { header: "TXN DETAILS", accessor: "TxnDetails" },
    { header: "DESCRIPTION", accessor: "Description" },
    { header: "REMARK", accessor: "Remark" },
    { header: "STATUS", accessor: "Status" },
  ];

  return (
    <div className="h-auto dark:text-white 2xl:max-w-[80%] mx-auto p-4 px-4 pb-6 dark:bg-darkBlue/70 rounded-2xl overflow-hidden overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6">
        Commission Settlement Details
      </h2>

      {/* Responsive Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
        <div>
          <label className="block text-sm mb-1">From Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 rounded border border-gray-600 dark:text-white  outline-none"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">To Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 rounded border border-gray-600 dark:text-white  outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Search Value</label>
          <input
            type="text"
            placeholder="Search Value"
            className="w-full px-3 py-2 rounded border border-gray-600 dark:text-white  outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">User Id</label>
          <input
            type="text"
            placeholder="Agent/Parent id"
            className="w-full px-3 py-2 rounded border border-gray-600 dark:text-white  outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Status</label>
          <select className="w-full px-3 py-2 rounded border border-gray-600 dark:text-white  outline-none"
            defaultValue=""
          >
            <option value="" disabled>Select status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <div>
          <button className="bg-[#8267F2] text-white w-full px-4 py-2 rounded font-medium hover:opacity-90 transition mt-1 md:mt-0">
            Search
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="dark:bg-[#172b44] dark:text-white p-6 rounded-lg w-full mt-8 overflow-x-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-lg font-semibold">Commition Settlement Details</h2>
          <button className="bg-[#8267F2] text-white px-4 py-2 rounded font-medium hover:opacity-90 transition mt-2 sm:mt-0">
            +New Request
          </button>
        </div>

        <PaginatedTable
          data={data}
          columns={columns}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default CommissionRequest;
