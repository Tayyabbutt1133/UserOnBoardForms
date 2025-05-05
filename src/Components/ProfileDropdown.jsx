import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeProfile } from "../redux/Slices/profiledropdown.slice";
import { FiLogOut, FiUser, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const ProfileDropdown = () => {
  const profileStatus = useSelector((state) => state.profile.profileIsOpen);
  const dispatch = useDispatch();
  const profiledropdownRef = useRef();

  useEffect(() => {
    if (profileStatus) {
      const handleClickOutside = (event) => {
        if (
          profiledropdownRef.current &&
          !profiledropdownRef.current.contains(event.target)
        ) {
          dispatch(closeProfile());
        }
      };

      // Adding event listener into DOM
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [profileStatus, dispatch]);

  if (!profileStatus) return null;

  return (
    <>
      <div ref={profiledropdownRef} className="absolute font-sans w-64 top-12 right-4 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 z-50">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="font-medium text-gray-800 flex items-center">
            <span className="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-2">
              <FiUser size={16} />
            </span>
            Hello, User!
          </p>
        </div>

        {/* Menu Items */}
        <ul className="font-normal py-2 px-2">
          <li className="hover:bg-sky-50 rounded-md transition-colors">
            <Link
              to={"/onboarding"}
              className="flex items-center px-3 py-2 text-gray-700"
            >
              <FiUser className="mr-2 text-sky-500" size={16} />
              OnBoarding
            </Link>
          </li>
        </ul>

        {/* Footer with Logout */}
        <div className="px-2 py-2 border-t border-gray-100">
          <button
            onClick={() => dispatch(closeProfile())}
            className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-red-50 rounded-md transition-colors"
          >
            <FiLogOut className="mr-2 text-red-500" size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
