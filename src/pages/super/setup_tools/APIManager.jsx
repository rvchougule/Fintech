import React, { useState } from "react";
import PaginatedTable from "../../../components/PaginatedTable";
import FilterBar from "../../../components/FilterBar";
import { SuperModal } from "../../../components/super/SuperModel";
import APIManagerForm from "../../../components/super/setup_tools/APIManagerForm";
import { ToggleButton } from "../../../components/utility/ToggleButton";

const data = [
  {
    id: 62,
    productName: "CC-Payments",
    displayName: "CC-Payments",
    apiCode: "ccpayment",
    credentials: "Api Credentials",
    status: true,
  },
  {
    id: 61,
    productName: "Air Pay Pg",
    displayName: "Air Pay",
    apiCode: "airpay",
    credentials: "Api Credentials",
    status: true,
  },
  {
    id: 60,
    productName: "Load Wallet",
    displayName: "Load Wallet",
    apiCode: "fund",
    credentials: "Api Credentials",
    status: true,
  },
  {
    id: 9,
    productName: "Iyda Verification",
    displayName: "Iyda Verification",
    apiCode: "iydaVerification",
    credentials: "Api Credentials",
    status: true,
  },
  {
    id: 8,
    productName: "Iyda MATM SDK",
    displayName: "Iyda MATM SDK",
    apiCode: "iydaMatmSdk",
    credentials: "Api Credentials",
    status: true,
  },
  {
    id: 7,
    productName: "Iyda PAN Card",
    displayName: "Iyda PAN Card",
    apiCode: "iydaPANCard",
    credentials: "Api Credentials",
    status: true,
  },
];

export const APIManager = () => {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    searchValue: "",
    userId: "",
    status: "",
    product: "",
  });

  const [filteredData, setFilteredData] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleInputChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let filtered = [...data];

    // Optional: Handle future filter logic
    if (filters.userId) {
      filtered = filtered.filter((d) =>
        String(d.id).includes(String(filters.userId))
      );
    }

    if (filters.searchValue) {
      const val = filters.searchValue.toLowerCase();
      filtered = filtered.filter((d) =>
        d.productName.toLowerCase().includes(val)
      );
    }

    if (filters.status) {
      filtered = filtered.filter((d) =>
        filters.status === "active" ? d.status : !d.status
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
    return filtered;
  };

  const handleToggle = (indexInDisplay) => {
    const actualIndex = (currentPage - 1) * pageSize + indexInDisplay;
    const updated = [...filteredData];
    updated[actualIndex].status = !updated[actualIndex].status;
    setFilteredData(updated);
  };

  //   Edit API Manager
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState(null);

  // Call this when clicking "Edit"
  const handleEditClick = (row) => {
    setEditData(row);
    setEditModal(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Edited Data:", formData);
    setEditModal(false);
    // 🚀 Update your backend/state here
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
      name: "userId",
      type: "text",
      placeholder: "Agent/Parent",
      value: filters.userId || "",
      onChange: (val) => handleInputChange("userId", val),
    },
    {
      name: "status",
      type: "select",
      placeholder: "Select Status",
      value: filters.status || "",
      onChange: (val) => handleInputChange("status", val),
      options: [
        { label: "Select Status", value: "" },
        { label: "Active", value: "active" },
        { label: "De-active", value: "de-active" },
      ],
    },
  ];

  const columns = [
    { header: "#", accessor: "id" },
    { header: "Product Name", accessor: "productName" },
    { header: "Display Name", accessor: "displayName" },
    { header: "API Code", accessor: "apiCode" },
    {
      header: "Credentials",
      accessor: "credentials",
      render: (row) => (
        <span className="text-blue-500 cursor-pointer">{row.credentials}</span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (row, idx) => (
        <ToggleButton row={row} onchange={() => handleToggle(idx)} />
      ),
    },
    {
      header: "Action",
      accessor: "action",
      render: (row) => (
        <button className="btn-md bg-secondary" onClick={handleEditClick}>
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-transparent">
        <div className=" flex gap-3 justify-between">
          <h2 className="text-2xl font-bold dark:text-adminOffWhite">
            API Manager
          </h2>
        </div>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <PaginatedTable
        data={filteredData}
        filters={filters}
        onSearch={applyFilters}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setFilteredData={setFilteredData}
        pageSize={pageSize}
      />

      {editModal && (
        <SuperModal onClose={() => setEditModal(false)}>
          <APIManagerForm initialData={editData} onSubmit={handleFormSubmit} />
        </SuperModal>
      )}
    </div>
  );
};
