import React, { useState } from "react";
import PaginatedTable from "../../../components/utility/PaginatedTable";
import FilterBar from "../../../components/utility/FilterBar";
import ExcelExportButton from "../../../components/utility/ExcelExportButton";

export const AEPSWallet = () => {
  const Data = [];
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    searchValue: "",
    userId: "",
    status: "",
    product: "",
  });
  const [filteredData, setFilteredData] = useState([...Data]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  
  const handleInputChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // filters function
  const applyFilters = () => {
    let data = [...Data];

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

    setFilteredData(data);
    setCurrentPage(1);

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
      name: "userId",
      type: "text",
      placeholder: "Agent/Parent",
      value: filters.userId || "",
      onChange: (val) => handleInputChange("userId", val),
    },
  ];

  const columns = [
    { header: "#", accessor: "id" },
    {
      header: "Refrences Details",
      accessor: "requestedBy",
      render: (row) => <></>,
    },
    {
      header: "Order ID",
      accessor: "depositDetails",
      render: (row) => <div></div>,
    },
    {
      header: "Transaction Details",
      accessor: "referenceDetails",
      render: (row) => <div></div>,
    },
    {
      header: "TXN Type",
      accessor: "remark",
    },
    {
      header: "ST Type",
      accessor: "remark",
    },
    {
      header: "Status",
      accessor: "remark",
    },
    {
      header: "Opening Bal.",
      accessor: "remark",
    },
    {
      header: "Amount",
      accessor: "remark",
    },
    {
      header: "Closing Bal.",
      accessor: "remark",
    },
  ];

  const handleExport = () => {
    const exportData = filteredData.map((item) => ({
      Id: item.id || "N/A",
      Date: item.date || "N/A",
      Name: item.username || "N/A",
      Email: item.email || "N/A",
      Mobile: item.mobile || "N/A",
      "Role Name": item.type || "N/A",
      "Main Balance": item.mainBalance || "N/A",
      "Aeps Balance": item.aepsBalance || "N/A",
      Parent: item.parentName || "N/A",
      Company: item.website || "N/A",
      Status: item.status ? "Active" : "Inactive",
      address: user.Profile_Details.address || "N/A",
      City: user.Profile_Details.city || "N/A",
      State: user.Profile_Details.state || "N/A",
      
      Pincode: user.Profile_Details.pinCode || "N/A",
      Shopname: user.KYC_Profile.shopName || "N/A",
      "Gst Tin": user.KYC_Profile.gstNumber || "N/A",
      Pancard: user.KYC_Profile.panNumber || "N/A",
      "Aadhar Card": user.KYC_Profile.aadharNumber || "N/A",
      Account: user.Bank_Details.accountNUmber || "N/A",
      Bank: user.Bank_Details.bankName || "N/A",
      Ifsc: user.Bank_Details.ifscCode || "N/A",
    }));

    return exportData;
  };
  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 
    rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-transparent">
        <div className=" flex gap-3 justify-between">
          <h2 className="text-2xl font-bold dark:text-adminOffWhite">
            AEPS Wallet Statement
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button className="btn-24 text-adminOffWhite bg-accentRed ">
              Refresh
            </button>
            <ExcelExportButton
            buttonLabel="Export"
            fileName="request.xlsx"
            data={handleExport()}
              />
          </div>
        </div>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <PaginatedTable
        data={Data}
        filters={filters}
        onSearch={applyFilters}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
      />
    </div>
  );
};
