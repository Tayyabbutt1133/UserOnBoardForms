import React, { useState, useEffect } from "react";

const Matricform = () => {
  const [matricData, setMatricData] = useState({
    board: "",
    year: "",
    rollNumber: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatricData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("matricFormData", JSON.stringify(matricData));
    alert("✅ Matric information saved!");
  };

  useEffect(() => {
    const data = localStorage.getItem("matricFormData");
    if (data) {
      setMatricData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Matriculation Details</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Board Name</label>
        <input
          type="text"
          name="board"
          value={matricData.board}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., BISE Lahore"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Passing Year</label>
        <input
          type="number"
          name="year"
          value={matricData.year}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 2016"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Roll Number</label>
        <input
          type="text"
          name="rollNumber"
          value={matricData.rollNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 123456"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Grade/Marks</label>
        <input
          type="text"
          name="grade"
          value={matricData.grade}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., A+ / 950"
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

export default Matricform;
