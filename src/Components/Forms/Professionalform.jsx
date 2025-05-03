import React, { useEffect, useState } from "react";

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    currentlyEmployed: false,
    jobTitle: "",
    companyName: "",
    industry: "",
    employmentType: "",
    startDate: "",
    endDate: "",
    currentPosition: false,
    workLocation: "",
    salary: "",
    responsibilities: "",
    achievements: "",
    previousEmployment: "",
    yearsOfExperience: "",
    skills: "",
    references: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Special handling for the "Current Position" checkbox
    if (name === "currentPosition" && checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        endDate: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };


  useEffect(() => {
   
    const data = localStorage.getItem("ProfessionalForm");
    if (data) {
      setFormData(JSON.parse(data));
    }
    
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Professional data submitted:", formData);
    localStorage.setItem("ProfessionalForm", JSON.stringify(formData));
  };

  return (
    <div className="flex flex-col text-white font-serif">
      <h1 className="text-2xl font-semibold mb-6">Professional Information</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Employment Status */}
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="currentlyEmployed"
              name="currentlyEmployed"
              checked={formData.currentlyEmployed}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="currentlyEmployed"
              className="ml-2 block text-sm font-medium"
            >
              I am currently employed
            </label>
          </div>
        </div>

        {/* Current/Most Recent Position */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            Current/Most Recent Position
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="jobTitle"
                className="block mb-1 text-sm font-medium"
              >
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Senior Software Engineer"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-1 text-sm font-medium"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Acme Corporation"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="industry"
                className="block mb-1 text-sm font-medium"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Technology"
              />
            </div>

            <div>
              <label
                htmlFor="employmentType"
                className="block mb-1 text-sm font-medium"
              >
                Employment Type
              </label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              >
                <option value="">Select Type</option>
                <option value="fullTime">Full-time</option>
                <option value="partTime">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
                <option value="temporary">Temporary</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="startDate"
                className="block mb-1 text-sm font-medium"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="currentPosition"
                  name="currentPosition"
                  checked={formData.currentPosition}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="currentPosition"
                  className="ml-2 block text-sm font-medium"
                >
                  I currently work here
                </label>
              </div>

              {!formData.currentPosition && (
                <>
                  <label
                    htmlFor="endDate"
                    className="block mb-1 text-sm font-medium"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    disabled={formData.currentPosition}
                  />
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="workLocation"
                className="block mb-1 text-sm font-medium"
              >
                Work Location
              </label>
              <input
                type="text"
                id="workLocation"
                name="workLocation"
                value={formData.workLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="City, State or Remote"
              />
            </div>

            <div>
              <label
                htmlFor="salary"
                className="block mb-1 text-sm font-medium"
              >
                Salary/Compensation (Optional)
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="$75,000/year"
              />
            </div>
          </div>
        </div>

        {/* Responsibilities & Achievements */}
        <div>
          <label
            htmlFor="responsibilities"
            className="block mb-1 text-sm font-medium"
          >
            Key Responsibilities
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Describe your main responsibilities and tasks"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="achievements"
            className="block mb-1 text-sm font-medium"
          >
            Key Achievements
          </label>
          <textarea
            id="achievements"
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="List your major achievements and contributions"
          ></textarea>
        </div>

        {/* Previous Experience Summary */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            Previous Experience Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="previousEmployment"
                className="block mb-1 text-sm font-medium"
              >
                Previous Employment
              </label>
              <textarea
                id="previousEmployment"
                name="previousEmployment"
                value={formData.previousEmployment}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Briefly list previous positions (e.g. Marketing Manager at XYZ Inc., 2018-2020)"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="yearsOfExperience"
                className="block mb-1 text-sm font-medium"
              >
                Total Years of Experience
              </label>
              <input
                type="text"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="5 years"
              />
            </div>
          </div>
        </div>

        {/* Skills & References */}
        <div>
          <label htmlFor="skills" className="block mb-1 text-sm font-medium">
            Professional Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="List your key professional skills (e.g. JavaScript, Project Management, Digital Marketing)"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="references"
            className="block mb-1 text-sm font-medium"
          >
            References (Optional)
          </label>
          <textarea
            id="references"
            name="references"
            value={formData.references}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Name, Position, Company, Contact Information"
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

export default ProfessionalForm;
