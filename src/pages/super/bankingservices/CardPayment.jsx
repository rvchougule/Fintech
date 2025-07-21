import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";

const CardPayment = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [showBeneficiaries, setShowBeneficiaries] = useState(false);

  const validationSchema = Yup.object().shape({
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
      .required("Mobile number is required"),
    aadhaar: Yup.string()
      .matches(/^\d{12}$/, "Enter a valid 12-digit Aadhaar number")
      .required("Aadhaar is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    pan: Yup.string()
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter a valid PAN number")
      .required("PAN is required"),
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
    <div className="h-screen overflow-y-auto bg-gray-100 dark:bg-transparent py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-transparent border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Payment Via Card
          </h2>

          {/* Mobile */}
          <div className="space-y-1">
            <label className="block font-medium dark:text-white">Mobile Number</label>
            <input
              type="text"
              {...register("mobile")}
              placeholder="10-digit mobile number"
              className="w-full px-4 py-2 border border-walletLabelGray rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-transparent dark:text-white"
            />
            {errors.mobile && (
              <p className="text-sm text-red-500">{errors.mobile.message}</p>
            )}
          </div>

          {/* Aadhaar */}
          <div className="space-y-1">
            <label className="block font-medium dark:text-white">Aadhaar</label>
            <input
              type="text"
              {...register("aadhaar")}
              placeholder="12-digit Aadhaar number"
              className="w-full px-4 py-2 border border-walletLabelGray rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-transparent dark:text-white"
            />
            {errors.aadhaar && (
              <p className="text-sm text-red-500">{errors.aadhaar.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block font-medium dark:text-white">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-walletLabelGray rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-transparent dark:text-white"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* PAN */}
          <div className="space-y-1">
            <label className="block font-medium dark:text-white">PAN</label>
            <input
              type="text"
              {...register("pan")}
              placeholder="ABCDE1234F"
              className="w-full px-4 py-2 border border-walletLabelGray rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-transparent dark:text-white uppercase"
            />
            {errors.pan && (
              <p className="text-sm text-red-500">{errors.pan.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-secondary hover:bg-accentPurple text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Right: Submitted Data */}
        {submittedData ? (
          <div className="bg-white dark:bg-transparent border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Submitted Information
            </h3>
            <div className="grid grid-cols-2 gap-15 ">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile</p>
                <p className="text-lg font-bold dark:text-white">{submittedData.mobile}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">Aadhaar</p>
                <p className="text-lg font-bold dark:text-white">{submittedData.aadhaar}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">Email</p>
                <p className="text-lg font-bold dark:text-white">{submittedData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">PAN</p>
                <p className="text-lg font-bold dark:text-white">{submittedData.pan}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setSubmittedData(null)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md"
              >
                Close
              </button>
              <button className="bg-secondary hover:bg-accentPurple text-white font-semibold px-4 py-2 rounded-md">
                Confirm
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-transparent border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6 flex flex-col justify-center items-center text-center text-gray-600 dark:text-white">
            <p className="text-lg">No data submitted yet.</p>
            <p className="text-sm mt-2">Fill the form to view beneficiary details.</p>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <button
          onClick={() => setShowBeneficiaries(!showBeneficiaries)}
          className="bg-secondary hover:bg-accentPurple  text-white font-semibold px-6 py-2 rounded-md"
        >
          {showBeneficiaries ? " Beneficiary List" : "Show Beneficiary List"}
        </button>
      </div>

      {/* Beneficiary List Table */}
      {showBeneficiaries && (
        <div className="max-w-6xl mx-auto mt-6 bg-white dark:bg-transparent border dark:border-white border-walletLabelGray shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white text-center">
            Beneficiary List
          </h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 dark:text-white">
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
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
                {/* More rows if needed */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPayment;
