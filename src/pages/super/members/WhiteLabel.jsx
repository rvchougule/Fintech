import { useState } from "react";
import PaginatedTable from "../../../components/PaginatedTable";
import FilterBar from "../../../components/FilterBar";
import { SuperModal } from "../../../components/super/SuperModel";
import { ToggleButton } from "../../../components/utility/ToggleButton";
import { FiRepeat, FiSettings, FiUserPlus, FiShield } from "react-icons/fi";
import ActionDropdown from "../../../components/utility/ActionDropDown";
import FundActionForm from "../../../components/super/members/utility_components/FundActionForm";
import SchemeManager from "../../../components/super/members/whitelabel/SchemeManager";
import StockTableForm from "../../../components/super/members/whitelabel/StockTableForm";
import { CheckBoxPermissionForm } from "../../../components/super/members/utility_components/CheckBoxPermissionForm";
import KycStatusForm from "../../../components/super/members/utility_components/KycManager";
import { Link } from "react-router";
import ProfileSettings from "../../../components/super/members/utility_components/ProfileSettings";

const data = [
  {
    id: 13,
    status: true,
    date: "25 Jun 25 - 11:35 PM",
    username: "whitelabel001",
    mobile: "1234567891",
    type: "Whitelable",
    parentName: "BANDARU KISHORE BABU (1)",
    parentMobile: "7997991899",
    parentRole: "Admin",
    registrationDate: "01/04/2023",
    website: "nkpay4all.com/",
    mainBalance: 0,
    aepsBalance: 0,
    commission: 0.2,
    md: 1,
    distributor: 1,
    retailer: 1,
  },
];

