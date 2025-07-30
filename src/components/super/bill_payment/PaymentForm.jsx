import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdBlock, MdDarkMode } from "react-icons/md";
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
    setValue,
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  const selectedOperator = watch("operator");

 useEffect(() => {
  if (selectedOperator) {
    const coverage = ` ${selectedOperator.split(":")[1]}`;
    setSelectOperator(selectedOperator);
    setBillCoverage(coverage);
    setValue("billercoverage", coverage); 
  }
}, [selectedOperator, setValue]);


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
          className:
            "border-l-4 border-red-600 bg-white text-black font-medium",
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-4 p-1 mt-1 dark:bg-transparent">
      <div className="w-full lg:w-1/2 bg-white dark:bg-darkBlue p-2 rounded shadow-xl">
        <form onSubmit={handleSubmit(handlePay)}>
          <h1 className="text-xl px-3 py-1 font-semibold pt-3">{title}</h1>

          {formFields.map((field, idx) => (
            <div
              className="mt-4 px-2 placeholder-gray-900 dark:placeholder-white"
              key={idx}
            >
              {field.show && (
                <p className="text-1xl px-1 font-semibold ">{field.label}</p>
              )}
              {field.type === "select" ? (
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: { onChange, value, ref } }) => {
                    const isDarkMode =
                      document.documentElement.classList.contains("dark");

                    return (
                      <div className="rounded">
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
                          classNamePrefix="custom-select"
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              backgroundColor: isDarkMode
                                ? "#182740ff"
                                : "#fff",
                              borderColor: state.isFocused
                                ? "#3b82f6"
                                : "#d1d5db",
                              color: isDarkMode ? "#fff" : "#000",
                              boxShadow: "none",
                            }),
                            menu: (base) => ({
                              ...base,
                              backgroundColor: isDarkMode ? "#1e293b" : "#fff",
                              color: isDarkMode ? "#fff" : "#000",
                            }),
                            singleValue: (base) => ({
                              ...base,
                              color: isDarkMode ? "#fff" : "#000",
                            }),
                            option: (base, { isFocused }) => ({
                              ...base,
                              backgroundColor: isFocused
                                ? isDarkMode
                                  ? "#334155"
                                  : "#e0e7ff"
                                : isDarkMode
                                ? "#1e293b"
                                : "#fff",
                              color: isDarkMode ? "#fff" : "#000",
                            }),
                          }}
                        />
                      </div>
                    );
                  }}
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className="w-full border rounded px-2 py-1 m-1 bg-white dark:bg-darkBlue/70 dark:text-white"
                  hidden={!field.show}
                  value={field.value}
                  readOnly={field.readOnly}
                />
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-sm ">
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