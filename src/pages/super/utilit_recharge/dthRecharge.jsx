import { useState } from "react";
import PaginatedTable from "../../../components/utility/PaginatedTable";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdBlock } from "react-icons/md";
import { SuperModal } from "../../../components/super/SuperModel";
import DthRechargeModal from "../../../components/utility/dthRechargeModal";

const DthRecharge = () => {
  const [rechargeData, setRechargeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      dthNumber: "",
      operator: "",
      amount: "",
      tPin: "",
    },
    validationSchema: Yup.object({
      dthNumber: Yup.string().required("DTH number is required"),
      operator: Yup.string().required("Operator is required"),
      amount: Yup.number()
        .typeError("Amount must be a number")
        .required("Amount is required"),
      tPin: Yup.string().required("Transaction PIN is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newEntry = {
        orderId: `ORD${Math.floor(Math.random() * 100000)}`,
        rechargeDetails: `${values.operator} - ${values.dthNumber}`,
        amountCommission: `₹${values.amount} / ₹5`,
        status: "Success",
      };
      setRechargeData((prev) => [newEntry, ...prev]);
      toast.success("Recharge submitted successfully!");
      resetForm();
    },
  });

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

  const handlePayNow = () => {
    const { dthNumber, operator, amount, tPin } = formik.values;

    if (!dthNumber || !operator || !amount || !tPin) {
      toast.error(
        <div className="flex items-start">
          <MdBlock className="text-red-600 text-xl mt-1 mr-2" />
          <div>
            <p className="font-medium">All fields are required</p>
          </div>
        </div>,
        {
          position: "top-right",
          className:
            "border-l-4 border-red-600 bg-white text-black font-medium",
          icon: false,
          closeOnClick: true,
          autoClose: 3000,
        }
      );
      return;
    }
    //   setShowModal(true);
    //   toast.success("Fetching plan deta...", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
  };

  const handleGetPlan = () => {
    const { dthNumber, operator } = formik.values;

    if (!dthNumber || !operator) {
      toast.error(
        <div className="flex items-start">
          <MdBlock className="text-red-600 text-xl mt-1 mr-2" />
          <div>
            <p className="font-medium">DTH number and operator are required</p>
          </div>
        </div>,
        {
          position: "top-right",
          className:
            "border-l-4 border-red-600 bg-white text-black font-medium",
          icon: false,
          closeOnClick: true,
          autoClose: 3000,
        }
      );
      return;
    } else setShowModal(true);
    toast.info("Fetching plan details...", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 dark:bg-transparent rounded 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-transparent mt-2">
      <div className="h-fit dark:text-white p-4 px-4 pb-6 dark:bg-darkBlue/70 rounded text-gray-800 bg-white">
        <h2 className="text-2xl font-semibold dark:text-white text-gray-700 mb-6">
          Dth Recharge
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          <div>
            <label className="block dark:text-white  font-medium mb-1">
              Dth Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dthNumber"
              value={formik.values.dthNumber}
              onChange={formik.handleChange}
              placeholder="Enter Dth number"
              className="w-full px-4 py-2 border dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:placeholder-white placeholder-gray-900 "
            />
          </div>

          <div>
            <label className="block dark:text-white font-medium mb-1">
              Dth Operator <span className="text-red-500">*</span>
            </label>
            <select
              name="operator"
              value={formik.values.operator}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:placeholder-white text-gray-700 dark:text-white  placeholder-gray-900 dark:placeholder:bg-darkBlue/70 "
            >
              <option
                value=""
                className="dark:bg-darkBlue dark:text-white text-black bg-white"
              >
                Select Operator
              </option>
              <option
                value="Tata Sky"
                className="dark:bg-darkBlue dark:text-white text-black bg-white"
              >
                Tata Sky
              </option>
              <option
                value="Airtel"
                className="dark:bg-darkBlue dark:text-white text-black bg-white"
              > 
                Airtel
              </option>
              <option
                value="D2H"
                className="dark:bg-darkBlue dark:text-white text-black bg-white"
              >
                D2H
              </option>
            </select>
          </div>

          <div>
            <label className="block dark:text-white  font-medium mb-1">
              Recharge Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:placeholder-white  placeholder-gray-900 dark:placeholder:bg-darkBlue/70"
            />
          </div>

          <div className="relative">
            <div className="flex flex-col">
              <label className="block dark:text-white  font-medium mb-1">
                T-Pin <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="tPin"
                value={formik.values.tPin}
                onChange={formik.handleChange}
                placeholder="Enter transaction pin"
                className="w-full px-4 py-2 border dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:placeholder-white placeholder-gray-900"
              />
            </div>
            <a
              href="/profile/view"
              className="absolute left-0 -bottom-5 text-secondary text-sm"
            >
              Generate or Forgot Pin?
            </a>
          </div>

          <div className="col-span-1 md:col-span-4 flex gap-4 justify-center mt-2">
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-md shadow cursor-pointer"
              onClick={handlePayNow}
            >
              Pay Now
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow cursor-pointer"
              onClick={handleGetPlan}
            >
              GET Plan
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
      {showModal && (
        <SuperModal>
          <DthRechargeModal onClose={() => setShowModal(false)} />
        </SuperModal>
      )}

      <div className="bg-white rounded p-4 mt-8 dark:bg-darkBlue/70">
        <div className="bg-white rounded p-4 mt-8 dark:bg-darkBlue/70 dark:text-white ">
          <h3 className="text-xl font-semibold text-gray-700 mb-1 dark:text-white">
            Recent Dth Recharge
          </h3>
        </div>
        <div className="bg-white rounded  dark:bg-darkBlue/70 dark:text-white ">
          <PaginatedTable
            data={rechargeData}
            columns={columns}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={5}
          />
        </div>
      </div>
    </div>
  );
};

export default DthRecharge;
