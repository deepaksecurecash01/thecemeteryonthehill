import React from "react";
import Element from "./Element";

const RoseGarden = ({ data }) => {
  return (
    <>
      <div className="w-full  lg:w-auto  flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4 xl:h-20">
        <Element elementData={data[0]} />
        <Element elementData={data[1]} />
        <Element elementData={data[2]} />
        <Element elementData={data[3]} />
      </div>
      <div className="w-full  lg:w-auto  flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4 xl:h-20">
        <Element elementData={data[20]} />
        <div className=" font-roboto cursor-pointer flex justify-center items-center">
          <span className=" bg-green-500 text-white border border-green-800 text-center text-sm md:text-base  flex justify-center items-center  rounded-full  hover:bg-gray-100 hover:text-primary hover:border hover:border-primary w-16 h-16 lg:w-12 lg:h-12 xl:h-20 xl:w-20">
            Rose <br /> Bush
          </span>
        </div>
        <Element elementData={data[20]} />
        <div className="flex-grow w-full"></div>
      </div>
      <div className="w-full  lg:w-auto  flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4 xl:h-20">
        <Element elementData={data[20]} />
        <Element elementData={data[21]} />
        <div className="flex-grow w-full"></div>
        <div className="flex-grow w-full"></div>
      </div>
    </>
  );
};

export default RoseGarden;
