import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { MdBlock } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { SuperModal } from "../../../components/super/SuperModel";
import MobileRechargeModal from "../../utility/MobileRechargeModal";

// Constants
const OPERATORS = ["Jio", "Airtel", "Vi", "BSNL", "TOPVP", "VALIDITY"];
const CIRCLES = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Andhra Pradesh",
  "Assam",
  "Bihar Jharkhand",
  "Chennai",
  "Delhi NCR",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu Kashmir",
  "Kerala",
  "Kolkata",
  "Madhya Pradesh Chhattisgarh",
  "Maharashtra Goa",
  "MUmbai",
  "North East",
  "Orissa",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "UP East",
  "Westn Bengal",
];
const PLAN_TYPES = [
  "Top-up",
  "Full Talktime",
  "SMS",
  "2G Data",
  "3G Data",
  "4G Data",
  "Local",
  "STD",
  "ISD",
  "Roaming",
  "Other",
  "Validity",
  "Plan",
  "FRC",
];

// Reusable Input Field
const FormField = ({ label, name, type = "text", placeholder, formik }) => (
  <div>
    <label className="block mb-1 font-medium">
      {label}
      {formik.validationSchema?.fields[name]?._exclusive?.required && (
        <span className="text-red-500">*</span>
      )}
    </label>
    <input
      type={type}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      placeholder={placeholder}
      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2"
    />
    {formik.touched[name] && formik.errors[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

// Reusable Select Field
const SelectField = ({ label, name, options, formik }) => (
  <div>
    <label className="block mb-1 font-medium">
      {label}
      {formik.validationSchema?.fields[name]?._exclusive?.required && (
        <span className="text-red-500">*</span>
      )}
    </label>
    <select
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 dark:bg-gray dark:text-gray-400"
    >
      <option className="dark:bg-darkBlue dark:text-white">
        Select {label}
      </option>
      {options.map((opt, i) => (
        <option
          className="dark:bg-darkBlue dark:text-white"
          key={i}
          value={opt}
        >
          {opt}
        </option>
      ))}
    </select>
    {formik.touched[name] && formik.errors[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

// Main Component
const RechargeForm = () => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      operator: "",
      circle: "",
      planType: "",
      amount: "",
      tPin: "",
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit mobile number")
        .required("Mobile number is required"),
      operator: Yup.string().required("Operator is required"),
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      tPin: Yup.string()
        .matches(/^\d{4}$/, "T-Pin must be 4 digits")
        .required("T-Pin is required"),
      circle: Yup.string().required("Circle is required"),
      planType: Yup.string().required("Plan Type is required"),
    }),
    onSubmit: (values) => {
      ("Form Submitted:", values);
    },
  });

  // ✅ PAY NOW Handler
  const handlePayNow = () => {
    const { mobileNumber, operator, circle, amount, tPin } = formik.values;

    if (!mobileNumber || !operator || !circle || !amount || !tPin) {
      toast.error(
        <div className="flex items-start">
          <MdBlock className="text-red-600 text-xl mt-1 mr-2" />
          <div>
            <p className="font-medium">All fields are required.</p>
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
      return;
    }

    toast.success("Recharge submitted  successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // ✅ GET PLAN Handler
  const handleGetPlan = () => {
    const { mobileNumber, operator, circle } = formik.values;

    if (!mobileNumber || !operator || !circle) {
      toast.error(
        <div className="flex items-start">
          <MdBlock className="text-red-600 text-xl mt-1 mr-2" />
          <div>
            <p className="font-medium">
              Mobile number, Operator, and Circle fields are required
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
      return;
    }

    setShowModal(true);
    toast.info("Fetching plan details...", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <FormField
          name="mobileNumber"
          label="Mobile Number"
          placeholder="Enter mobile number"
          formik={formik}
        />
        <SelectField
          name="operator"
          label="Mobile Operator"
          options={OPERATORS}
          formik={formik}
        />
        <SelectField
          name="circle"
          label="Circle"
          options={CIRCLES}
          formik={formik}
        />
        <SelectField
          name="planType"
          label="Plan Type"
          options={PLAN_TYPES}
          formik={formik}
        />
        <FormField
          name="amount"
          label="Recharge Amount"
          placeholder="Enter amount"
          formik={formik}
        />
        <div>
          <FormField
            name="tPin"
            type="password"
            label="T-Pin"
            placeholder="Enter transaction pin"
            formik={formik}
          />
          <a href="#" className="text-sm text-purple-600 mt-1 inline-block">
            Generate Or Forgot Pin?
          </a>
        </div>

        <div className="col-span-full flex gap-4 mt-4 justify-center items-center">
          <button
            type="button"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-600 transition cursor-pointer"
            onClick={handlePayNow}
          >
            Pay Now
          </button>
          <button
            type="button"
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition cursor-pointer"
            onClick={handleGetPlan}
          >
            GET Plan
          </button>
          <ToastContainer />
        </div>
      </form>

      {showModal && (
        <SuperModal>
          <MobileRechargeModal onClose={() => setShowModal(false)} />
        </SuperModal>
      )}
    </div>
  );
};

export default RechargeForm;
