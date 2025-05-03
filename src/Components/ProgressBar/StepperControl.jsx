import React from "react";

const StepperControl = ({ onNext, onBack }) => {
  return (
    <>
      <div className="flex justify-between">
        {/* Back button */}
        <button
          onClick={onBack}
          className="bg-white text-slate-400 uppercase font-semibold cursor-pointer py-2 px-4 rounded-xl border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Back
        </button>
        {/* Next Button */}
        <button
          onClick={onNext}
          className="bg-green-600 text-white uppercase font-semibold cursor-pointer py-2 px-4 rounded-xl border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default StepperControl;
