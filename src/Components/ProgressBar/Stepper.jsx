import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentStep } from "../../redux/Slices/progressFlow.slice";

const Stepper = () => {
  const dispatch = useDispatch();
  const currentstep = useSelector((state) => state.progressflow.currentStep);

  const steps = [
    "Personal Information",
    "Education Information",
    "Professional Information",
    "Job Details",
    "Contact Information",
    "Final Review"
  ];

  return (
    <div className="mx-12 p-4 flex justify-between items-center">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        // Current form is uncompleted/Active if currentstep is equal as we are getting position of form while mapping total forms
        const isActive = stepNumber === currentstep;
        // Current Form Index is completed if currentstep is greater coming from tracked global state
        const isCompleted = stepNumber < currentstep;

        return (
          <div key={index} className="flex w-full items-center">
            <div
              className="relative flex flex-col items-center text-white cursor-pointer"
             onClick={() => {
                  if (isCompleted) {
                    //  this will only update or get step updated which is completed, now it will move forward as next step is not logically completed, else option is backward as required
                  dispatch(updateCurrentStep(stepNumber));
                }
              }}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3 border-2 
                  ${
                    isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "border-white text-white"
                      : "border-gray-200 text-gray-300"
                  }`}
              >
                {stepNumber}
              </div>
              <div className="absolute top-0 text-center mt-16 w-40 text-xs font-medium uppercase">
                {step}
              </div>
            </div>

            {/* Line - Don't show after last step */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-auto border-t-3 transition duration-500 ease-in-out 
                  ${isCompleted ? "border-green-500" : "border-gray-200"}`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
