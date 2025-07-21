import React, { useState } from "react";
import PaginatedTable from "../../../components/utility/PaginatedTable";
import FilterBar from "../../../components/utility/FilterBar";

const CommissionRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // Filter states
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [userId, setUserId] = useState("");
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

  // Dummy data
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
      name: "userId",
      type: "text",
      placeholder: "User ID",
      value: userId,
      onChange: setUserId,
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
      userId,
      status,
    });
  };

  return (
    <div className=" m-7 bg-white shadow-sm dark:text-white max-w-[90%] 2xl:max-w-[80%] mx-auto px-8 py-4 pb-6 dark:bg-darkBlue/70 rounded-2xl overflow-hidden overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6">
        Commission Settlement Details
      </h2>

      {/* FilterBar Component */}
      <FilterBar fields={filterFields} onSearch={handleSearch} />

      {/* Table Section */}
      <div className=" dark:text-white p-6 rounded-lg w-full mt-8 overflow-x-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-lg font-semibold">
            Commission Settlement Details
          </h2>
          <button className="bg-secondary text-white px-4 py-2 rounded font-medium hover:opacity-90 transition mt-2 sm:mt-0">
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
