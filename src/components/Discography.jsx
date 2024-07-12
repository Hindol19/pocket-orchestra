import React from "react";
import DiscCard from "./DiscCard";

const tracks = [
  {
    cover: "/assets/covers/failures_of_creation.png",
    track: "/assets/tracks/failures_of_creation.mp3",
  },
  {
    cover: "/assets/covers/broken_lamps.jpg",
    track: "/assets/tracks/broken_lamps.mp3",
  },
  {
    cover: "/assets/covers/itenis_theme.jpg",
    track: "/assets/tracks/itenis_theme.mp3",
  },
  {
    cover: "/assets/covers/nightmare_experiment.jpg",
    track: "/assets/tracks/nightmare_experiment.mp3",
  },
];

const Discography = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-4">
        <h2 className="text-4xl  mt-10">Discography</h2>
        <div className="mt-3 w-[100px] border-b-2 border-light"></div>
      </div>
      <div className="my-[100px] flex justify-center flex-wrap">
        {tracks.map((item) => (
          <DiscCard />
        ))}
      </div>

      <div className=" mt-[80px] w-full border-b-2 border-light mx-auto"></div>
    </div>
  );
};

export default Discography;
