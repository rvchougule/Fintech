import React, { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentForm from "../../../components/super/bill_payment/PaymentForm";

const Clubsandassociations = () => {
  const [selectedOperator, setSelectedOperator] = useState();

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

  const operatorOptions = [
    "Adani Electricity Mumbai Limited - Coverage: IND-MAH-MUMBAI",
    "Berhampore Swimming Club - Coverage: IND-WBL-MURSHIDABAD",
    "Central University Of Tamil Nadu Alumni Association - Coverage: IND",
    "Friends Arts And Sports Club - Coverage: IND-KER",
    "Madhya Pradesh Chamber Of Commerce And Industry - Coverage: IND",
    "MBC Connect Pvt Ltd - Coverage: IND-MAH",
    "Naval Officers Institute - Coverage: IND-GOA-SOUTH_GOA",
    "One Nation Foundation - Coverage: IND-MAH",
    "Radheshyam Apartment Owners Welfare Association Vijayawada - Coverage: IND-ANP",
    "Rajindra Gymkhana And Mahendra Club Ltd - Coverage: IND",
    "Spring Valley Owners Association Vellore - Coverage: IND-TND",
    "Sri Rama Buddha Welfare Association Madhurawada - Coverage: IND-ANP",
    "St Pauls Club - Coverage: IND",
    "The Institute Of Indian Foundrymen - Coverage: IND",
    "United Service Club - Coverage: IND-MAH-MUMBAI",
    "Youth Club Bejjipuram Ranasthalam - Coverage: IND-ANP",
  ];

  const formFields = useMemo(() => {
    return [
      {
        label: "Clubsandassociations Operator",
        type: "select",
        name: "operator",
        placeholder: "Select Operator",
        options: operatorOptions,
        isSearchable: true,
        show: true,
      },
      {
        label: "Mobile Number",
        type: "text",
        name: "mobile",
        placeholder: "Enter Mobile Number",
        show: true,
      },
      {
        label: "CA Number",
        type: "text",
        name: "caNumber",
        placeholder: "Enter CA Number",
        show: [
          "Association of National Exchanges Members of India - Coverage: IND-MAH",
          "Berhampore Swimming Club - Coverage: IND-WBL-MURSHIDABAD",
        ].includes(selectedOperator),
      },
      {
        label: "K Number",
        type: "text",
        name: "kNumber",
        placeholder: "Enter K Number",
        show: [
          "Berhampore Swimming Club - Coverage: IND-WBL-MURSHIDABAD",
          "Central University Of Tamil Nadu Alumni Association - Coverage: IND",
        ].includes(selectedOperator),
      },
      {
        label: "T-Pin",
        type: "password",
        name: "tPin",
        placeholder: "Enter Transaction Pin",
        show: true,
      },
    ];
  }, [selectedOperator]);

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 dark:text-white dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {
        <PaymentForm
          title="Bill Payment"
          formFields={formFields}
          handleSubmit={handleSubmit}
          setSelectOperator={setSelectedOperator}
        />
      }
    </div>
  );
};

export default Clubsandassociations;