import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { toast } from "react-toastify";

const Payout = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const validationSchema = Yup.object().shape({
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
      .required("Mobile number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    toast.success("Form submitted successfully!", {
      autoClose: 2000,
    });
    setSubmittedData(data);
  };

  return (
    <div className="h-[90vh] bg-gray-100 dark:bg-darkBlue py-10 px-4 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-darkBlue/80 border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Payout Form
          </h2>

          <div className="space-y-2">
            <label className="block font-medium dark:text-white">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter 10-digit mobile number"
              {...register("mobile")}
              className="w-full px-4 py-2 border border-walletLabelGray rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-darkBlue/70 dark:text-white"
            />
            {errors.mobile && (
              <p className="text-sm text-red-500">{errors.mobile.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-20 bg-secondary hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Right: Result or Placeholder */}
        {submittedData ? (
          <div className="bg-white dark:bg-darkBlue/80 border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <IoIosPerson size={40} className="text-secondary" />
              <h3 className="text-2xl font-semibold text-secondary">Kishor Babu</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-500 dark:text-gray-300">Mobile No.</p>
                <p className="text-lg font-bold dark:text-white">
                  {submittedData.mobile}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300">Total Limit</p>
                <p className="text-lg font-bold dark:text-white">₹200000</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300">Used Limit</p>
                <p className="text-lg font-bold dark:text-white">₹0</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300">Remain Limit</p>
                <p className="text-lg font-bold dark:text-white">₹200000</p>
              </div>
            </div>

            <button className="bg-secondary hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md mt-4">
              New Beneficiary
            </button>
          </div>
        ) : (
          <div className="bg-white dark:bg-darkBlue/80 border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6 flex flex-col justify-center items-center text-center text-gray-600 dark:text-white">
            <p className="text-lg">No data submitted yet.</p>
            <p className="text-sm mt-2">Fill the form to view beneficiary details.</p>
          </div>
        )}
      </div>

      {/* Beneficiary List Table */}
      <div className="max-w-6xl mx-auto mt-10 bg-white dark:bg-darkBlue/80 border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6">
        <h3 className="text-2xl font-semibold mb-4 dark:text-white text-center">
          Beneficiary List
        </h3>
        <div className="overflow-x-auto overflow-hidden h-[20vh] mb-5">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-white">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Account Details</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Kishor Babu</td>
                <td className="px-4 py-2">XXXX-XXXX-1234</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600] hover:underline">
                    View
                  </button>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payout;