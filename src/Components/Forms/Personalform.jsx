import React, { useState } from "react";
import { useEffect } from "react";

const PersonalForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  useEffect(() => {
    
    const PersonalInfoData = localStorage.getItem("personalInfo_FormData");
    if (PersonalInfoData) {
      setFormData(JSON.parse(PersonalInfoData));
    }

  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form data submitted:", formData);
    // console.log("Form data submitted:", JSON.stringify(formData));
    // save data to localstorage on clicking save 
    localStorage.setItem("personalInfo_FormData", JSON.stringify(formData))
  };

  return (
    <div className="flex flex-col text-white font-serif">
      <h1 className="text-2xl font-semibold mb-6">Personal Information</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="John"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Parent Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fatherName"
              className="block mb-1 text-sm font-medium"
            >
              Father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="motherName"
              className="block mb-1 text-sm font-medium"
            >
              Mother's Name
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="+1 (123) 456-7890"
            />
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block mb-1 text-sm font-medium"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block mb-1 text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block mb-1 text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="123 Main St, Apt 4B"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="city" className="block mb-1 text-sm font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label htmlFor="state" className="block mb-1 text-sm font-medium">
              State/Province
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="zipCode" className="block mb-1 text-sm font-medium">
              Zip/Postal Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="country" className="block mb-1 text-sm font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <div className="space-x-3">
            <button
              type="submit"
              className="px-6 py-2 cursor-pointer rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
