import React, { useEffect, useMemo, useState } from "react";
import PaymentForm from "../../../components/super/bill_payment/PaymentForm";
import electricity_data from "./jsonData/elctricity_data.json";

const Electricity = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [billCoverage, setBillCoverage] = useState(""); // For bill coverage display

  const operators = useMemo(() => {
    return electricity_data.map((item) => {
      const parsedParams = JSON.parse(item.customParamResp || "[]");
      const firstParam =
        parsedParams.length > 0 ? JSON.parse(parsedParams[0]) : null;

      return {
        name: `${item.name} - Coverage: ${item.billerCoverage}`,
        coverage: item.billerCoverage,
        customReqParams: firstParam,
      };
    });
  }, []);

  const formFields = useMemo(() => {
    const fields = [
      {
        label: "Electricity Operator",
        type: "select",
        name: "operator",
        placeholder: "Select Operator",
        options: operators.map((op) => ({
          label: op.name,
          value: op.name,
          full: op,
        })),
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
        label: "T-Pin",
        type: "password",
        name: "tPin",
        placeholder: "Enter Transaction Pin",
        show: true,
      },
    ];

    if (selectedOperator?.customReqParams) {
      fields.push({
        label: selectedOperator.customReqParams.customParamName,
        type: "text",
        name: selectedOperator.customReqParams.customParamName.replace(
          /\s+/g,
          "_"
        ),
        placeholder: `Enter ${selectedOperator.customReqParams.customParamName}`,
        show: true,
      });
    }

    return fields;
  }, [selectedOperator, operators]);

  return (
    <div className="p-4">
      <PaymentForm
        title="Electricity Bill Payment"
        formFields={formFields}
        setSelectOperator={setSelectedOperator}
        setBillCoverage={setBillCoverage}
        billCoverage={billCoverage}
      />
    </div>
  );
};

export default Electricity;

