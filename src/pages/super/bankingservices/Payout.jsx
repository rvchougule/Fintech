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

  // 2. Initialize useForm with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // 3. Submit handler
  const onSubmit = (data) => {
    toast.success("Form submitted successfully!", {
      autoClose: 2000,
    });
    setSubmittedData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full bg-gray dark:bg-darkBlue rounded">
          <div className="w-full h-70 bg-gray dark:bg-darkBlue rounded flex justify-start gap-12 ml-5 ">
            <div className="w-90 h-60 rounded-xl shadow-sm px-4 mx-5 mt-4 bg-white dark:text-white dark:bg-darkBlue/70  dark:border border-white">
              <p className="font-semibold text-3xl pt-4">Payout</p>
              <p className="pb-1 pt-2 text-1xl mt-2 ">Mobile Number</p>

              {/* 4. Register input */}
              <input
                type="text"
                placeholder="Enter Mobile Number"
                {...register("mobile")}
                className="p-1 px-2 rounded border border-grey-800 w-full"
              />
              {/* 5. Show validation error */}
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-[#7776DE] text-white rounded cursor-pointer"
              >
                Submit
              </button>
            </div>

            <div className=" w-130 h-60 mt-4 rounded-xl shadow-sm bg-white mr-20 dark:text-white dark:bg-darkBlue/70 dark:border border-white">
              <p className="font-semibold text-2xl mt-2 text-center mb-4 ">
                Beneficiary List
              </p>
              <ul className="flex gap-18 items-center justify-center text-lg py-1 mt-6 bg-gray-300 mx-4 dark:text-black ">
                <li>Name</li>
                <li>Account Details</li>
                <li>Action</li>
              </ul>
            </div>
          </div>
          {submittedData && (
            <div className="w-90 h-52 rounded-xl bg-white px-4 ml-10 shadow-sm dark:text-white dark:bg-darkBlue/70 dark:border border-white ">
              <div className="flex m-1 ml-4 gap-1 ">
                <IoIosPerson size={40} className="mt-2 ml-10" />
                <p className="text-blue-500  text-start font-semibold text-2xl mt-3">
                  Kishor Babu
                </p>
              </div>

              <div className="flex flex-row  justify-around">
                <p className="text-1xl mt-2 ">
                  <b>
                    Mobile No. : <br />
                    {submittedData.mobile}
                  </b>
                </p>

                <p className="text-1xl mt-2 ">
                  <b>
                    Total Limit : <br />
                    {200000}
                  </b>
                </p>
              </div>
              <div className="flex flex-row  justify-around">
                <p className="text-1xl mt-4 ">Used Limit : {0}</p>
                <p className="text-1xl mt-4 ">Remain Limit : {200000}</p>
              </div>
              <button className="mt-3 px-4 py-2 bg-[#7776DE]  text-white rounded cursor-pointer ml-20">
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
