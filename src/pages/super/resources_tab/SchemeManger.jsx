import { useEffect, useState } from "react";

import { fetchedCommissionData, UsersData } from "../../../assets/assets";
import { SuperModal } from "../../../components/super/SuperModel";
import FilterField from "../../../components/FilterField";
import CommissionTable from "../../../components/super/resource_tab/CommisonTable";
import { CommissionEditableForm } from "../../../components/super/resource_tab/CommissionEditableForm";
import CommissionDropdown from "../../../components/super/resource_tab/CommissionDropdown";
import FilterBar from "../../../components/FilterBar";

const commissionDropdownOptions = [
  { label: "Mobile Recharge", modalKey: "MobileRecharge" },
  { label: "DTH Recharge", modalKey: "DTHRecharge" },
  { label: "Bill Payments", modalKey: "BillPayments" },
  { label: "AEPS", modalKey: "AEPS" },
];

export const SchemeManager = () => {
  // All modals open CLose State
  const [isModal, setIsModal] = useState({
    AddNew: false,
    ViewCommision: false,
    "Commision/Charge": false,
    MobileRecharge: false,
    AEPS: false,
    DTHRecharge: false,
    MicroATM: false,
    BillPayments: false,
  });

  //modales state
  const [schemeName, setSchemeName] = useState("");
  const [editingScheme, setEditingScheme] = useState(null);
  const [selectedCommission, setSelectedCommission] = useState({});

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
    let data = [...UsersData];

    if (filters.searchValue) {
      data = data.filter((d) =>
        d.name.toLowerCase().includes(String(filters.searchValue).toLowerCase())
      );
    }

    if (filters.userId) {
      data = data.filter((d) =>
        d.userId?.toLowerCase().includes(String(filters.userId).toLowerCase())
      );
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

  const handleToggle = (indexInDisplay) => {
    const actualIndex = (currentPage - 1) * pageSize + indexInDisplay;
    const updated = [...filteredData];
    updated[actualIndex].status = !updated[actualIndex].status;
    setFilteredData(updated);
    paginateData();
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
        { label: "true", value: "true" },
        { label: "false", value: "false" },
      ],
    },
  ];

  // utility for modal handlings
  const handleCommissionOptionClick = (modalKey) => {
    setIsModal((prev) => ({ ...prev, [modalKey]: true }));
  };

  const openAddModal = () => {
    setEditingScheme(null);
    setSchemeName("");
    setIsModal((prev) => ({ ...prev, AddNew: true }));
  };

  const openEditModal = (entry) => {
    setEditingScheme(entry);
    setSchemeName(entry.name);
    setIsModal((prev) => ({ ...prev, AddNew: true }));
  };

  const openCommissionModal = () => {
    setIsModal((prev) => ({ ...prev, ["Commision/Charge"]: true }));
  };

  const openViewCommissionModal = (commission) => {
    setSelectedCommission(commission || {});
    setIsModal((prev) => ({ ...prev, ViewCommision: true }));
  };

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-transparent">
        <h2 className="text-2xl font-bold dark:text-adminOffWhite">
          Scheme Manager
        </h2>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <div className="p-6 rounded-md w-full bg-white dark:bg-transparent dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <button
            className="bg-[#22C55E] hover:bg-[#16a34a] text-white btn-md "
            onClick={openAddModal}
          >
            + Add New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="bg-darkBlue/90 dark:bg-primaryBlue/30 text-white uppercase text-xs">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((entry, index) => (
                <tr key={index} className="border-t border-[#3F425D]">
                  <td className="px-4 py-3">{entry.id}</td>
                  <td className="px-4 py-3">{entry.name}</td>
                  <td className="px-4 py-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={entry.status}
                        onChange={() => handleToggle(index)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-secondary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="btn-secondary" onClick={openEditModal}>
                      Edit
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => openViewCommissionModal(entry.commission)}
                    >
                      View Commission
                    </button>
                    <CommissionDropdown
                      commissions={entry.commission}
                      setSelectedCommission={setSelectedCommission}
                      commissionDropdownOptions={commissionDropdownOptions}
                      handleCommissionOptionClick={handleCommissionOptionClick}
                    />
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

      {/* Add/Edit New Modal */}
      {isModal["AddNew"] && (
        <SuperModal
          onClose={() => {
            setIsModal((prev) => ({ ...prev, AddNew: false }));
            setEditingScheme(null);
            setSchemeName("");
          }}
        >
          <div className="mb-4 text-lg font-semibold text-center">
            {editingScheme ? "Edit Scheme" : "Add New Scheme"}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (editingScheme) {
                // update logic here
                const updatedData = [...filteredData];
                const index = updatedData.findIndex(
                  (d) => d.id === editingScheme.id
                );
                if (index !== -1) {
                  updatedData[index].name = schemeName;
                  setFilteredData(updatedData);
                  paginateData();
                }
              } else {
                // add logic here
                const newEntry = {
                  id: filteredData.length + 1,
                  name: schemeName,
                  status: true,
                };
                const updatedData = [newEntry, ...filteredData];
                setFilteredData(updatedData);
                paginateData();
              }

              // close modal
              setIsModal((prev) => ({ ...prev, AddNew: false }));
              setEditingScheme(null);
              setSchemeName("");
            }}
          >
            <FilterField
              type="text"
              placeholder="Scheme Name"
              value={schemeName}
              onChange={setSchemeName}
            />
            <button
              type="submit"
              className="border-1 bg-secondary px-4 py-2 rounded-md font-bold my-3 w-full text-white"
            >
              {editingScheme ? "Update" : "Add"}
            </button>
          </form>
        </SuperModal>
      )}

      {/* view commision */}
      {isModal["ViewCommision"] && (
        <SuperModal
          onClose={() =>
            setIsModal((prev) => ({ ...prev, ViewCommision: false }))
          }
        >
          <CommissionTable
            title="View Commission"
            data={selectedCommission} // <-- your real API data
            onSubmit={(service) => {
              console.log("Submit clicked for:", service);
              // maybe call an API to save or just close
              setIsModal((prev) => ({ ...prev, ViewCommision: false }));
            }}
          />
        </SuperModal>
      )}

      {/* commission/charges */}
      {commissionDropdownOptions.map(
        ({ modalKey, label }) =>
          isModal[modalKey] && (
            <SuperModal
              key={modalKey}
              onClose={() =>
                setIsModal((prev) => ({ ...prev, [modalKey]: false }))
              }
            >
              <div className="text-lg font-semibold mb-4">
                {label} Commission
              </div>
              {/* Replace with a dynamic component based on modalKey */}
              <CommissionEditableForm
                serviceKey={modalKey}
                commission={selectedCommission}
                onClose={() =>
                  setIsModal((prev) => ({ ...prev, [modalKey]: false }))
                }
              />
            </SuperModal>
          )
      )}
    </div>
  );
};
