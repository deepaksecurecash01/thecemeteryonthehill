import React from "react";
import Element from "../Element";

const RoseGarden = ({ data }) => {
  return (
    <>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4 xl:h-20">
        <Element elementData={data.RoseGardenBed[0]} plot_number={1} />
        <Element elementData={data.RoseGardenBed[1]} plot_number={2} />
        <Element elementData={data.RoseGardenBed[2]} plot_number={3} />
        <Element elementData={data.RoseGardenBed[3]} plot_number={4} />
      </div>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4 xl:h-20">
        <Element elementData={data.RoseGardenBed[4]} plot_number={5} />
        <div className="font-roboto cursor-pointer flex justify-center items-center">
          <span className="text-secondary font-display border border-secondary text-center text-sm md:text-base flex justify-center items-center rounded-full hover:bg-gray-100 hover:text-primary hover:border hover:border-primary w-16 h-16 lg:w-12 lg:h-12 xl:h-20 xl:w-20">
            Rose <br /> Bush
          </span>
        </div>
        <Element elementData={data.RoseGardenBed[5]} plot_number={6} />
        <div className="flex-grow w-full"></div>
      </div>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4 xl:h-20">
        <Element elementData={data.RoseGardenBed[6]} plot_number={7} />
        <Element elementData={data.RoseGardenBed[7]} plot_number={8} />
        <div className="flex-grow w-full"></div>
        <div className="flex-grow w-full"></div>
      </div>
    </>
  );
};

export default RoseGarden;
