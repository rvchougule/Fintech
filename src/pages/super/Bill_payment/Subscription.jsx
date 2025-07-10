import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentForm from "../../../components/super/bill_payment/PaymentForm";

const Subscription = () => {
  // Yup validation schema
  const validationSchema = Yup.object().shape({
    operator: Yup.string().required("Select an Operator."),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number.")
      .required("Enter Mobile number."),
    tPin: Yup.string()
      .min(4, "T-Pin must be at least 4 digits.")
      .required("Enter Transaction-Pin."),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      toast.success("Form Submitted Successfully!");
      console.log("Submitted Data:", formData);
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  const formFields = [
    {
      label: "Subscription Operator",
      type: "select",
      name: "operator",
      placeholder: "Select Operator",
      options: ["Tata Power", "BSES", "Adani"],
    },
    {
      label: "Mobile Number",
      type: "text",
      name: "mobile",
      placeholder: "Enter Mobile Number",
    },
    {
      label: "T-Pin",
      type: "password",
      name: "tPin",
      placeholder: "Enter Transaction Pin",
    },
  ];

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:text-white dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {
        <PaymentForm
          title="Bill Payment"
          formFields={formFields}
          handleSubmit={handleSubmit}
        />
      }
    </div>
  );
};

export default Subscription;
