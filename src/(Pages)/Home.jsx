import React from "react";
import Navbar from "../Components/Navbar";
import ProfileDropdown from "../Components/ProfileDropdown";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
        <div className="">
          <Navbar />
          <ProfileDropdown />
        </div>
        <Hero />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
