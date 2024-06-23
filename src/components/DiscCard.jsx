import React from "react";
// import track from "../../public/assets/tracks/failures_of_creation.mp3";
import Image from "next/image";
import foc from "../../public/assets/covers/img1.png";
const DiscCard = ({ className }) => {
  return (
    <div
      className={`bg-alt2 w-[33%] flex flex-col items-center justify-evenly ${className}`}
    >
      <Image src={foc} alt="failures of creation" className="w-[100%]" />
    </div>
  );
};

export default DiscCard;
