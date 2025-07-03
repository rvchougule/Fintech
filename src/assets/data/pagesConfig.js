// pagesConfig.js
import * as yup from "yup";

const baseClass =
  "w-full px-3 py-2 rounded dark:bg-[#1e293b] dark:text-white border border-gray-600";

export default {
  "Profile Details": {
    schema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      securityPin: yup
        .string()
        .matches(/^\d{4,6}$/)
        .required(),
    }),
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter name",
        className: baseClass,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter email",
        className: baseClass,
      },
      {
        name: "securityPin",
        label: "Security PIN",
        type: "password",
        placeholder: "****",
        className: baseClass,
      },
    ],
    onSubmit: (data) => console.log("Profile Updated:", data),
    resetAfterSubmit: true,
    submitText: "Update Profile",
  },

  "Bank Details": {
    schema: yup.object({
      accountNumber: yup
        .string()
        .matches(/^\d{9,18}$/)
        .required(),
      bankName: yup.string().required(),
      ifscCode: yup
        .string()
        .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/)
        .required(),
      securityPin: yup
        .string()
        .matches(/^\d{4,6}$/)
        .required(),
    }),
    fields: [
      {
        name: "accountNumber",
        label: "Account Number",
        type: "text",
        className: baseClass,
      },
      {
        name: "bankName",
        label: "Bank Name",
        type: "text",
        className: baseClass,
      },
      {
        name: "ifscCode",
        label: "IFSC Code",
        type: "text",
        className: baseClass,
      },
      {
        name: "securityPin",
        label: "Security PIN",
        type: "password",
        className: baseClass,
      },
    ],
    onSubmit: (data) => console.log("Bank Details:", data),
    resetAfterSubmit: true,
    submitText: "Update",
  },

  // Add other sections like "KYC Details", "Password Manager" here similarly
};
