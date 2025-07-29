import React, { useEffect, useState } from "react";
import { FaSearch, FaDownload, FaInfoCircle, FaEdit } from "react-icons/fa";
import PaginatedTable from "../../utility/PaginatedTable";
import TransactionDetailsSection from "./TransactionDetailsSection";
import { SuperModal } from "../../utility/SuperModel";

const RunpaisaHistoryTable = ({ title, note, data, cols }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("2025-06-18");
  const [endDate, setEndDate] = useState("2025-06-18");

  const handleSearch = () => console.log("Search clicked");
  const handleExport = () => console.log("Export clicked");

  const [filteredData, setFilteredData] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [transactionDetailModal, setTransactionDetailModal] = useState(false);
  const [transactionDetail, setTransactionDetail] = useState([]);

  const handleInfoClick = (row) => {
    setTransactionDetail(row);
    setTransactionDetailModal(true);
  };

  useEffect(() => {
    setFilteredData(() => {
      return data.filter(
        (row) =>
          row.txnId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.amount?.toString().includes(searchTerm)
      );
    });
  }, [currentPage, data]);

  const columns = [
    { header: "SR.NO.", accessor: "id" },
    { header: "CREATED AT", accessor: "createdAt" },
    { header: "TXNUSER", accessor: "txnuser" },
    { header: "USERROLE", accessor: "userRole" },
    { header: "TXN ID", accessor: "txnId" },
    { header: "REF NO", accessor: "refNo" },
    { header: "AMOUNT", accessor: "amount" },
    {
      header: "STATUS",
      accessor: "status",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === "Success"
              ? "bg-green-500 text-white"
              : row.status === "Pending"
              ? "bg-orange-500 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "ACTION",
      accessor: "action",
      render: (row, idx) => (
        <>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleInfoClick(row)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 flex items-center gap-1"
            >
              <FaInfoCircle className="h-3 w-3" />
              Info
            </button>
            <button
              onClick={() => handleEditClick(row)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 flex items-center gap-1"
            >
              <FaEdit className="h-3 w-3" />
              Edit
            </button>
          </div>
        </>
      ),
    },
  ];

  const transactionDetails = {
    username: "Hafeez Shank",
    "user role": "Retailer",
    amount: "₹ 89999",
    txnID: "PKEBP6798338775",
    txnDate: "2025-06-18 10:58:09",
    refNo: "pay_QiXkquPSIOUmkp",
    status: "Success",
    paymentMode: "CREDIT_CARD",
    gst: "267.783",
    charges: "1487.683",
    remark: "-",
    createdAt: "18 Jun 25 - 10:55 AM",
    statusCode: "RP000",
    errorID: "SUCCESS",
    errorDesc: "Transaction Successful",
    cardNumber: "3716",
    cardType: "CREDIT",
    cardCategory: "VISA", //extra
    txnInfo: "Utility Bill Payment",
    customerName: "Suresh Maloth",
    customerEmail: "malothsuresh@gmail.com",
    customerPhone: "9908134963",
    bankTxnID: "pay_QiXkquPSIOUmkp",
    bankCode: "299942",
    unmappedStatus: "NA",
    pgPartner: "RAZORPAYCROWPEFAST",
    mercUnqRef: "-",
    statusResponse: "NA",
    callbackResponse: "NA",
  };

  return (
    <div className="bg-white dark:bg-cardOffWhite dark:text-adminOffWhite rounded-lg shadow-md w-full">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Title & Note */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">
              {title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{note}</p>
          </div>

          {/* Controls: Filters, Search, Export */}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:items-center">
            {/* Date Inputs */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              />
            </div>

            {/* Search and Export */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-40">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 pl-8 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 w-full"
                />
                <FaSearch className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
              </div>
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium w-full sm:w-auto"
              >
                Search
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaDownload className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <PaginatedTable
        data={filteredData}
        // filters={filters}
        // onSearch={applyFilters}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
      />

      {transactionDetailModal && (
        <SuperModal onClose={() => setTransactionDetailModal(false)}>
          <TransactionDetailsSection
            userDetails={{
              userName: "HAFEEZ SHAIK",
              userRole: "Retailer",
              userAgentcode: "PKEBP19800",
              userMobile: "9959595143",
            }}
            parentDetails={{
              parentName: "ADMIN USER",
              parentRole: "Super Distributor",
              parentCode: "SUP19800",
            }}
            transactionDetails={transactionDetails}
          />
        </SuperModal>
      )}
    </div>
  );
};

export default RunpaisaHistoryTable;
