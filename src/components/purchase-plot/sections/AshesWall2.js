import React from "react";
import Element from "../Element";

const AshesWall2 = ({ data, AshesWall }) => {
  return (
    <div className=" bg-white shadow-2xl rounded-lg p-8 flex flex-col gap-6 w-[90vw]  md:w-[60vw] lg:w-[90vw] xl:w-[80%]">
      <p className="text-primary text-center font-display text-[1.75rem] md:text-[2.75rem]">
        {AshesWall}
      </p>
      <div className="flex lg:flex-col gap-6">
        <div className="w-full  lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 lg:gap-2 2xl:gap-4 ">
          <Element elementData={data[0]} plot_number={1} />
          <Element elementData={data[1]} plot_number={2} />
          <Element elementData={data[2]} plot_number={3} />
          <Element elementData={data[3]} plot_number={4} />
          <Element elementData={data[4]} plot_number={5} />
          <Element elementData={data[5]} plot_number={6} />
          <Element elementData={data[6]} plot_number={7} />
          <Element elementData={data[7]} plot_number={8} />
          <Element elementData={data[8]} plot_number={9} />
          <Element elementData={data[9]} plot_number={10} />
          <Element elementData={data[10]} plot_number={11} />
          <Element elementData={data[11]} plot_number={12} />
          <Element elementData={data[12]} plot_number={13} />
        </div>
        <div className="w-full lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 justify-between lg:gap-2 2xl:gap-4 relative ">
          <div className="[writing-mode:vertical-lr] lg:[writing-mode:horizontal-tb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 lg:rotate-0 font-display text-secondary text-[1.75rem] md:text-[2.75rem] text-center rounded py-4 px-2">
            Garden Bed
          </div>
          <Element elementData={data[27]} plot_number={28} />
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <div className="flex-grow w-full"></div>
          <Element elementData={data[13]} plot_number={14} />
        </div>
        <div className="w-full  lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 lg:gap-2 2xl:gap-4 ">
          <Element elementData={data[26]} plot_number={27} />
          <Element elementData={data[25]} plot_number={26} />
          <Element elementData={data[24]} plot_number={25} />
          <Element elementData={data[23]} plot_number={24} />
          <Element elementData={data[22]} plot_number={23} />
          <Element elementData={data[21]} plot_number={22} />
          <Element elementData={data[20]} plot_number={21} />
          <Element elementData={data[19]} plot_number={20} />
          <Element elementData={data[18]} plot_number={19} />
          <Element elementData={data[17]} plot_number={18} />
          <Element elementData={data[16]} plot_number={17} />
          <Element elementData={data[15]} plot_number={16} />
          <Element elementData={data[14]} plot_number={15} />
        </div>
      </div>
    </div>
  );
};

export default AshesWall2;
