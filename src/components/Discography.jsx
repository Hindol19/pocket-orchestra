import React from "react";
import DiscCard from "./DiscCard";

const Discography = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-4">
        <h2 className="text-4xl  mt-10">Discography</h2>
        <div className="mt-3 w-[100px] border-b-2 border-light"></div>
      </div>
      <div className="my-[100px] flex justify-center flex-wrap">
        <DiscCard className="m-1" />
        <DiscCard className="m-1" />
        <DiscCard className="m-1" />
        <DiscCard className="m-1" />
        <DiscCard className="m-1" />
        <DiscCard className="m-1" />
      </div>

      <div className=" mt-[80px] w-full border-b-2 border-light mx-auto"></div>
    </div>
  );
};

export default Discography;
