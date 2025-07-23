import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Operators specific to DTH
const DTH_OPERATORS = ["Tata Sky", "Airtel", "D2H"];

// Reusable text input
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
      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
    />
    {formik.touched[name] && formik.errors[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

// Reusable select field
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
      className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select {label}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {formik.touched[name] && formik.errors[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

const DthRechargeForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      dthNumber: "",
      operator: "",
      amount: "",
      tPin: "",
    },
    validationSchema: Yup.object({
      dthNumber: Yup.string()
        .required("DTH Number is required")
        .matches(/^\d+$/, "Only numbers allowed"),
      operator: Yup.string().required("Operator is required"),
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Must be greater than 0")
        .required("Amount is required"),
      tPin: Yup.string()
        .matches(/^\d{4}$/, "T-Pin must be 4 digits")
        .required("T-Pin is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
    >
      <FormField
        name="dthNumber"
        label="DTH Number"
        placeholder="Enter DTH number"
        formik={formik}
      />

      <SelectField
        name="operator"
        label="DTH Operator"
        options={DTH_OPERATORS}
        formik={formik}
      />

      <FormField
        name="amount"
        label="Recharge Amount"
        placeholder="Enter amount"
        formik={formik}
      />

      <div className="relative">
        <FormField
          name="tPin"
          type="password"
          label="T-Pin"
          placeholder="Enter transaction pin"
          formik={formik}
        />
        <a
          href="#"
          className="absolute left-0 -bottom-5 text-blue-500 text-sm"
        >
          Forgot Pin?
        </a>
      </div>

      <div className="col-span-1 md:col-span-4 flex gap-4 justify-center mt-2">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Pay Now
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow"
        >
          GET Plan
        </button>
      </div>
    </form>
  );
};

export default DthRechargeForm;
