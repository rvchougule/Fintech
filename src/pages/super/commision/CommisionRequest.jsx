import React, { useState } from "react";
import PaginatedTable from "../../../components/utility/PaginatedTable";
import FilterBar from "../../../components/utility/FilterBar";

const CommissionRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("");

  // Table columns
  const columns = [
    { header: "#", accessor: "#" },
    { header: "USER DETAILS", accessor: "UserDetail" },
    { header: "SETTLEMENT DETAILS", accessor: "transactionDetails" },
    { header: "TXN DETAILS", accessor: "TxnDetails" },
    { header: "DESCRIPTION", accessor: "Description" },
    { header: "REMARK", accessor: "Remark" },
    { header: "STATUS", accessor: "Status" },
  ];

  // Dummy data (empty for now)
  const data = [];

  // Fields for FilterBar
  const filterFields = [
    {
      name: "fromDate",
      type: "date",
      placeholder: "From Date",
      value: fromDate,
      onChange: setFromDate,
    },
    {
      name: "toDate",
      type: "date",
      placeholder: "To Date",
      value: toDate,
      onChange: setToDate,
    },
    {
      name: "searchValue",
      type: "text",
      placeholder: "Search Value",
      value: searchValue,
      onChange: setSearchValue,
    },
    {
      name: "status",
      type: "select",
      placeholder: "Status",
      value: status,
      onChange: setStatus,
      options: [
        { value: "", label: "Select Status", disabled: true },
        { value: "approved", label: "Approved" },
        { value: "pending", label: "Pending" },
        { value: "rejected", label: "Rejected" },
        { value: "success", label: "Success" },
        { value: "failed", label: "Failed" },
      ],
    },
  ];

  // Search handler
  const handleSearch = () => {
    console.log({
      fromDate,
      toDate,
      searchValue,
      status,
    });
  };

  return (
    <div className="h-[90vh] bg-gray-100 dark:bg-transparent px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Filter Section */}
      <div className="my-3 shadow-sm w-full max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 sm:px-8 py-6 bg-white dark:bg-darkBlue rounded overflow-x-auto dark:text-white">
        <h2 className="text-lg font-semibold mb-6">
          Commission Settlement Filters
        </h2>
        <FilterBar fields={filterFields} onSearch={handleSearch} />
      </div>

      {/* Table Section */}
      <div className="w-full max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 sm:px-8 py-6 mt-4 bg-white dark:bg-darkBlue rounded shadow-sm overflow-x-auto dark:text-white mb-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          <h2 className="text-lg font-semibold">
            Commission Settlement Details
          </h2>
          <button className="bg-secondary text-white px-4 py-2 rounded font-medium hover:opacity-90 transition cursor-pointer">
            + New Request
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
