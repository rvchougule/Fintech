import { useEffect, useState } from "react";
import FilterBar from "../../../components/FilterBar";
import { SuperModal } from "../../../components/super/SuperModel";
import BankTransferForm from "../../../components/super/fund/BankTransferForm";

export const CCFundReport = () => {
  const Data = [];

  const [isModal, setIsModal] = useState({
    AddNew: false,
  });

  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    searchValue: "",
    userId: "",
    status: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const pageSize = 10;
  const maxVisiblePages = 5;

  const handleInputChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  useEffect(() => {
    paginateData();
  }, [filteredData, currentPage]);

  const applyFilters = () => {
    let data = [...Data];

    if (filters.searchValue) {
      data = data.filter((d) =>
        d.userDetails.name
          .toLowerCase()
          .includes(String(filters.searchValue).toLowerCase())
      );
    }

    if (filters.userId) {
      data = data.filter((d) => d.userDetails.id == filters.userId);
    }

    if (filters.status) {
      data = data.filter((d) => d.status.toString() === filters.status);
    }

    setFilteredData(data);
    setCurrentPage(1);
  };

  const paginateData = () => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setDisplayData(filteredData.slice(start, end));
  };

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const getPaginationRange = () => {
    let start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let end = start + maxVisiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
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
        { label: "success", value: "success" },
        { label: "pending", value: "pending" },
        { label: "failed", value: "failed" },
        { label: "approved", value: "approved" },
        { label: "rejected", value: "rejected" },
      ],
    },
  ];

  const handleNewRequest = () => {
    setIsModal((prev) => ({ ...prev, AddNew: !isModal["AddNew"] }));
  };

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-transparent">
        <h2 className="text-2xl font-bold dark:text-adminOffWhite">
          CC Settlement Details
        </h2>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <div className="flex justify-end px-4 py-2">
        <button
          className="px-2 py-1 w-30 text-adminOffWhite bg-accentGreen text-sm rounded cursor-pointer"
          onClick={handleNewRequest}
        >
          + New Request
        </button>
      </div>

      <div className="p-6 rounded-md w-full bg-white dark:bg-transparent dark:text-white">
        <div className="max-w-full  overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <table className=" table-auto text-left text-sm">
            <thead>
              <tr className="bg-darkBlue/90 dark:bg-primaryBlue/30 text-white uppercase text-xs">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Reference Details</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Txnid</th>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Number</th>
                <th className="px-4 py-3">ST_Type / TXN_Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Opening Bal.</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Charge</th>
                <th className="px-4 py-3">Commission/Profit</th>
              </tr>
            </thead>
            <tbody>
              {displayData.length > 0 ? (
                displayData.map((entry, index) => (
                  <tr key={index} className="border-t border-[#3F425D]">
                    <td className="px-4 py-3">
                      <div>{entry.id}</div>
                      <div>{entry.dateTime}</div>
                    </td>
                    <td className="px-4 py-3">
                      <p>{entry?.userDetails?.name}</p>
                      <p>{entry?.userDetails?.id}</p>
                      <p>{entry?.userDetails?.role}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p>Agent ID - {entry?.agentDetails?.agentId}</p>
                      <p>Agent Name - {entry?.agentDetails?.agentName}</p>
                    </td>
                    <td className="px-4 py-3">{entry?.provider}</td>
                    <td className="px-4 py-3">{entry?.txnid}</td>
                    <td className="px-4 py-3">{entry?.orderId}</td>
                    <td className="px-4 py-3">{entry?.number}</td>
                    <td className="px-4 py-3">{entry?.txnType}</td>
                    <td className="px-4 py-3">
                      <button
                        className={`px-3 py-2 w-24 rounded font-semibold text-white capitalize ${
                          entry.status === "success"
                            ? "bg-green-500"
                            : entry.status === "pending"
                            ? "bg-yellow-500"
                            : entry.status === "failed"
                            ? "bg-red-600"
                            : entry.status === "approved"
                            ? "bg-blue-500"
                            : entry.status === "rejected"
                            ? "bg-gray-500"
                            : "bg-slate-400"
                        }`}
                      >
                        {entry.status}
                      </button>
                    </td>
                    <td className="px-4 py-3">{entry?.openingBalance}</td>
                    <td className="px-4 py-3">{entry?.amount}</td>
                    <td className="px-4 py-3">{entry?.charge}</td>
                    <td className="px-4 py-3">{entry?.commission}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={13}>
                    <div className="text-center py-4 text-gray-500 font-semibold w-full">
                      No Rows Found
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-300">
          <p>
            Showing{" "}
            {Math.min((currentPage - 1) * pageSize + 1, filteredData.length)} to{" "}
            {Math.min(currentPage * pageSize, filteredData.length)} of{" "}
            {filteredData.length} entries
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-[#1F2235] text-gray-500 rounded disabled:opacity-30"
            >
              ←
            </button>

            {getPaginationRange().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNum
                    ? "bg-secondary text-white"
                    : "bg-[#1F2235] text-gray-500"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-[#1F2235] text-gray-500 rounded disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      </div>
      {isModal["AddNew"] && (
        <SuperModal
          onClose={() => setIsModal((prev) => ({ ...prev, AddNew: false }))}
        >
          <BankTransferForm />
        </SuperModal>
      )}
    </div>
  );
};
