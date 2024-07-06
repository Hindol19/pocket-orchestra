import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import Image from "next/image";
import fiv from "../../public/images/website/fiv3.jpg";
import prof from "../../public/images/website/prof.jpg";
import logo from "../../public/images/website/logo.jpg";

const Badge = () => {
  return (
    <div className="w-[300px] h-[400px] z-50 bg-[#e8e8e8c5] backdrop-blur-sm relative rounded-md py-2 flex items-center flex-col">
      <div className="h-[180px] w-[180px] overflow-hidden rounded-[100%] mx-auto">
        <Image
          src={prof}
          alt="me"
          className="w-full h-auto relative mx-auto "
        />
      </div>
      <Image
        src={logo}
        alt="logo"
        className="w-[120px] h-auto relative rounded-md mt-[-30px]"
      />
      <h2 className="text-dark text-xl font-semibold mt-2">Hindol Banerjee</h2>
      <h3 className="text-dark text-md font">Music & Audio</h3>
      <div className="flex flex-row ">
        <div>⭐⭐⭐⭐⭐</div>
        <div className="text-dark font-semibold mx-1">4.9</div>
      </div>
      <button className="bg-[#003b01] py-2 px-4 rounded-md my-5 hover:bg-[#319433]">
        Check out my gigs
      </button>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-4">
        <h2 className="text-4xl  mt-10">Let's work together</h2>
        <div className="mt-3 w-[120px] border-b-2 border-light"></div>
      </div>
      <div className="flex flex-row items-center justify-center my-[80px]">
        <div className="w-[500px] h-[400px] bg-gradient-to-r from-violet-600 to-[#4f46e55e] bg-opacity-[20%] mr-[-120px] flex flex-col justify-center items-center z-50 backdrop-blur-sm rounded-md ">
          <div className="text-2xl">Email me here 😁</div>
          <Link
            href="mailto:musicmakerr55@gmail.com"
            className="w-[200px] bg-alt1 py-3 my-5 flex justify-center items-center "
          >
            <EmailIcon className="text-dark" />
          </Link>
        </div>
        <div className="w-[800px] h-[500px] overflow-hidden rounded-md flex items-center justify-center">
          <Image
            src={fiv}
            alt="failures of creation"
            className="w-[800px] h-[500px]  absolute"
          />

          <Badge />
        </div>
      </div>
    </div>
  );
};

export default Contact;
