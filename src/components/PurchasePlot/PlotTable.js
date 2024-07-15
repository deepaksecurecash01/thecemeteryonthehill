"use client";
import React from "react";
import FirstRow from "./rows/FirstRow";
import SecondRow from "./rows/SecondRow";
import ThirdRow from "./rows/ThirdRow";
import FourthRow from "./rows/FourthRow";
import data from "./data.json";
import Image from "next/image";

const PlotTable = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center mb-10">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] 3xl:max-w-[1280px] ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8  my-10 ">
          <div className="w-full lg:w-[80%] order-2 lg:order-1">
            <FirstRow data={data.elements} />
          </div>
          <div className="flex flex-col gap-0 font-roboto text-paragraph text-lg order-1 lg:order-2">
            <div className="flex lg:justify-start lg:items-end lg:h-full order-2 lg:order-1">
              <div className="flex flex-col gap-2">
                <div className="flex justify-start gap-4 items-center">
                  <div
                    className={`  bg-green-500 w-16 h-[6px] rounded-full `}
                  />
                  <h2>Available now</h2>
                </div>

                <div className="flex justify-start gap-4 items-center">
                  <div
                    className={`  bg-orange-500 w-16 h-[6px] rounded-full `}
                  />
                  <h2>Expired, Notifying Period - Register Interest</h2>
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <div className={`  bg-gray-200 w-16 h-[6px] rounded-full `} />
                  <h2>Leased - Unavailable</h2>
                </div>
                <div>
                  <h5>
                    Click on a plot number to select, and scroll down to
                    purchase.
                  </h5>
                </div>
              </div>
            </div>

            <div className="h-[16rem] md:h-[26rem] lg:h-full w-full relative order-1 lg:order-2">
              <div className=" lg:absolute lg:-left-44 lg:-bottom-20 w-full h-full">
                <Image
                  src={`/images/map.png`}
                  fill
                  alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                  loading="lazy"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 my-20">
          <div className="fiixed lg:absolute lg:h-[80%] w-full  lg:w-16 lg:-left-16 xl:-left-36 lg:top-12 flex justify-center items-center lg:items-start">
            <div className="flex lg:flex-col justify-between md:justify-center items-center gap-2 md:gap-12 w-full">
              <div className="lg:[writing-mode:vertical-lr] lg:rotate-180 font-roboto text-center text-sm md:text-base cursor-pointer rounded text-primary border-2 border-primary py-2 px-6 lg:py-4 lg:px-2">
                Ashes Wall 1
              </div>
              <div className="lg:[writing-mode:vertical-lr] lg:rotate-180 font-roboto text-center text-sm md:text-base cursor-pointer rounded text-primary border-2 border-primary py-2 px-6 lg:py-4 lg:px-2">
                Ashes Wall 2
              </div>
              <div className="lg:[writing-mode:vertical-lr] lg:rotate-180 font-roboto text-center text-sm md:text-base cursor-pointer rounded text-primary border-2 border-primary py-2 px-6 lg:py-4 lg:px-2">
                Ashes Wall 3
              </div>
            </div>
          </div>
          <div className="absolute w-full lg:-translate-x-0 lg:left-24 -bottom-28 flex justify-center lg:justify-start items-center">
            <div className="flex justify-between md:justify-center lg:justify-start items-center gap-2 md:gap-12 w-full">
              <div className=" font-roboto cursor-pointer text-center text-sm md:text-base rounded text-primary border-2 border-primary py-2 px-6">
                Ashes Bed 1
              </div>
              <div className=" font-roboto cursor-pointer text-center text-sm md:text-base rounded text-primary border-2 border-primary py-2 px-6">
                Ashes Bed 2
              </div>
              <div className=" font-roboto cursor-pointer text-center text-sm md:text-base rounded text-primary border-2 border-primary py-2 px-6">
                Ashes Bed 3
              </div>
            </div>
          </div>
          <div className=" col-span-1 lg:col-span-2">
            <SecondRow data={data.elements} />
          </div>
          <div className=" col-span-1 lg:col-span-2 lg:mt-16">
            <ThirdRow data={data.elements} />
          </div>
          <div className=" col-span-1 lg:-mt-48">
            <FourthRow data={data.elements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotTable;
