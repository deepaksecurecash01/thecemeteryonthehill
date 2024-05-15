import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServicesSection = () => {
  return (
    <div className="space-y-8 py-[5rem]">
      <h2 className="text-[2.75rem] font-bold text-center font-trajanpro3 text-burgundy">
        Our Services
      </h2>
      <div className="flex justify-center items-center">
        <div className="bg-services_bg_1 grid grid-rows-2 place-items-center bg-contain bg-center bg-no-repeat h-[54rem] w-[28rem] px-16">
          <div className=" row-span-1"></div>
          <div className=" row-span-1 h-full w-full flex flex-col justify-evenly pb-12 items-center space-y-6">
            <h2 className="text-3xl font-bold text-start font-trajanpro3 text-burgundy">
              Burials
            </h2>
            <p className="text-grey text-base text-center tracking-wide">
              We may offer reserved burial sites, purchase and renewal of Burial
              Interment Rights, all necessities to give your loved one a
              pleasant and memorable burial service. With our future focus being
              predominantly on ashes interments, few burial sites are available.
            </p>
            <button className="bg-gold text-white font-roboto uppercase rounded-md border cursor-pointer border-gold px-4 py-2 flex justify-center items-center hover:bg-burgundy hover:border-burgundy">
              Learn More <FaArrowRightLong className="text-lg ml-2" />
            </button>
          </div>
        </div>
        <div className="bg-services_bg_2 bg-contain bg-center bg-no-repeat h-[54rem] w-[28rem] grid grid-rows-2 place-items-center px-16">
          <div className=" row-span-1"></div>
          <div className=" row-span-1 h-full w-full flex flex-col justify-evenly pb-12 items-center space-y-6">
            <h2 className="text-3xl font-bold text-start font-trajanpro3 text-burgundy">
              Ashes
            </h2>
            <p className="text-grey text-base text-center tracking-wide">
              All ashes interments are offered for one of our renovated and
              beautifully landscaped ashes interment locations. We handle the
              physical interment of ashes and take pride in making this a
              pleasant experience, purchase and renewal of ashes interment
              rights, as well as managing lost interment rights.
            </p>
            <button className="bg-gold text-white font-roboto uppercase rounded-md border cursor-pointer border-gold px-4 py-2 flex justify-center items-center hover:bg-burgundy hover:border-burgundy">
              Learn More <FaArrowRightLong className="text-lg ml-2" />
            </button>
          </div>
        </div>
        <div className="bg-services_bg_3 bg-contain bg-center bg-no-repeat h-[54rem] w-[28rem] grid grid-rows-2 place-items-center  px-16">
          <div className=" row-span-1"></div>
          <div className=" row-span-1 h-full w-full flex flex-col justify-evenly pb-12 items-center space-y-6">
            <h2 className="text-3xl font-bold text-start font-trajanpro3 text-burgundy">
              Pet Interments
            </h2>
            <p className="text-grey text-base text-center tracking-wide">
              At The Cemetery on the Hill, we can assist with all your memorial
              needs. This includes maintenance on existing memorials, as well as
              opportunities to create new memorials for your loved ones. Our
              compassionate team is dedicated to providing support during this
              difficult time.
            </p>
            <button className="bg-gold text-white font-roboto uppercase rounded-md border cursor-pointer border-gold px-4 py-2 flex justify-center items-center hover:bg-burgundy hover:border-burgundy">
              Learn More <FaArrowRightLong className="text-lg ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
