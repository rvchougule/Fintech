import React, { useState } from "react";
import PaginatedTable from "../../../components/utility/PaginatedTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

const Uti = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const data = [];

  const columns = [
    { header: "Order ID", accessor: "orderId" },
    { header: "User Details", accessor: "userDetails" },
    { header: "Transaction Details", accessor: "transactionDetails" },
    { header: "Amount/Commission", accessor: "amount" },
    { header: "Status", accessor: "status" },
  ];

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      tokens: "",
      totalPrice: "",
      vleId: "",
      tPin: "",
    },
    onSubmit: (values) => {
      console.log("Submitted:", values);
    },
  });

  const handleRequestId = () => {
    const { username, password, tPin } = formik.values;

    if (!username || !password || !tPin) {
      toast.error(
        <div className="flex items-start">
          <p className=" text-red  ">Oops! Operator Not Found</p>
        </div>,
        {
          position: "top-right",
          className: " bg-white dark:bg-transparent  text-white font-medium",
          icon: false,
          closeOnClick: true,
          autoClose: 5000,
        }
      );
      return;
    }
  };

  return (
    <div className="dark:bg-[#172b44] dark:text-white p-6 rounded-lg w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Coupon Purchase</h2>
        <div className="flex gap-2">
          <button
            className="bg-[#8267F2] text-white px-4 py-2 rounded font-medium hover:opacity-90 transition"
            onClick={handleRequestId}
          >
            Request For Vle-id
          </button>
          <ToastContainer />
          <button
            className="bg-[#8267F2] text-white px-4 py-2 rounded font-medium hover:opacity-90 transition"
            onClick={() => setShowModal(true)}
          >
            Login Uti
          </button>
        </div>
      </div>

      <PaginatedTable
        data={data}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={5}
      />

      {/*Modal UI */}
      {showModal && (
        <div className="absolute inset-0 bg-black/60  flex items-center justify-center h-[100vh] overflow-y-scroll scrollbar-hide ">
          <div className="dark:bg-[#1F2235] bg-white dark:text-white p-6 rounded-lg w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Uti Pancard</h2>
              <button
                onClick={() => setShowModal(false)}
                className="dark:text-white hover:text-red-500"
              >
                ✕
              </button>
            </div>

            {/* Top Info Row */}
            <div className="grid grid-cols-2 text-sm border border-gray-600 mb-4">
              {/* Row 1 */}
              <div className="border border-gray-600 p-2">1 Token</div>
              <div className="border border-gray-600 p-2">
                1 PAN Application
              </div>

              {/* Row 2 */}
              <div className="border border-gray-600 p-2">Username</div>
              <div className="border border-gray-600 p-2">
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full px-2 py-1 rounded dark:bg-[#2A2E47] border border-gray-500 dark:text-white outline-none"
                />
              </div>

              {/* Row 3 */}
              <div className="border border-gray-600 p-2">Password</div>
              <div className="border border-gray-600 p-2">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-2 py-1 rounded dark:bg-[#2A2E47] border border-gray-500 dark:text-white outline-none"
                />
              </div>
            </div>

            {/* Input Fields */}
            <form className="space-y-3">
              <div>
                <label className="text-sm block mb-1">No Of Tokens</label>
                <input
                  type="text"
                  placeholder="Enter No. of tokens"
                  className="w-full px-3 py-2 rounded dark:bg-[#2A2E47] border border-gray-600 dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Total Price in Rs</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded dark:bg-[#2A2E47] border border-gray-600 dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Vle Id</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded dark:bg-[#2A2E47] border border-gray-600 dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">T-Pin</label>
                <input
                  type="password"
                  placeholder="Enter transaction pin"
                  className="w-full px-3 py-2 rounded dark:bg-[#2A2E47] border border-gray-600 dark:text-white outline-none"
                />
              </div>

              <button className="transition cursor-pointer">
                <a
                  href="/profile/view"
                  className="px-1 cursor-pointer text-purple-500 text-sm font-semibold"
                >
                  Generate or Forgot Pin?
                </a>
              </button>
              <button className="bg-[#8267F2] text-white px-4 py-2 rounded font-medium hover:opacity-90 transition">
                Login UTI Portal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Uti;
