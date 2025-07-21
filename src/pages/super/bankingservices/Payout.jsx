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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full  dark:bg-darkBlue rounded px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Card 1: Payout Form */}
            <div className="w-full lg:w-[40%] rounded-xl shadow-sm px-6 py-4 bg-white dark:text-white dark:bg-darkBlue/70 dark:border border-white">
              <p className="font-semibold text-3xl">Payout</p>
              <label className="block mt-4 mb-1 text-lg">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                {...register("mobile")}
                className="p-2 rounded border border-gray-400 w-full"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-[#7776DE] text-white rounded"
              >
                Submit
              </button>
            </div>

            {/* Card 2: Beneficiary List */}
            <div className="w-full lg:w-[60%] rounded-xl shadow-sm bg-white px-6 py-4 dark:text-white dark:bg-darkBlue/70 dark:border border-white">
              <p className="font-semibold text-2xl text-center mb-4">
                Beneficiary List
              </p>
              <ul className="flex justify-between px-4 text-lg py-2 bg-gray-300 dark:text-black">
                <li>Name</li>
                <li>Account Details</li>
                <li>Action</li>
              </ul>
            </div>
          </div>

          {/* Conditional Card: Shown after submission */}
          {submittedData && (
            <div className="w-full lg:w-[70%] mx-auto mt-6 rounded-xl bg-white px-6 py-4 shadow-sm dark:text-white dark:bg-darkBlue/70 dark:border border-white">
              <div className="flex items-center gap-4 mb-4">
                <IoIosPerson size={40} />
                <p className="text-blue-500 font-semibold text-2xl">
                  Kishor Babu
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-lg mb-2 md:mb-0">
                  <b>
                    Mobile No. : <br />
                    {submittedData.mobile}
                  </b>
                </p>
                <p className="text-lg mb-2 md:mb-0">
                  <b>
                    Total Limit : <br />
                    200000
                  </b>
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between mt-2">
                <p className="text-lg">Used Limit : 0</p>
                <p className="text-lg">Remain Limit : 200000</p>
              </div>

              <button className="mt-4 px-4 py-2 bg-[#7776DE] text-white rounded">
                New Beneficiary
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Payout;
