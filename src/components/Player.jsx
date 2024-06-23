import React from "react";
// import track from "../../public/assets/tracks/failures_of_creation.mp3";
import Image from "next/image";
import foc from "../../public/assets/covers/img1.png";
const Player = () => {
  return (
    <div className="bg-alt2 h-[470px] w-[400px] flex flex-col items-center justify-evenly">
      <Image src={foc} alt="failures of creation" className="w-[90%]" />
      <audio controls>
        <source
          src="/assets/tracks/failures_of_creation.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
