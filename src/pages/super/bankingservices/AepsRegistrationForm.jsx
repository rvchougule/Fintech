import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterField from "../../../components/utility/FilterField";

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
      locationType: "",
      
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      toast.success("Form submitted successfully!");
      resetForm();
    },
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter Name",
      value: formik.values.name,
      onChange: (val) => formik.setFieldValue("name", val),
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
      placeholder: "Enter Mobile",
      value: formik.values.mobile,
      onChange: (val) => formik.setFieldValue("mobile", val),
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Email",
      value: formik.values.email,
      onChange: (val) => formik.setFieldValue("email", val),
    },
    {
      name: "aadhaar",
      label: "Aadhaar",
      type: "text",
      placeholder: "Enter Aadhaar",
      value: formik.values.aadhaar,
      onChange: (val) => formik.setFieldValue("aadhaar", val),
    },
    {
      name: "pan",
      label: "PAN",
      type: "text",
      placeholder: "ABCDE1234A",
      value: formik.values.pan,
      onChange: (val) => formik.setFieldValue("pan", val),
    },
    {
      name: "shopName",
      label: "Shop Name",
      type: "text",
      placeholder: "Enter Your Shop Name",
      value: formik.values.shopName,
      onChange: (val) => formik.setFieldValue("shopName", val),
    },
    {
      name: "locationType",
      label: "Location Type",
      type: "select",
      placeholder: "Select",
      value: formik.values.locationType,
      onChange: (val) => formik.setFieldValue("locationType", val),
      options: [
        { label: "Select", value: "", disabled: true },
        { label: "Rural", value: "Rural" },
        { label: "Urban", value: "Urban" },
        { label: "Metro Semi Urban", value: "Metro Semi Urban" },
      ],
    },
  ];

  return (
    <div className="min-h-screen  items-center px-4 bg-gray-100 dark:bg-transparent ">

      <form
        onSubmit={formik.handleSubmit}
        className="w-full bg-white  dark:bg-darkBlue/70 p-6 rounded-lg   shadow-sm  mt-3"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
          AePS Service Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {fields.map((field) => (
            <div key={field.name}>
              <FilterField
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
                options={field.options}
                width="w-full"
              />

              {formik.touched[field.name] && formik.errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-left mt-6">
          <button
            type="submit"
            className="bg-[#7776DE] hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AepsRegistrationForm;
