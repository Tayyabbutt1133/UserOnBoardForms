import React from "react";
import Personalform from "../Components/Forms/Personalform";
import Professionalform from "../Components/Forms/Professionalform";
import EducationalForm from "../Components/Forms/Educationalform";
import Contactform from "../Components/Forms/Contactform";
import Jobform from "../Components/Forms/Jobform";
import StepperControl from "../Components/ProgressBar/StepperControl";
import Stepper from "../Components/ProgressBar/Stepper";
import { useSelector, useDispatch } from "react-redux";
import { addNextStep, addBackStep } from "../redux/Slices/progressflow.slice";
import FinalReview from "../Components/Forms/FinalReview";

const Onboarding = () => {
  const dispatch = useDispatch();
  const currentstep = useSelector((state) => state.progressflow.currentStep);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl py-8">
      {/* Stepper (Progress Bar) */}
      <div className="container">
        <Stepper />
      </div>
      <div className="max-w-5xl mx-11 mt-12 space-y-5">
        {/* Conditionally Rendering Forms based on Current step tracking in Global Redux State */}
        {currentstep === 1 && <Personalform />}
        {currentstep === 2 && <EducationalForm />}
        {currentstep === 3 && <Professionalform />}
        {currentstep === 4 && <Jobform />}
        {currentstep === 5 && <Contactform />}
        {currentstep === 6 && <FinalReview/>}
        {/* Navigation Controls Buttons (Back & Next)*/}
        <StepperControl
          currentStep={currentstep}
          onNext={() => dispatch(addNextStep())}
          onBack={() => dispatch(addBackStep())}
        />
      </div>
    </div>
  );
};

export default Onboarding;
