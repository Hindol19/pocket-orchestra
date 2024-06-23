import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestRelease from "@/components/LatestRelease";
import React from "react";

const home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <LatestRelease />
      <Footer />
    </div>
  );
};

export default home;
