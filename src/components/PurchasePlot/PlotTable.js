"use client";
import React from "react";
import FirstRow from "./rows/FirstRow";
import SecondRow from "./rows/SecondRow";
import ThirdRow from "./rows/ThirdRow";
import FourthRow from "./rows/FourthRow";
import data from "./data.json";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setAshesBed, setAshesWall } from "@/redux/slice";
import ReactTooltip from "react-tooltip";
import Tooltip from "./Tooltip";

const StatusIndicator = ({ color, text }) => (
  <div className="flex justify-start gap-4 items-center">
    <div className={`bg-${color} w-16 h-[6px] rounded-full`} />
    <h2>{text}</h2>
  </div>
);

const Legend = () => (
  <div className="flex flex-col gap-2">
    <StatusIndicator color="green-500" text="Available now" />
    <StatusIndicator
      color="orange-500"
      text="Expired, Notifying Period - Register Interest"
    />
    <StatusIndicator color="gray-200" text="Leased - Unavailable" />
    <h5>Click on a plot number to select.</h5>
  </div>
);

const AshesButton = ({ text, onClick, vertical, spanText }) => (
  <div
    className={`lg:[writing-mode:${
      vertical ? "vertical-lr" : "vertical-rl xl:h-16  xl:w-11"
    }] lg:rotate-180 font-roboto bg-orange-500 text-white border border-orange-800 text-center text-sm md:text-base cursor-pointer rounded py-2 px-6 lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary`}
    onClick={onClick}
    title="Click to expand for more details"
  >
    {spanText ? <span className="leading-5">{spanText}</span> : text}
  </div>
);

const AshesWall = () => {
  const dispatch = useDispatch();
  return (
    <div className="fiixed lg:absolute lg:h-[80%] w-full  lg:w-16 lg:-left-16 xl:-left-36 lg:top-12 flex justify-center items-center lg:items-start">
      <div className="flex lg:flex-col justify-between md:justify-center items-center gap-2 md:gap-1 w-full">
        <Tooltip message={"Click to expand for more details"} vertical={true}>
          <div
            className="lg:[writing-mode:vertical-lr] lg:rotate-180 font-roboto bg-orange-500 text-white border border-orange-800 text-center text-sm md:text-base cursor-pointer rounded py-2 px-6 lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary"
            onClick={() => dispatch(setAshesWall("Ashes Wall 1"))}
          >
            Ashes Wall 1
          </div>
        </Tooltip>
        <Tooltip message={"Click to expand for more details"} vertical={true}>
          <div
            className="lg:[writing-mode:vertical-rl] lg:rotate-180 xl:h-16  xl:w-11 flex justify-center items-center font-roboto bg-orange-500 text-white border border-orange-800 text-center text-sm md:text-base cursor-pointer rounded py-2 px-6 lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary"
            onClick={() => dispatch(setAshesWall("Front Fence Bed"))}
          >
            <span className=" leading-5">Front Fence</span>
          </div>
        </Tooltip>

        <Tooltip message={"Click to expand for more details"} vertical={true}>
          <div
            className="lg:[writing-mode:vertical-lr] lg:rotate-180 font-roboto bg-orange-500 text-white border border-orange-800 text-center text-sm md:text-base cursor-pointer rounded py-2 px-6 lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary"
            onClick={() => dispatch(setAshesWall("Ashes Wall 2"))}
          >
            Ashes Wall 2
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

const AshesBed = ({ setAshesBed }) => (
  <div className="absolute w-full lg:-translate-x-0 lg:left-24 -bottom-28 flex justify-center lg:justify-start items-center">
    <div className="flex justify-between md:justify-center lg:justify-start items-center gap-2 md:gap-12 w-full xl:w-auto">
      {["Sandstone Ashes Bed", "New Ashes Bed", "Historic Ashes Bed"].map(
        (bed) => (
          <Tooltip message={"Click to expand for more details"}>
            <div
              key={bed}
              className="font-roboto cursor-pointer md:w-auto bg-green-500 text-white border border-green-800 text-center text-sm md:text-base rounded py-2 px-6 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary"
              onClick={() => setAshesBed(bed)}
              title="Click to expand for more details"
            >
              {bed}
            </div>{" "}
          </Tooltip>
        )
      )}
    </div>
  </div>
);

const PlotTable = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full h-full flex justify-center items-center mb-10">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] 3xl:max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          <div className="w-full lg:w-[80%] order-2 lg:order-1">
            <FirstRow data={data.elements} />
          </div>
          <div className="flex flex-col gap-0 font-roboto text-paragraph text-lg order-1 lg:order-2">
            <div className="flex lg:justify-start lg:items-end lg:h-full order-2 lg:order-1">
              <Legend />
            </div>
            <div className="h-[16rem] md:h-[26rem] lg:h-full w-full relative order-1 lg:order-2">
              <div className="lg:absolute lg:-left-44 lg:-bottom-20 w-full h-full">
                <Image
                  src={`/images/map.png`}
                  fill
                  alt="Hero-Section Image-1 | The Cemetery on the Hill"
                  loading="lazy"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 my-20">
          <AshesWall setAshesWall={(value) => dispatch(setAshesWall(value))} />

          <AshesBed setAshesBed={(value) => dispatch(setAshesBed(value))} />
          <div className="col-span-1 lg:col-span-2">
            <SecondRow data={data.elements} />
          </div>
          <div className="col-span-1 lg:col-span-2 lg:mt-16">
            <ThirdRow data={data.elements} />
          </div>
          <div className="col-span-1 lg:-mt-48">
            <FourthRow data={data.elements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotTable;
