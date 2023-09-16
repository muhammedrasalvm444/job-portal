import React from "react";
import WorkImage from "../Assets/work3.png";

const Intro = () => {
  return (
    <div className="flex items-center mt-16 justify-evenly md:flex-col">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col  sm:flex-row">
          <h1 className="font-bold sm:ml-3 text-9xl sm:text-5xl text-primary">
            SHEY
          </h1>
          <h1 className="font-bold text-9xl sm:text-5xl text-secondery sm:ml-3">
            HIRING
          </h1>
        </div>
        <div className="flex gap-10 mt-5">
          <h1 className="ml-2 text-xl text-gray-600 ">
            Find a reason to progress..
          </h1>
          <button className="px-8 py-3 text-center text-white rounded bg-primary sm:mr-6">
            Get started
          </button>
        </div>
      </div>
      <div>
        <img src={WorkImage} className=" h-[400px] sm:h-[300px]"></img>
      </div>
    </div>
  );
};

export default Intro;
