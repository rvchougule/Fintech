import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdBlock } from "react-icons/md";
import Select from "react-select";

const paymentSchema = Yup.object().shape({
  operator: Yup.string().required("Operator is required"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
  tPin: Yup.string()
    .min(4, "T-Pin must be at least 4 digits")
    .required("T-Pin is required"),
});

const PaymentForm = ({
  title,
  formFields,
  setSelectOperator,
  setBillCoverage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  const selectedOperator = watch("operator");

  useEffect(() => {
    if (selectedOperator) {
      setSelectOperator(selectedOperator);
      setBillCoverage(` ${selectedOperator.split(":")[1]}`); // Optional logic
    }
  }, [selectedOperator]);

  const handleFetchData = (data) => {
    toast.info("Data fetched successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
    console.log("Fetched Data", data);
  };

  const handlePay = (data) => {
    if (!data.operator || !data.mobile || !data.tPin) {
      toast.error(
        <div className="flex items-start">
          <MdBlock className="text-red-600 text-xl mt-1 mr-2" />
          <div>
            <p className="font-medium">All fields are required.</p>
          </div>
        </div>,
        {
          position: "top-right",
          className: "border-l-4 border-red-600 bg-white text-black font-medium",
          icon: false,
          closeOnClick: true,
          autoClose: 2000,
        }
      );
      return;
    }

    toast.success("Recharge submitted successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-4 p-1 mt-1">
      <div className="w-full lg:w-1/2 bg-white dark:bg-darkBlue/70 p-2 rounded shadow-xl">
        <form onSubmit={handleSubmit(handlePay)}>
          <h1 className="text-xl px-3 py-1 font-semibold pt-3">{title}</h1>

          {formFields.map((field, idx) => (
            <div
              className="mt-4 px-2 placeholder-gray-900 dark:placeholder-white"
              key={idx}
            >
              {field.show && (
                <p className="text-1xl px-1 font-semibold">{field.label}</p>
              )}

              {field.type === "select" ? (
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      inputRef={ref}
                      value={value ? { label: value, value } : null}
                      onChange={(selectedOption) =>
                        onChange(selectedOption.value)
                      }
                      options={field.options.map((opt) => ({
                        label: opt,
                        value: opt,
                      }))}
                      placeholder={field.placeholder}
                      isSearchable
                      noOptionsMessage={() => "No match found"}
                      styles={{
                        menu: (provided) => ({
                          ...provided,
                          maxHeight: "150px",
                          overflowY: "auto",
                        }),
                      }}
                    />
                  )}
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className="w-full border rounded px-2 py-1 m-1 bg-white dark:bg-darkBlue"
                  hidden={!field.show}
                  value={field.value}
                  readOnly={field.readOnly}
                />
              )}

              {errors[field.name] && (
                <p className="text-red-500 text-sm">
                  {errors[field.name].message}
                </p>
              )}

              {field.name === "tPin" && (
                <button className="transition cursor-pointer">
                  <a
                    href="/profile/view"
                    className="px-1 text-purple-500 text-sm font-semibold"
                  >
                    Generate or Forgot Pin?
                  </a>
                </button>
              )}
            </div>
          ))}

          <div className="flex justify-center space-x-2 mt-4">
            <button
              type="button"
              className="bg-secondary text-white px-5 py-1 rounded"
              onClick={handleSubmit(handleFetchData)}
            >
              Fetch
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-5 py-1 rounded"
            >
              Pay
            </button>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/2 h-100 bg-white dark:bg-darkBlue rounded flex justify-center items-center shadow-xl">
        <span>Image</span>
      </div>
    </div>
  );
};

export default PaymentForm;