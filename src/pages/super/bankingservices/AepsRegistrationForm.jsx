import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputFields = [
  { name: "name", label: "Name", placeholder: "Enter Name" },
  { name: "mobile", label: "Mobile", placeholder: "Enter Mobile" },
  { name: "email", label: "Email", placeholder: "Enter Email" },
  { name: "aadhaar", label: "Aadhaar", placeholder: "Enter Your Aadhaar" },
  { name: "pan", label: "PAN Card", placeholder: "ABCDE1234A" },
  { name: "shopName", label: "Shop Name", placeholder: "Enter Your Shopname" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  aadhaar: Yup.string()
    .matches(/^[0-9]{12}$/, "Aadhaar must be 12 digits")
    .required("Aadhaar is required"),
  pan: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
    .required("PAN is required"),
  shopName: Yup.string().required("Shop name is required"),
  locationType: Yup.string().required("Location type is required"),
});

const AepsRegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      aadhaar: "",
      pan: "",
      shopName: "",
      locationType: "Select",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      toast.success("Form submitted successfully!");
      resetForm();
    },
  });

  return (
    <div className="min-h-screen flex justify-center  bg-white px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-3xl bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          AePS Service Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inputFields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-gray-700 mb-1 font-medium"
              >
                {field.label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Location Type Dropdown */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Location Type <span className="text-red-500">*</span>
            </label>
            <select
              name="locationType"
              value={formik.values.locationType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="Select">Select</option>
              <option value="Rural">Rural</option>
              <option value="Urban">Urban</option>
              <option value="Metro Semi Urban">Metro Semi Urban</option>
            </select>
            {formik.touched.locationType && formik.errors.locationType && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.locationType}
              </p>
            )}
          </div>
        </div>

        <div className=" text-center">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default AepsRegistrationForm;
