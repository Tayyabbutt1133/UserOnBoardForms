import React from "react";
import { useNavigate } from "react-router-dom";

const StepperControl = ({ onNext, onBack, currentStep }) => {
  const navigate = useNavigate();

  const FinalSubmissionHandler = () => {
    const collectedData = {
      personal: JSON.parse(localStorage.getItem("personalInfo_FormData")),
      education: {
        matric: JSON.parse(localStorage.getItem("matricFormData")),
        inter: JSON.parse(localStorage.getItem("interFormData")),
        bachelor: JSON.parse(localStorage.getItem("bachelorsFormData")),
      },
      professional: JSON.parse(localStorage.getItem("ProfessionalForm")),
      job: JSON.parse(localStorage.getItem("Jobformdata")),
      contact: JSON.parse(localStorage.getItem("contactform")),
    };

    // Validate that we have at least some data
    const hasData = Object.values(collectedData).some(
      (value) =>
        value !== null &&
        (typeof value !== "object" ||
          (Object.keys(value).length > 0 &&
            Object.values(value).some((v) => v !== null)))
    );

    if (!hasData) {
      alert("❌ Complete All Forms before final Submission");
      return;
    }

    // Save the data to localStorage
    localStorage.setItem("Onboarding_User_Data", JSON.stringify(collectedData));

    // Debug: Log what's being saved
    console.log("Saving final data:", collectedData);

    alert("🎉 Final data saved successfully!");
    localStorage.clear()
    navigate("/");
  };

  return (
    <div className="flex justify-between">
      {/* Back button */}
      {currentStep >= 2 && (
        <button
          onClick={onBack}
          className="bg-white text-slate-400 uppercase font-semibold cursor-pointer py-2 px-4 rounded-xl border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Back
        </button>
      )}

      {/* Next or Final Submission button */}
      {currentStep > 5 ? (
        <button
          onClick={FinalSubmissionHandler}
          className="bg-green-600 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-xl border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Final Submission
        </button>
      ) : (
        <button
          onClick={onNext}
          className="bg-green-600 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-xl border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default StepperControl;
