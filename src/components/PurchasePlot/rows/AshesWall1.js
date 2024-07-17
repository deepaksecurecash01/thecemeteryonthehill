import React from 'react'
import Element from '../Element';

const AshesWall1 = ({ data, AshesWall }) => {
  return (
    <div className=" bg-white shadow-2xl rounded-lg p-8 h-full flex flex-col gap-6 w-[90vw]  md:w-[60vw] lg:w-[90vw] xl:w-[80%]">
      <p className="text-primary text-center font-display text-4xl">
        {AshesWall}
      </p>
      <div className="flex lg:flex-col gap-6">
        <div className="w-full  lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 lg:gap-2 2xl:gap-4 ">
          <Element elementData={data[0]} />
          <Element elementData={data[1]} />
          <Element elementData={data[2]} />
          <Element elementData={data[3]} />
          <Element elementData={data[4]} />
          <Element elementData={data[5]} />
          <Element elementData={data[6]} />
          <Element elementData={data[7]} />
          <Element elementData={data[8]} />
          <Element elementData={data[9]} />
          <Element elementData={data[10]} />
          <Element elementData={data[11]} />
        </div>
        <div className="w-full lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 justify-between lg:gap-2 2xl:gap-4 relative ">
          <div className="[writing-mode:vertical-lr] lg:[writing-mode:horizontal-tb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 lg:rotate-0 font-display text-secondary text-4xl text-center rounded py-4 px-2">
            Garden Bed
          </div>
          <Element elementData={data[10]} />
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
          <Element elementData={data[20]} />
        </div>
        <div className="w-full  lg:w-full  flex flex-col xl:h-20 lg:flex-row gap-4 lg:gap-2 2xl:gap-4 ">
          <Element elementData={data[20]} />
          <Element elementData={data[21]} />
          <Element elementData={data[22]} />
          <Element elementData={data[23]} />
          <Element elementData={data[20]} />
          <Element elementData={data[25]} />
          <Element elementData={data[26]} />
          <Element elementData={data[27]} />
          <Element elementData={data[28]} />
          <Element elementData={data[29]} />
          <Element elementData={data[30]} />
          <Element elementData={data[29]} />
        </div>
      </div>
    </div>
  );
};

export default AshesWall1