import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestRelease from "@/components/LatestRelease";
import React from "react";
import Discography from "@/components/Discography";

const home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <LatestRelease />
      <Discography />
      <Footer />
    </div>
  );
};

export default home;
