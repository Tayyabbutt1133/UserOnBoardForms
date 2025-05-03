import React from "react";
import {
  FiUsers,
  FiBriefcase,
  FiDatabase,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div className="px-8 py-12 md:py-16 max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Start Your Journey With Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Complete your profile to unlock a personalized experience tailored
              just for you.
            </p>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <FiCheckCircle className="text-green-300 w-5 h-5" />
                <span className="text-green-300">Account Created</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <FiUsers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Personal Information</p>
                    <p className="text-sm text-blue-100 opacity-80">
                      Basic details about you
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <FiBriefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Professional Background</p>
                    <p className="text-sm text-blue-100 opacity-80">
                      Your work experience and skills
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <FiDatabase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Preferences</p>
                    <p className="text-sm text-blue-100 opacity-80">
                      Customize your experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link to={'/onboarding'}>
            <button className="bg-white cursor-pointer text-purple-600 font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Start Now <FiArrowRight className="w-4 h-4" />
              </button>
              </Link>
          </div>

          {/* Right Illustration/Image */}
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="grid grid-cols-1 gap-4">
                {/* Mock Form Elements */}
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="h-4 w-24 bg-white/20 rounded mb-3"></div>
                  <div className="h-10 bg-white/10 rounded border border-white/20"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="h-4 w-32 bg-white/20 rounded mb-3"></div>
                  <div className="h-10 bg-white/10 rounded border border-white/20"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="h-4 w-28 bg-white/20 rounded mb-3"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 bg-white/10 rounded border border-white/20"></div>
                    <div className="h-10 bg-white/10 rounded border border-white/20"></div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 px-4">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-300 rounded-full w-1/3"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/70">
                    <span>Step 1 of 3</span>
                    <span>Personal Information</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
