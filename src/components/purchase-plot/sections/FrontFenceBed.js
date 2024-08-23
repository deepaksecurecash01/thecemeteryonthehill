import React from "react";
import Element from "../Element";

const FrontFenceBed = ({ data, AshesWall }) => {
  return (
    <div className=" bg-white shadow-2xl rounded-lg p-8 flex flex-col gap-6 ">
      <p className="text-primary text-center font-display text-[1.75rem] md:text-[2.75rem]">
        {AshesWall}
      </p>
      <div className="flex lg:flex-col gap-6">
        <div className="w-full  lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 lg:gap-2 2xl:gap-4 ">
          <Element elementData={data[0]} plot_number={1} />
          <Element elementData={data[1]} plot_number={2} />
          <Element elementData={data[2]} plot_number={3} />
        </div>
        <div className="w-full lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 justify-between lg:gap-2 2xl:gap-4 relative ">
          <Element elementData={data[3]} plot_number={4} />
          <div className="flex-grow w-full"></div>
          <Element elementData={data[4]} plot_number={5} />
        </div>
      </div>
    </div>
  );
};

export default FrontFenceBed;
