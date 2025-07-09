import React, { useState } from "react";

const Electricity = () => {
  const [formData, setFormData] = useState({
    operator: "",
    mobile: "",
    tPin: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.operator) newErrors.operator = "Please select an operator.";
    if (!formData.mobile) newErrors.mobile = "Please enter mobile number.";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.tPin) newErrors.tPin = "Please enter T-Pin.";
    else if (formData.tPin.length < 4)
      newErrors.tPin = "T-Pin must be at least 4 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form Submitted!");
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="h-[90vh] 2xl:max-w-[80%] p-4 mx-8 bg-secondaryOne dark:text-white dark:bg-darkBlue/70 rounded-2xl 2xl:mx-auto text-gray-800 overflow-hidden overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className=" flex justify-between w-full">
        <div className="justify-center items-center rounded">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-3xl px-3 font-bold ">Bill Payment</h1>
            <div className="mt-4 px-2">
              <p className="text-1xl px-1 font-semibold">
                Electricity Operator
              </p>
              <select
                name="operator"
                value={formData.operator}
                onChange={handleChange}
                className="w-100 border rounded px-2 py-2 m-1"
              >
                <option value="">Select Operator</option>
                <option value="Tata">Tata Power</option>
                <option value="BSES">BSES</option>
                <option value="Adani">Adani</option>
              </select>
              {errors.operator && (
                <p className="text-red-500 text-sm">{errors.operator}</p>
              )}
            </div>

            <div className="mt-1 px-2">
              {/* Mobile Number */}
              <p className="text-1xl px-1 font-semibold">Mobile Number </p>
              <input
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-100 border rounded px-2 py-2 m-1"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            <div className="mt-1 px-2">
              {/* Transaction-Pin */}
              <p className="text-1xl px-1 font-semibold">T-Pin </p>
              <input
                type="password"
                name="tPin"
                value={formData.tPin}
                placeholder="Enter Transaction Pin"
                onChange={handleChange}
                className="w-100 border rounded px-2 py-2 m-1"
              />
              {errors.tPin && (
                <p className="text-red-500 text-sm">{errors.tPin}</p>
              )}
              <a
                href="#"
                className="px-1 cursor-pointer text-purple-500 text-sm font-semibold"
              >
                Forgot Pin?
              </a>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-2 ">
              <button
                type="button"
                className="bg-secondary text-white hover:[#7a7bf0] text-white px-5 py-2 rounded cursor-pointer"
              >
                Fetch
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded cursor-pointer"
              >
                Pay
              </button>
            </div>
          </form>
        </div>

        <div className="w-70 h-90 border border-black border border-b-black text-center">
          Image{" "}
        </div>
      </div>
    </div>
  );
};

export default Electricity;
