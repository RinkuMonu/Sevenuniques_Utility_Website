"use client";
import React, { useState } from "react";
import CircularScoreIndicator from "./CircularScoreIndicator";

// ✅ Form Component (moved outside to fix React Hooks nesting error)
function ValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pancard: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "name") {
      // Allow only alphabets and spaces
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    if (name === "mobile") {
      // Allow only numbers and limit to 10 digits
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    if (name === "pancard") {
      // Allow alphanumeric and uppercase automatically
      value = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (formData.pancard.length !== 10) {
      newErrors.pancard = "PAN card number must be 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-6 w-full max-w-lg py-8"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          User Information Form
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            className="w-full border border-gray-300  text-gray-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* PAN Card Number */}
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">PAN Card Number</label>
          <input
            type="text"
            name="pancard"
            value={formData.pancard}
            onChange={handleChange}
            placeholder="Enter your PAN card number"
            className="w-full border border-gray-300 text-gray-500 rounded-lg p-2 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.pancard && (
            <p className="text-red-500 text-sm mt-1">{errors.pancard}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#1e5566] hover:bg-[#0C3D4C]/80 text-white font-semibold py-2 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// ✅ Main Component
const CreditScoreReport = () => {
  const [score, setScore] = useState(806);

  const creditFactors = [
    { label: "Credit Card Utilization", value: 25 },
    { label: "Payment History", value: 99 },
    { label: "Age of Credit History", value: 45 },
    { label: "Total Accounts", value: 81 },
  ];

  return (
    <div className="px-4 lg:px-0 py-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-2xl md:text-5xl font-bold text-[#0C3D4C] text-center lg:text-left">
                Credit Score Check, <br /> Bilkul Free
              </h3>

              <div className="w-full">
                <div className="rounded-full">
                  <CircularScoreIndicator score={score} maxScore={1000} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="formm">
            <ValidationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreReport;
