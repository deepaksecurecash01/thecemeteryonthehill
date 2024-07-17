import React from "react";
import Element from "../Element";

const FrontFenceBed = ({ data, AshesWall }) => {
  return (
    <div className=" bg-white shadow-2xl rounded-lg p-8 flex flex-col gap-6 ">
      <p className="text-primary text-center font-display text-4xl">
        {AshesWall}
      </p>
      <div className="flex lg:flex-col gap-6">
        <div className="w-full  lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 lg:gap-2 2xl:gap-4 ">
          <Element elementData={data[0]} />
          <Element elementData={data[1]} />
          <Element elementData={data[2]} />
        </div>
        <div className="w-full lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 justify-between lg:gap-2 2xl:gap-4 relative ">
          <Element elementData={data[10]} />
          <div className="flex-grow w-full"></div>

          <Element elementData={data[20]} />
        </div>
      </div>
    </div>
  );
};

export default FrontFenceBed;
