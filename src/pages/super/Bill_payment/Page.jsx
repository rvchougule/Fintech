



import React, { useState } from "react";

const ElectricityBill = () => {
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
    else if (!/^[6-9]\d{9}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.tPin) newErrors.tPin = "Please enter T-Pin.";
    else if (formData.tPin.length < 4) newErrors.tPin = "T-Pin must be at least 4 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex justify-center items-start gap-10 p-10 bg-gray-100 min-h-screen">
      {/* Left Side - Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Bill Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Electricity Operator */}
          <div>
            <label className="block text-gray-600 mb-1">Electricity Operator</label>
            <select
              name="operator"
              value={formData.operator}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Operator</option>
              <option value="Tata">Tata Power</option>
              <option value="BSES">BSES</option>
              <option value="Adani">Adani</option>
            </select>
            {errors.operator && <p className="text-red-500 text-sm">{errors.operator}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-600 mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile no."
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* T-Pin */}
          <div>
            <div className="flex justify-between">
              <label className="block text-gray-600 mb-1">T-Pin</label>
              <a href="#" className="text-purple-500 text-sm">Generate Or Forgot Pin??</a>
            </div>
            <input
              type="password"
              name="tPin"
              placeholder="Enter transaction pin"
              value={formData.tPin}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.tPin && <p className="text-red-500 text-sm">{errors.tPin}</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded"
            >
              Fetch
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded"
            >
              Pay
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="bg-white rounded-lg shadow-lg w-96 h-[400px] flex items-center justify-center">
        <img
          src="https://via.placeholder.com/300x300.png?text=Electricity+Image"
          alt="Electricity Illustration"
          className="object-contain max-h-full max-w-full"
        />
      </div>
    </div>
  );
};

export default ElectricityBill;
