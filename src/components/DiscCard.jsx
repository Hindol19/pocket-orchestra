import React, { useState, useEffect, useRef } from "react";
// import track from "../../public/assets/tracks/failures_of_creation.mp3";
import Image from "next/image";

import foc from "../../public/assets/covers/img1.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

const Slider = ({ percentage = 0, onChange }) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className="relative w-full flex justify-center">
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range w-[75%]"
        onChange={onChange}
      />
    </div>
  );
};

const DiscCard = ({ className }) => {
  const [isCoverHidden, setIsCoverHidden] = useState("");
  const [isPlayerHidden, setIsPlayerHidden] = useState("hidden");
  const [isPlayed, setIsPlayed] = useState(false);
  const [audio, setAudio] = useState();
  const [percentage, setPercentage] = useState(0);

  const handleSlider = (e) => {
    // const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const hideCover = () => {
    setIsCoverHidden("opacity-50");
    setIsPlayerHidden("");
  };

  const showCover = () => {
    setIsCoverHidden("");
    setIsPlayerHidden("hidden");
  };

  useEffect(() => {
    setAudio(new Audio("/assets/tracks/failures_of_creation.mp3"));
  }, []);

  const playTrack = () => {
    if (isPlayed == false) {
      setIsPlayed(true);
      audio.play();
    } else {
      setIsPlayed(false);
      audio.pause();
    }
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
        {!isPlayed ? (
          <PlayCircleOutlineIcon onClick={playTrack} className="text-[96px]" />
        ) : (
          <PauseCircleOutlineIcon onClick={playTrack} className="text-[96px]" />
        )}
        <Slider percentage={percentage} onChange={handleSlider} />
      </div>
    </div>
  );
};

export default DiscCard;
