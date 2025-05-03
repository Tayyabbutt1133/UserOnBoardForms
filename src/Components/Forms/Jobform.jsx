import React, { useEffect, useState } from "react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    prevJob: "",
    jobSector: "",
    preferredIndustry: "",
    jobType: "",
    workExperience: "",
    desiredSalary: "",
    workLocation: "",
    remotePreference: "",
    workAvailability: "",
    noticePeriod: "",
    shiftPreference: "",
    travelWillingness: false,
    relocationWillingness: false,
    skills: "",
    certifications: "",
    jobHistory: "",
    reasonForLeaving: "",
    references: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    
    const data = localStorage.getItem("Jobformdata");
    if (data) {
      setFormData(JSON.parse(data));
    }

  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Job data submitted:", formData);
    localStorage.setItem("Jobformdata", JSON.stringify(formData));
  };

  return (
    <div className="flex flex-col text-white font-serif">
      <h1 className="text-2xl font-semibold mb-6">Job Information</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Job Preferences */}
        <div>
          <h2 className="text-lg font-medium mb-3">Job Preferences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="preferredIndustry"
                className="block mb-1 text-sm font-medium"
              >
                Preferred Industry <span className="text-red-500">*</span>
              </label>
              <select
                id="preferredIndustry"
                name="preferredIndustry"
                value={formData.preferredIndustry}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              >
                <option value="">Select Industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="media">Media & Entertainment</option>
                <option value="consulting">Consulting</option>
                <option value="government">Government</option>
                <option value="nonprofit">Non-profit</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="jobSector"
                className="block mb-1 text-sm font-medium"
              >
                Job Sector <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="jobSector"
                name="jobSector"
                value={formData.jobSector}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="e.g., IT, Marketing, Finance"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="jobType"
                className="block mb-1 text-sm font-medium"
              >
                Preferred Employment Type{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
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

            <div>
              <label
                htmlFor="workExperience"
                className="block mb-1 text-sm font-medium"
              >
                Total Work Experience
              </label>
              <input
                type="text"
                id="workExperience"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="e.g., 3 years"
              />
            </div>
          </div>
        </div>

        {/* Compensation & Location */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="desiredSalary"
                className="block mb-1 text-sm font-medium"
              >
                Expected Salary/Compensation
              </label>
              <input
                type="text"
                id="desiredSalary"
                name="desiredSalary"
                value={formData.desiredSalary}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="e.g., $75,000/year"
              />
            </div>

            <div>
              <label
                htmlFor="workLocation"
                className="block mb-1 text-sm font-medium"
              >
                Preferred Work Location
              </label>
              <input
                type="text"
                id="workLocation"
                name="workLocation"
                value={formData.workLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="e.g., New York, NY"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="remotePreference"
                className="block mb-1 text-sm font-medium"
              >
                Remote Work Preference
              </label>
              <select
                id="remotePreference"
                name="remotePreference"
                value={formData.remotePreference}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              >
                <option value="">Select Preference</option>
                <option value="fullyRemote">Fully Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="workAvailability"
                className="block mb-1 text-sm font-medium"
              >
                Work Availability
              </label>
              <input
                type="text"
                id="workAvailability"
                name="workAvailability"
                value={formData.workAvailability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="e.g., Immediate, 2 weeks"
              />
            </div>
          </div>
        </div>

        {/* Work Preferences */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="noticePeriod"
                className="block mb-1 text-sm font-medium"
              >
                Notice Period
              </label>
              <input
                type="text"
                id="noticePeriod"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="e.g., 2 weeks"
              />
            </div>

            <div>
              <label
                htmlFor="shiftPreference"
                className="block mb-1 text-sm font-medium"
              >
                Shift Preference
              </label>
              <select
                id="shiftPreference"
                name="shiftPreference"
                value={formData.shiftPreference}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              >
                <option value="">Select Preference</option>
                <option value="morning">Morning Shift</option>
                <option value="afternoon">Afternoon Shift</option>
                <option value="night">Night Shift</option>
                <option value="rotating">Rotating Shifts</option>
                <option value="flexible">Flexible Hours</option>
                <option value="standard">Standard Business Hours</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="travelWillingness"
                name="travelWillingness"
                checked={formData.travelWillingness}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="travelWillingness"
                className="ml-2 block text-sm font-medium"
              >
                Willing to travel for work
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="relocationWillingness"
                name="relocationWillingness"
                checked={formData.relocationWillingness}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="relocationWillingness"
                className="ml-2 block text-sm font-medium"
              >
                Willing to relocate
              </label>
            </div>
          </div>
        </div>

        {/* Skills & Certifications */}
        <div>
          <label htmlFor="skills" className="block mb-1 text-sm font-medium">
            Key Skills <span className="text-red-500">*</span>
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="List your key professional skills relevant to the job"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="certifications"
            className="block mb-1 text-sm font-medium"
          >
            Relevant Certifications
          </label>
          <textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="List any relevant certifications, licenses, or professional qualifications"
          ></textarea>
        </div>

        {/* Previous Work Experience */}
        <div>
          <h2 className="text-lg font-medium mb-3">Previous Work Experience</h2>

          <div>
            <label htmlFor="prevJob" className="block mb-1 text-sm font-medium">
              Previous Job or Internship <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="prevJob"
              name="prevJob"
              value={formData.prevJob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="e.g., Software Developer at XYZ Corp"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="jobHistory"
              className="block mb-1 text-sm font-medium"
            >
              Work Experience Details
            </label>
            <textarea
              id="jobHistory"
              name="jobHistory"
              value={formData.jobHistory}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Briefly describe your relevant work history, including companies, positions, and dates"
            ></textarea>
          </div>

          <div className="mt-4">
            <label
              htmlFor="reasonForLeaving"
              className="block mb-1 text-sm font-medium"
            >
              Reason for Leaving Last Position
            </label>
            <textarea
              id="reasonForLeaving"
              name="reasonForLeaving"
              value={formData.reasonForLeaving}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Reason for leaving your previous position"
            ></textarea>
          </div>
        </div>

        {/* References */}
        <div>
          <label
            htmlFor="references"
            className="block mb-1 text-sm font-medium"
          >
            Professional References (Optional)
          </label>
          <textarea
            id="references"
            name="references"
            value={formData.references}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Provide name, title, company, contact information, and relationship for each reference"
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

export default JobForm;