export const WhiteLabel = () => {
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
  const [editModal, setEditModal] = useState(null);
  const [editData, setEditData] = useState(null);

  // Call this when clicking "Edit"
  const handleEditClick = (title, row) => {
    setEditData(row);
    setEditModal(title);
  };

  const handleFormSubmit = (formData) => {
    console.log("Edited Data:", formData);
    setEditModal(null);
    // 🚀 Update your backend/state here
  };

  const handleStockSubmit = (type, value) => {
    console.log(`Submitted [${type}]: ${value}`);
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
        { label: "Block", value: "block" },
      ],
    },
  ];

  const actions = [
    {
      label: "Fund Transfer / Return",
      icon: <FiRepeat />,
      onClick: (row) => handleEditClick("fund_Transfer", row),
    },
    {
      label: "Scheme",
      icon: <FiSettings />,
      onClick: (row) => handleEditClick("Scheme", row),
    },
    {
      label: "Add Id Stock",
      icon: <FiUserPlus />,
      onClick: (row) => handleEditClick("Add_ID_Stock", row),
    },
    {
      label: "Permission",
      icon: <FiShield />,
      onClick: (row) => handleEditClick("Permission", row),
    },
    {
      label: "View Profile",
      icon: <FiUserPlus />,
      onClick: (row) => handleEditClick("View_Profile", row),
    },
    {
      label: "Kyc Manager",
      icon: <FiShield />,
      onClick: (row) => handleEditClick("Kyc_Manager", row),
    },
  ];

  const columns = [
    {
      header: "#",
      accessor: "id",
      render: (row, idx) => (
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <ToggleButton row={row} onchange={() => handleToggle(idx)} />
            <span>{row.id}</span>
          </div>
          <span>{row.date}</span>
        </div>
      ),
    },
    {
      header: "NAME",
      accessor: "name",
      render: (row) => (
        <div className="flex flex-col">
          <span>{row.username}</span>
          <span>{row.mobile}</span>
          <span>{row.type}</span>
        </div>
      ),
    },
    {
      header: "PARENT DETAILS",
      accessor: "parentDetails",
      render: (row) => (
        <div className="flex flex-col">
          <span>{row.parentName}</span>
          <span>{row.parentMobile}</span>
          <span>{row.parentRole}</span>
        </div>
      ),
    },
    {
      header: "COMPANY PROFILE",
      accessor: "companyProfile",
      render: (row) => (
        <div className="flex flex-col">
          <span>{row.registrationDate}</span>
          <span className="text-blue-400">{row.website}</span>
        </div>
      ),
    },
    {
      header: "WALLET DETAILS",
      accessor: "walletDetails",
      render: (row) => (
        <div className="flex flex-col">
          <span>Main : {row.mainBalance} ₹/-</span>
          <span>Aeps : {row.aepsBalance} ₹/-</span>
          <span>Commission : {row.commission} ₹/-</span>
        </div>
      ),
    },
    {
      header: "ID STOCK",
      accessor: "idStock",
      render: (row) => (
        <div className="flex flex-col">
          <span>Md - {row.md}</span>
          <span>Distributor - {row.distributor}</span>
          <span>Retailer - {row.retailer}</span>
        </div>
      ),
    },
    {
      header: "ACTION",
      accessor: "action",
      render: (row) => (
        <div className="flex flex-col gap-2">
          <ActionDropdown items={actions} row={row} />
          <button className="btn bg-secondary">Reports</button>
        </div>
      ),
    },
  ];

  const user = {
    Profile_Details: {
      name: "BANDARU KISHORE BABU",
      mobile: "7997991899",
      state: "Telangana",
      city: "HYDERABAD",
      gender: "",
      pinCode: "500089",
      email: "support@phonepays.in",
      securityPin: "",
      address: "7-15/62,PLOT NO 62,ROAD NO 4.SI",
    },
    KYC_Profile: {
      shopName: "",
      gstNumber: "",
      aadharNumber: "",
      panNumber: "",
      securityPin: "",
      passportPhoto: "",
    },
    Password_Manager: {
      newPassword: "",
      confirmPassword: "",
      securityPin: "",
    },
    Pin_Manager: {
      newPin: "",
      confirmPin: "",
      otp: "",
    },
    Bank_Details: {
      accountNUmber: "",
      bankName: "",
      ifscCode: "",
      securityPin: "",
    },
    Cetificate_Manager: {
      cmo: "",
      coo: "",
    },
    Role_Manager: {
      membersRole: "",
      securityPin: "",
    },
    Mapping_Manager: {
      parentMember: "",
      securityPin: "",
    },
  };

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="my-4 p-4 rounded-md bg-white dark:bg-transparent">
        <div className=" flex gap-3 justify-between">
          <h2 className="text-2xl font-bold dark:text-adminOffWhite">
            Whitelabel List
          </h2>
          <div className="">
            <button className="btn-24 text-adminOffWhite bg-accentRed ">
              Refresh
            </button>
            <button className="btn-24 text-adminOffWhite bg-accentGreen ">
              Export{" "}
            </button>
          </div>
        </div>
        <FilterBar fields={fields} onSearch={applyFilters} />
      </div>

      <div className="flex items-center justify-between">
        <div className=""></div>
        <Link to="create" className="btn-24 bg-accentGreen">
          Add New
        </Link>
      </div>

      <PaginatedTable
        data={filteredData}
        filters={filters}
        onSearch={applyFilters}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
      />

      {editModal != null && (
        <SuperModal onClose={() => setEditModal(null)}>
          {/* <APIManagerForm initialData={editData} onSubmit={handleFormSubmit} /> */}
          {/* Fund Transfer */}
          {editModal == "fund_Transfer" && (
            <FundActionForm
              onClose={() => setEditModal(null)}
              onSubmit={handleFormSubmit}
            />
          )}

          {/* Scheme Manager */}
          {editModal == "Scheme" && (
            <SchemeManager onClose={() => setEditModal(null)} />
          )}

          {/* Stock table forms */}
          {editModal == "Add_ID_Stock" && (
            <StockTableForm
              onClose={() => setEditModal(null)}
              onSubmitRow={handleStockSubmit}
            />
          )}

          {/* Permissions */}
          {editModal == "Permission" && <CheckBoxPermissionForm />}

          {/* Kyc_Manager */}
          {editModal == "Kyc_Manager" && <KycStatusForm />}
          {editModal == "View_Profile" && <ProfileSettings user={user} />}
        </SuperModal>
      )}
    </div>
  );
};
