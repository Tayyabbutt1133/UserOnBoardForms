import React, { useEffect, useState } from "react";

const Bachelorsform = () => {
  const [bachelorData, setBachelorData] = useState({
    university: "",
    degreeTitle: "",
    major: "",
    passingYear: "",
    rollNumber: "",
    cgpaOrMarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBachelorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  useEffect(() => {
    
    const data = localStorage.getItem("bachelorsFormData");
    if (data) {
      setBachelorData(JSON.parse(data));
    }
  },[])





  const handleSave = () => {
    localStorage.setItem("bachelorsFormData", JSON.stringify(bachelorData));
    alert("🎓 Bachelor’s information saved!");
  };

  return (
    <div className="rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Bachelor’s Degree Details</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">University Name</label>
        <input
          type="text"
          name="university"
          value={bachelorData.university}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., COMSATS University"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Degree Title</label>
        <input
          type="text"
          name="degreeTitle"
          value={bachelorData.degreeTitle}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., BS Computer Science"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Major / Specialization</label>
        <input
          type="text"
          name="major"
          value={bachelorData.major}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., Artificial Intelligence"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Passing Year</label>
        <input
          type="number"
          name="passingYear"
          value={bachelorData.passingYear}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 2023"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Roll Number</label>
        <input
          type="text"
          name="rollNumber"
          value={bachelorData.rollNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., FA19-BSE-004"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">CGPA / Marks</label>
        <input
          type="text"
          name="cgpaOrMarks"
          value={bachelorData.cgpaOrMarks}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 3.78 / 4.00"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-600 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Bachelorsform;
