import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row top-4 left-[50%] translate-x-[-50%] fixed bg-light bg-opacity-50 rounded-lg px-5 py-3 text-dark font-medium backdrop-blur-md z-50">
        <div className="px-3 cursor-pointer">About</div>
        <div className="px-3 cursor-pointer">Contact</div>
        <div className="px-3 cursor-pointer">Other Services</div>
        <div className="px-3 cursor-pointer">Socials</div>
      </div>
    </div>
  );
};

export default Navbar;
