import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-4">
        <h2 className="text-4xl  mt-10">Let's work together</h2>
        <div className="mt-3 w-[120px] border-b-2 border-light"></div>
      </div>
      <div className="flex flex-row items-center justify-center my-[80px]">
        <div className="w-[500px] h-[400px] bg-gradient-to-r from-violet-600 to-[#4f46e55e] bg-opacity-[20%] mr-[-100px] flex flex-col justify-center items-center z-50 backdrop-blur-sm">
          <div className="text-2xl">Email me here 😁</div>
          <Link
            href="mailto:musicmakerr55@gmail.com"
            className="w-[200px] bg-alt1 py-3 my-5 flex justify-center items-center rounded-md "
          >
            <EmailIcon className="text-dark" />
          </Link>
        </div>
        <div className="w-[800px] h-[500px] border-2 border-alt1"></div>
      </div>
    </div>
  );
};

export default Contact;
