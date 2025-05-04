import React, { useState, useEffect } from "react";

const Interform = () => {
  const [interData, setInterData] = useState({
    board: "",
    year: "",
    rollNumber: "",
    grade: "",
    group: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("interFormData", JSON.stringify(interData));
    alert("✅ Intermediate information saved!");
  };

  useEffect(() => {
    const data = localStorage.getItem("interFormData");
    if (data) {
      setInterData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Intermediate Details</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Board Name</label>
        <input
          type="text"
          name="board"
          value={interData.board}
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
          value={interData.year}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 2018"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Roll Number</label>
        <input
          type="text"
          name="rollNumber"
          value={interData.rollNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 654321"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Group</label>
        <input
          type="text"
          name="group"
          value={interData.group}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., Pre-Engineering"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Grade/Marks</label>
        <input
          type="text"
          name="grade"
          value={interData.grade}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., A / 920"
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

export default Interform;
