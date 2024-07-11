import React, { useState } from "react";
// import track from "../../public/assets/tracks/failures_of_creation.mp3";
import Image from "next/image";
import foc from "../../public/assets/covers/img1.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const DiscCard = ({ className }) => {
  const [isCoverHidden, setIsCoverHidden] = useState("");
  const [isPlayerHidden, setIsPlayerHidden] = useState("hidden");

  const hideCover = () => {
    setIsCoverHidden("opacity-50");
    setIsPlayerHidden("");
  };

  const showCover = () => {
    setIsCoverHidden("");
    setIsPlayerHidden("hidden");
  };

  return (
    <div
      className={`bg-dark w-[31%] flex flex-col items-center justify-evenly ${className}`}
      onMouseEnter={hideCover}
      onMouseLeave={showCover}
    >
      <Image
        src={foc}
        alt="failures of creation"
        className={`w-[100%] ${isCoverHidden}`}
      />
      <div
        className={`absolute w-[27%] h-[36%] flex flex-col items-center justify-evenly ${isPlayerHidden}`}
      >
        <PlayCircleOutlineIcon className="text-[96px]" />
      </div>
    </div>
  );
};

export default DiscCard;
