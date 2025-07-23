import { useState } from "react";
import PaginatedTable from "../../../components/utility/PaginatedTable";
import { ToastContainer, toast } from "react-toastify";
import { MdBlock } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const DthRecharge = () => {
  const [formData, setFormData] = useState({
    dthNumber: "",
    operator: "",
    amount: "",
    tPin: "",
  });

  const [rechargeData, setRechargeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { header: "ORDER ID", accessor: "orderId" },
    { header: "RECHARGE DETAILS", accessor: "rechargeDetails" },
    { header: "AMOUNT/COMMISSION", accessor: "amountCommission" },
    {
      header: "STATUS",
      accessor: "status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.status === "Success"
              ? "bg-green-100 text-green-600"
              : row.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      orderId: `ORD${Math.floor(Math.random() * 100000)}`,
      rechargeDetails: `${formData.operator} - ${formData.dthNumber}`,
      amountCommission: `₹${formData.amount} / ₹5`,
      status: "Success",
    };

    setRechargeData((prev) => [newEntry, ...prev]);
    setFormData({ dthNumber: "", operator: "", amount: "", tPin: "" });
  };

  const handleGetPlan = () => {
    const { dthNumber, operator } = formData;

    if (!dthNumber || !operator) {
      toast.error(
        <div className="flex items-start">
          <MdBlock className="text-red-600 text-xl mt-1 mr-2" />
          <div>
            <p className="font-medium">
              DTH number and operator fields are required
            </p>
          </div>
        </div>,
        {
          position: "top-right",
          className:
            "border-l-4 border-red-600 bg-white text-black font-medium",
          icon: false,
          closeOnClick: true,
          autoClose: 5000,
        }
      );
    } else {
      toast.success("Fetching plans...", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="h-[100vh] dark:text-white 2xl:max-w-[90%] p-4 mx-8 dark:bg-transparent  mt-2 rounded-xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
      <div className="bg-white dark:bg-darkBlue rounded-lg p-6 shadow mb-10">
        <h2 className="text-2xl font-semibold mb-6">DTH Recharge</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div>
            <label className="block font-medium mb-1">DTH Number *</label>
            <input
              type="text"
              name="dthNumber"
              value={formData.dthNumber}
              onChange={handleChange}
              placeholder="Enter DTH number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">DTH Operator *</label>
            <select
              name="operator"
              value={formData.operator}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="">Select Operator</option>
              <option value="Tata Sky">Tata Sky</option>
              <option value="Airtel">Airtel</option>
              <option value="D2H">D2H</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Recharge Amount *</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>

          <div className="relative">
            <label className="block font-medium mb-1">T-Pin *</label>
            <input
              type="password"
              name="tPin"
              value={formData.tPin}
              onChange={handleChange}
              placeholder="Enter transaction pin"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
            <a
              href="#"
              className="absolute left-0 -bottom-5 text-blue-500 text-sm"
            >
              Generate or Forgot Pin?
            </a>
          </div>

          <div className="col-span-full flex gap-4 justify-center mt-8">
            <button
              type="submit"
              className="bg-secondary hover:bg-[#7a7bf0] text-white font-semibold px-6 py-2 rounded-md shadow"
            >
              Pay Now
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow"
              onClick={handleGetPlan}
            >
              GET Plan
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>

      <div className="bg-white dark:bg-darkBlue rounded-lg p-6 shadow mt-2">
        <h3 className="text-xl font-semibold mb-4">Recent DTH Recharge</h3>

        <PaginatedTable
          data={rechargeData}
          columns={columns}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default DthRecharge;
