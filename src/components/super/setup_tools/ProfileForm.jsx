// DynamicForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileForm = ({ config }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(config.schema),
    defaultValues: config.defaultValues || {},
  });

  const watchFields = watch();

  const onSubmit = (data) => {
    config.onSubmit?.(data);
    if (config.resetAfterSubmit) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
    >
      {config.fields.map((field, i) => (
        <div key={i} className={field.fullWidth ? "md:col-span-2" : ""}>
          <label className="block text-sm mb-1">{field.label}</label>

          {field.type === "select" ? (
            <select {...register(field.name)} className={field.className}>
              <option value="">Select {field.label}</option>
              {field.options?.map((opt, j) => (
                <option key={j} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : field.type === "file" ? (
            <input
              type="file"
              accept={field.accept || "image/*"}
              {...register(field.name)}
              className={field.className}
              onChange={(e) => {
                const file = e.target.files[0];
                if (field.preview && file?.type.startsWith("image/")) {
                  setValue(field.name, e.target.files);
                  field.onPreview?.(URL.createObjectURL(file));
                }
              }}
            />
          ) : (
            <input
              {...register(field.name)}
              {...(field.attrs || {})}
              className={field.className}
              onInput={field.onInput}
              placeholder={field.placeholder}
            />
          )}

          {errors[field.name] && (
            <p className="text-sm text-red-500 mt-1">
              {errors[field.name]?.message}
            </p>
          )}

          {field.helper && (
            <small className="text-blue-400">{field.helper}</small>
          )}
        </div>
      ))}

      <div className="md:col-span-2">
        <button
          type="submit"
          className="px-6 py-2 bg-secondary text-white rounded hover:bg-violet-600 transition"
        >
          {config.submitText || "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
