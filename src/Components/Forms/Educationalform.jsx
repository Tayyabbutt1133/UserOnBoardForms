import React, { useState } from "react";
import { useEffect } from "react";

const EducationalForm = () => {
  const [formData, setFormData] = useState({
    highestDegree: "",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",
    gpaScore: "",
    otherCertifications: "",
    currentlyEnrolled: false,
    additionalQualifications: "",
    schoolName: "",
    schoolGraduationYear: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  useEffect(() => {
   
    const Educational_data = localStorage.getItem("educationalForm_Data");
    if (Educational_data) {
      setFormData(JSON.parse(Educational_data));
    }
    
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Educational data submitted:", formData);
    localStorage.setItem("educationalForm_Data", JSON.stringify(formData));
  };

  return (
    <div className="flex flex-col text-white font-serif">
      <h1 className="text-2xl font-semibold mb-6">Educational Information</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Highest Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="highestDegree"
              className="block mb-1 text-sm font-medium"
            >
              Highest Degree/Qualification{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              id="highestDegree"
              name="highestDegree"
              value={formData.highestDegree}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            >
              <option value="">Select Degree</option>
              <option value="highSchool">High School Diploma</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">Ph.D./Doctorate</option>
              <option value="diploma">Diploma</option>
              <option value="certificate">Certificate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="fieldOfStudy"
              className="block mb-1 text-sm font-medium"
            >
              Field of Study/Major <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Computer Science"
            />
          </div>
        </div>

        {/* Institution Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="institution"
              className="block mb-1 text-sm font-medium"
            >
              Institution/University <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="University of Example"
            />
          </div>

          <div>
            <label
              htmlFor="graduationYear"
              className="block mb-1 text-sm font-medium"
            >
              Year of Graduation
            </label>
            <input
              type="text"
              id="graduationYear"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="2022"
            />
          </div>
        </div>

        {/* Academic Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="gpaScore"
              className="block mb-1 text-sm font-medium"
            >
              GPA/Grade/Percentage
            </label>
            <input
              type="text"
              id="gpaScore"
              name="gpaScore"
              value={formData.gpaScore}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="3.8/4.0 or 85%"
            />
          </div>

          <div className="flex items-center pt-6">
            <input
              type="checkbox"
              id="currentlyEnrolled"
              name="currentlyEnrolled"
              checked={formData.currentlyEnrolled}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="currentlyEnrolled"
              className="ml-2 block text-sm font-medium"
            >
              I am currently enrolled in this institution
            </label>
          </div>
        </div>

        {/* High School Information */}
        <div className="pt-2">
          <h2 className="text-lg font-medium mb-3">High School Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="schoolName"
                className="block mb-1 text-sm font-medium"
              >
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Lincoln High School"
              />
            </div>

            <div>
              <label
                htmlFor="schoolGraduationYear"
                className="block mb-1 text-sm font-medium"
              >
                Graduation Year
              </label>
              <input
                type="text"
                id="schoolGraduationYear"
                name="schoolGraduationYear"
                value={formData.schoolGraduationYear}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="2018"
              />
            </div>
          </div>
        </div>

        {/* Additional Qualifications */}
        <div>
          <label
            htmlFor="otherCertifications"
            className="block mb-1 text-sm font-medium"
          >
            Other Certifications/Licenses
          </label>
          <input
            type="text"
            id="otherCertifications"
            name="otherCertifications"
            value={formData.otherCertifications}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="AWS Certified Solutions Architect, PMP, etc."
          />
        </div>

        <div>
          <label
            htmlFor="additionalQualifications"
            className="block mb-1 text-sm font-medium"
          >
            Additional Qualifications/Achievements
          </label>
          <textarea
            id="additionalQualifications"
            name="additionalQualifications"
            value={formData.additionalQualifications}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="List any academic achievements, honors, scholarships, etc."
          ></textarea>
        </div>

        {/* Navigation Buttons */}
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

export default EducationalForm;
