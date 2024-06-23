import React from "react";
import Player from "./Player";
const LatestRelease = () => {
  return (
    <div className="h-[100vh]">
      <div className="h-full flex flex-row items-center">
        <div className="w-[50%] flex justify-center">
          <Player />
        </div>
        <div className="w-[50%]">
          <h3 className="text-alt1 px-3 text-6xl">Failures Of Creation</h3>
          <div className="mt-3 mx-3 border-b-2 border-alt1"></div>
          <p className="text-light text-justify mt-3 px-3 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat
          </p>
          <p className="text-light text-justify mt-3 px-3 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
      <div className="mx-3 border-b-2 border-alt1"></div>
    </div>
  );
};

export default LatestRelease;
