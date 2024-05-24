import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
const Button = ({ text, className, endpoint }) => {
  return (
    <Link
      href={endpoint}
      className={`flex flex-row py-3 px-2 bg-alt1 w-[180px] justify-evenly cursor-pointer ${className}`}
    >
      <div className="text-xl text-dark">{text}</div>
      <div>
        <ArrowForwardIcon className="text-dark" />
      </div>
    </Link>
  );
};

export default Button;
