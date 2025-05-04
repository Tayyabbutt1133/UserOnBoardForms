import React, { useState, useEffect } from "react";
import Matricform from "./Educationalsubforms/Matricform";
import Interform from "./Educationalsubforms/Interform";
import Bachelorsform from "./Educationalsubforms/Bachelorsform";

const EducationalForm = () => {
  const [highestQualification, setHighestQualification] = useState("");
  const [isFromReview, setIsFromReview] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("highestQualification");
    if (saved) {
      setHighestQualification(saved);
      setIsFromReview(true);
    }
  }, []);

  const handleQualificationChange = (e) => {
    const value = e.target.value;
    setHighestQualification(value);
    localStorage.setItem("highestQualification", value);
  };

  return (
    <div className="rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Educational</h2>

      {/* Show dropdown only if not coming from review */}
      {!isFromReview && (
        <>
          <label className="block mb-2 font-medium">
            Select Highest Qualification:
          </label>
          <select
            value={highestQualification}
            onChange={handleQualificationChange}
            className="w-full border px-3 py-2 rounded mb-6"
          >
            <option value="">-- Select --</option>
            <option value="matric">Matric</option>
            <option value="inter">Intermediate</option>
            <option value="bachelors">Bachelor’s</option>
          </select>
        </>
      )}

      {/* Conditional rendering of forms */}
      {highestQualification && <Matricform />}
      {["inter", "bachelors"].includes(highestQualification) && <Interform />}
      {highestQualification === "bachelors" && <Bachelorsform />}
    </div>
  );
};

export default EducationalForm;
