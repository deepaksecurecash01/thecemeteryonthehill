import React from "react";
import Element from "../Element";

const Historic = ({ data }) => {
  return (
    <>
      <div className="w-full lg:w-full flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4">
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
      </div>
      <div className="w-full lg:w-full flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4">
        <Element elementData={data[10]} plot_number={11} />
        <Element elementData={data[11]} plot_number={12} />
        <Element elementData={data[12]} plot_number={13} />
        <Element elementData={data[13]} plot_number={14} />
        <Element elementData={data[14]} plot_number={15} />
        <Element elementData={data[15]} plot_number={16} />
        <Element elementData={data[16]} plot_number={17} />
        <Element elementData={data[17]} plot_number={18} />
        <Element elementData={data[18]} plot_number={19} />
        <Element elementData={data[19]} plot_number={20} />
      </div>
      <div className="w-full lg:w-full flex flex-col lg:flex-row gap-4 lg:gap-2 2xl:gap-4">
        <Element elementData={data[20]} plot_number={21} />
        <Element elementData={data[21]} plot_number={22} />
        <Element elementData={data[22]} plot_number={23} />
        <Element elementData={data[23]} plot_number={24} />
        <Element elementData={data[24]} plot_number={25} />
        <Element elementData={data[25]} plot_number={26} />
        <Element elementData={data[26]} plot_number={27} />
        <Element elementData={data[27]} plot_number={28} />
        <Element elementData={data[28]} plot_number={29} />
        <Element elementData={data[29]} plot_number={30} />
      </div>
    </>
  );
};

export default Historic;
