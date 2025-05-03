import React from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleProfile } from "../redux/Slices/profiledropdown.slice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
      <div className="flex justify-between py-4 px-8">
        <h1 className="text-2xl text-white font-serif">OnBoardX</h1>
        <CgProfile
          onClick={() => dispatch(toggleProfile())}
          className="cursor-pointer text-white"
          size={30}
        />
        </div>
        </div>
    </>
  );
};

export default Navbar;
