import React, { useState } from "react";
import { sampleData } from "../../../assets/assets";
import FilterBar from "../../../components/utility/FilterBar";
import PaginatedTable from "../../../components/utility/PaginatedTable";

export const AllAEPSTransaction = () => {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    searchValue: "",
    userId: "",
    status: "",
    product: "",
  });

  
  const handleInputChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // filters function
  const applyFilters = () => {
    let data = [...sampleData];

    // Filter by Search: requestedBy.name or mobile
    if (filters.searchValue) {
      const term = filters.searchValue.toLowerCase();
      data = data.filter(
        (d) =>
          d.requestedBy.name.toLowerCase().includes(term) ||
          d.requestedBy.mobile.includes(term)
      );
    }

    // Filter by User ID (exact match)
    if (filters.userId) {
      data = data.filter((d) => String(d.id) === String(filters.userId));
    }

    // Filter by Status (action)
    if (filters.status) {
      data = data.filter(
        (d) => d.action.toLowerCase() === filters.status.toLowerCase()
      );
    }

    // Filter by Product (assumed product info is in remark field or depositDetails.bankName)
    if (filters.product) {
      const term = filters.product.toLowerCase();
      data = data.filter(
        (d) =>
          d.remark.toLowerCase().includes(term) || // if you're using remark to store product info
          d.depositDetails.bankName.toLowerCase().includes(term) // optional based on assumption
      );
    }

    // Filter by From and To Date (on referenceDetails.dateTime)
    if (filters.fromDate || filters.toDate) {
      data = data.filter((d) => {
        const entryDate = new Date(d.referenceDetails.dateTime);
        const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
        const toDate = filters.toDate ? new Date(filters.toDate) : null;

        if (fromDate && entryDate < fromDate) return false;
        if (toDate && entryDate > toDate) return false;
        return true;
      });
    }

    return data;
  };

  const fields = [
    {
      name: "fromDate",
      type: "date",
      placeholder: "From Date",
      value: filters.fromDate || "",
      onChange: (val) => handleInputChange("fromDate", val),
    },
    {
      name: "toDate",
      type: "date",
      placeholder: "To Date",
      value: filters.toDate || "",
      onChange: (val) => handleInputChange("toDate", val),
    },
    {
      name: "searchValue",
      type: "text",
      placeholder: "Search Value",
      value: filters.searchValue || "",
      onChange: (val) => handleInputChange("searchValue", val),
    },
   
    {
      name: "status",
      type: "select",
      placeholder: "Select Status",
      value: filters.status || "",
      onChange: (val) => handleInputChange("status", val),
      options: [
        { label: "success", value: "success" },
        { label: "pending", value: "pending" },
        { label: "failed", value: "failed" },
        { label: "reversed", value: "reversed" },
        { label: "Refunded", value: "Refunded" },
      ],
    },
  ];

  const columns = [
    { header: "#", accessor: "id" },

    {
      header: "Type",
      accessor: "requestedBy",
      render: (row) => (
        <div>
          <p>{row?.requestedBy.name}</p>
          <p>{row.requestedBy.mobile}</p>
          <p>{row.requestedBy.role}</p>
        </div>
      ),
    },
    {
     header:"user details",
     accessor:"details",
     render:(row)=>(
      <div>
        <p>{row.details}</p>
        <p>{row.details}</p>
        <p>{row.details}</p>

      </div>
     ),
    },
    {
      header: "BANK DETAILS",
      accessor: "depositDetails",
      render: (row) => (
        <div>
          <p>{row.depositDetails.bankName}</p>
          <p>{row.depositDetails.accountNo}</p>
          <p>{row.depositDetails.ifsc}</p>
        </div>
      ),
    },
    {
      header: "Transaction Details",
      accessor: "referenceDetails",
      render: (row) => (
        <div>
          <p>{row.referenceDetails.transactionId}</p>
          <p>{row.referenceDetails.dateTime}</p>
        </div>
      ),
    },
    {
      header: "AMOUNT",
      accessor: "wallet",
      render: (row) => (
        <div>
          <p>Main: ₹{row.wallet.main}</p>
          <p>Locked: ₹{row.wallet.locked}</p>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "action",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.action === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {row.action}
        </span>
      ),
    },
  ];

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4  bg-gray-100 dark:bg-transparent  2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-darkBlue/70">
        <div className=" flex gap-3 justify-between">
          <h2 className="text-2xl font-bold dark:text-adminOffWhite">
            All AEPS Txn Statement
          </h2>
        </div>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <PaginatedTable
        data={sampleData}
        filters={filters}
        onSearch={applyFilters}
        columns={columns}
      />
    </div>
  );
};
