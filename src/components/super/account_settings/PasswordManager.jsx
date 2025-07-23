import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Yup validation schema
const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "New password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
  securityPin: yup
    .string()
    .matches(/^\d{4,6}$/, "PIN must be 4 to 6 digits")
    .required("Security PIN is required"),
});

const PasswordManager = ({ initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    // Handle password update logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
    >
      {/* Old Password */}
      <div>
        <label className="block text-sm mb-1 ">Old Password</label>
        <input
          type="password" placeholder="Enter Value"
          {...register("oldPassword")}
          className="w-full px-3 py-2 rounded  dark:text-white border border-gray-600"
        />
        <p className="text-red-500 text-xs mt-1">
          {errors.oldPassword?.message}
        </p>
      </div>

      {/* New Password */}
      <div>
        <label className="block text-sm mb-1">New Password</label>
        <input
          type="password" placeholder="Enter Value"
          {...register("newPassword")}
          className="w-full px-3 py-2 rounded  dark:text-white border border-gray-600"
        />
        <p className="text-red-500 text-xs mt-1">
          {errors.newPassword?.message}
        </p>
      </div>

      {/* Confirmed Password */}
     <div>
        <label className="block text-sm mb-1">Confirmed Password</label>
        <input
          type="password" placeholder="Enter Value"
          {...register("confirmedPassword")}
          className="w-full px-3 py-2 rounded  dark:text-white border border-gray-600"
        />
        <p className="text-red-500 text-xs mt-1">
          {errors.confirmPassword?.message}
        </p>
      </div>

      {/* Submit Button */}
      <div className="md:col-span-3">
        <button
          type="submit"
          className="px-6 py-2 bg-secondary text-white rounded hover:bg-violet-600 transition"
        >
          Password Reset
        </button>
      </div>
    </form>
  );
};

export default PasswordManager;
