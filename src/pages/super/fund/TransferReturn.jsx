import { useEffect, useState } from "react";
import FilterBar from "../../../components/FilterBar";
import { transferReturn as TRData } from "../../../assets/assets";
export const TransferReturn = () => {
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

  // ✅ Generic input handler
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

  // filters function
  const applyFilters = () => {
    let data = [...TRData];

    if (filters.searchValue) {
      data = data.filter((d) =>
        d.name.toLowerCase().includes(String(filters.searchValue).toLowerCase())
      );
    }

    if (filters.userId) {
      data = data.filter((d) => d.id == filters.userId);
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

  // Pagination
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
  ];

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-transparent">
        <h2 className="text-2xl font-bold dark:text-adminOffWhite">
          Transfer / Return
        </h2>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <div className="p-6 rounded-md w-full bg-white dark:bg-transparent dark:text-white">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="bg-darkBlue/90 dark:bg-primaryBlue/30 text-white uppercase text-xs">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">NAME</th>
                <th className="px-4 py-3">PARENT DETAILS</th>
                <th className="px-4 py-3">COMPANY PROFILE</th>
                <th className="px-4 py-3">WALLET DETAILS</th>
                <th className="px-4 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((entry, index) => (
                <tr key={index} className="border-t border-[#3F425D]">
                  <td className="px-4 py-3">
                    <div className="">
                      <button className="btn-24 !w-28   text-xs bg-accentGreen text-adminOffWhite ml-1">
                        {entry.kycStatus}
                      </button>
                      <span>{entry.id}</span>
                    </div>
                    <div className="">{entry.dateTime}</div>
                  </td>
                  <td className="px-4 py-3">
                    <p>{entry?.name}</p>
                    <p>{entry?.mobile}</p>
                    <p>{entry?.role}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p>
                      {entry?.parent?.name}({entry?.parent?.id})
                    </p>
                    <p>{entry?.parent?.mobile}</p>
                    <p>{entry?.parent?.role}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p>{entry?.companyProfile}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p>main - {entry?.wallet?.main}/-</p>
                    <p>Locked - {entry?.wallet?.locked}/-</p>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button
                      className={`btn-24 font-semibold bg-secondary  text-white capitalize text-wrap text-xs`}
                    >
                      Transfer / Return
                    </button>
                  </td>
                </tr>
              ))}
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
    </div>
  );
};
