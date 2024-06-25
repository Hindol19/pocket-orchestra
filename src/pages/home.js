import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LatestRelease from "@/components/LatestRelease";
import About from "@/components/About";
import React from "react";
import Discography from "@/components/Discography";
import Contact from "@/components/Contact";

const home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <LatestRelease />
      <Discography />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
