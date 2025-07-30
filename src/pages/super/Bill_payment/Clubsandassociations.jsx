import React, { useMemo, useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentForm from "../../../components/super/bill_payment/PaymentForm";
import Clubsandassociations_data from "./jsonData/Clubsandassociations_data.json";

const Clubsandassociations = () => {
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedProviderIndex, setSelectedProviderIndex] = useState(null);
  const [billCoverage, setBillCoverage] = useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

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

  const operatorOptions = Clubsandassociations_data.providers.map((provider) => {
    return `${provider.name} - Coverage: ${provider.billerCoverage}`;
  });

  const customParamResparray = Clubsandassociations_data.providers.map((provider) => {
    const paramArray = JSON.parse(provider.customParamResp);
    return paramArray.map((paramStr) => JSON.parse(paramStr));
  });

  const handleOperatorChange = (selectedValue) => {
    setSelectedOperator(selectedValue);
    const index = operatorOptions.indexOf(selectedValue);
    setSelectedProviderIndex(index);

    if (index !== -1) {
      setBillCoverage(Clubsandassociations_data.providers[index].billerCoverage);
    }
  };

  const dynamicFields = useMemo(() => {
    if (selectedProviderIndex === null) return [];
    return customParamResparray[selectedProviderIndex].map((field) => ({
      label: field.customParamName,
      type: field.dataType === "NUMERIC" ? "number" : "text",
      name: field.customParamName.replace(/\s+/g, ""),
      placeholder: `Enter ${field.customParamName}`,
      show: true,
      required: !field.optional,
      minLength: field.minLength,
      maxLength: field.maxLength,
    }));
  }, [selectedProviderIndex]);

  const formFields = useMemo(() => {
    const staticFields = [
      {
        label: "Clubsandassociations Operator",
        type: "select",
        name: "operator",
        placeholder: "Select Operator",
        options: operatorOptions,
        isSearchable: true,
        show: true,
        onChange: handleOperatorChange,
      },
      {
        label: "Mobile Number",
        type: "text",
        name: "mobile",
        placeholder: "Enter Mobile Number",
        show: true,
      },
      {
        label: "T-Pin",
        type: "password",
        name: "tPin",
        placeholder: "Enter Transaction Pin",
        show: true,
      },
    ];

    const additionalFields = [...dynamicFields];
 
    if (selectedOperator !== "") {
  additionalFields.unshift({
    label: "Biller Coverage",
    type: "text",
    name: "billercoverage",
    defaultValue: billCoverage,
    readOnly: true,
    show: true,
  });
}


    return [
      staticFields[0],           // Operator
      staticFields[1],           // Mobile
      ...additionalFields,       // Biller Coverage + Dynamic
      staticFields[2],           // T-Pin
    ];
  }, [selectedOperator, billCoverage, dynamicFields]);

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 dark:text-white dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <PaymentForm
        title="Bill Payment"
        formFields={formFields}
        handleSubmit={handleSubmit}
        setSelectOperator={handleOperatorChange}
        setBillCoverage={setBillCoverage}
        setFormData={setFormData}
        formData={formData}
        errors={errors}
      />
    </div>
  );
};

export default  Clubsandassociations;
