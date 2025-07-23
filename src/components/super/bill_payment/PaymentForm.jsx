import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  operator: Yup.string().required("Operator is required"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
  tPin: Yup.string()
    .min(4, "T-Pin must be at least 4 digits")
    .required("T-Pin is required"),
});

const PaymentForm = ({ title, formFields }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  return (
    <div className="flex justify-between w-full gap-4 p-1 mt-9 dark:bg-transparent">
      <div className="w-full  bg-white dark:bg-darkBlue max-w-1/2 p-2  rounded shadow-xl">
        <form onSubmit={handleSubmit(handleSubmit)} class>
          <h1 className="text-xl px-3 py-1 font-semibold pt-3">{title}</h1>

          {formFields.map((field, idx) => (
            <div className="mt-4 px-2" key={idx}>
              <p className="text-1xl px-1 font-semibold">{field.label}</p>

              {field.type === "select" ? (
                <select
                  {...register(field.name)}
                  className="w-full border rounded px-2 py-1 m-1"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  className="w-full border rounded px-2 py-1 m-1 dark:text-gray-500 "
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
                    className="px-1 cursor-pointer text-purple-500 text-sm font-semibold"
                  >
                    Generate or Forgot Pin?
                  </a>
                </button>
              )}
            </div>
          ))}

          <div className="flex justify-center space-x-2 mt-4">
            <button
              type="submit"
              className="bg-secondary shadow-md hover:bg-secondary-dark text-white px-5 py-1 rounded cursor-pointer"
            >
              Fetch
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-1 rounded cursor-pointer"
            >
              Pay
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/2 h-100 bg-white dark:bg-darkBlue rounded flex justify-center items-center shadow-xl">
        <span>Image</span>
      </div>
    </div>
  );
};

export default PaymentForm;
