"use client";

import React from "react";
import FirstRow from "./sections/FirstRow";
import SecondRow from "./sections/SecondRow";
import ThirdRow from "./sections/ThirdRow";
import FourthRow from "./sections/FourthRow";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setAshesBed, setAshesWall } from "@/redux/slice";
import Tooltip from "../ui/Tooltip";
import StatusIndicator from "../ui/StatusIndicator";
import CemeteryData from "@/json/CemeteryData.json"; // Import the JSON file directly

const Legend = () => (
  <div className="flex flex-col gap-4">
    <StatusIndicator
      color="green-500"
      text="Green (Available Now):"
      description=" These plots are currently available for purchase. Click on an available plot to proceed with your selection."
    />
    <StatusIndicator
      color="orange-500"
      text="Orange (Expired, Notifying Period - Register Interest):"
      description="These plots are in the notifying period after the expiration of their lease. You can register your interest, and we will notify you if the plot becomes available."
    />
    <StatusIndicator
      color="gray-200"
      text="Grey (Leased - Unavailable):"
      description="These plots are currently leased and unavailable."
    />
  </div>
);

const AshesWall = () => {
  const dispatch = useDispatch();

  const statusColors = {
    available: "bg-green-500 text-white border border-green-800",
    expired: "bg-orange-500 text-white border border-orange-800",
    assigned: "bg-gray-200 text-primary border border-gray-800",
  };

  const getBedColorClass = (statuses) => {
    if (statuses.some((status) => status === "available")) {
      return statusColors.available;
    }
    if (statuses.some((status) => status === "expired")) {
      return statusColors.expired;
    }
    return statusColors.assigned;
  };

  const getStatuses = (section) =>
    CemeteryData.thecemeteryonthehill?.AshesSections?.[section]?.map(
      (section) => section.Status
    ) || [];

  const bedColorClassAshesWall1 = getBedColorClass(getStatuses("AshesWall1"));
  const bedColorClassFrontFenceBed = getBedColorClass(
    getStatuses("FrontFence")
  );
  const bedColorClassAshesWall2 = getBedColorClass(getStatuses("AshesWall2"));

  return (
    <div className=" lg:absolute lg:h-[80%] w-full lg:w-16 lg:-left-16 xl:-left-32 lg:top-12 flex justify-center items-center lg:items-start">
      <div className="flex lg:flex-col justify-between md:justify-center items-center gap-2 md:gap-1">
        <Tooltip message={"Click to expand for more details"} vertical={true}>
          <div
            className={`lg:[writing-mode:vertical-lr] lg:rotate-180 h-12 w-28 lg:h-auto lg:w-auto font-roboto ${bedColorClassAshesWall1} text-center text-primary border border-primary text-sm md:text-base cursor-pointer rounded py-2 flex justify-center items-center lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary`}
            onClick={() => dispatch(setAshesWall("Ashes Wall 1"))}
          >
            Ashes Wall 1
          </div>
        </Tooltip>
        <Tooltip message={"Click to expand for more details"} vertical={true}>
          <div
            className={`lg:[writing-mode:vertical-rl] lg:rotate-180 lg:h-16 w-16 h-12 lg:w-11 flex justify-center items-center text-primary border border-primary font-roboto ${bedColorClassFrontFenceBed} text-center text-sm md:text-base cursor-pointer rounded py-2  lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary`}
            onClick={() => dispatch(setAshesWall("Front Fence Bed"))}
          >
            <span className="leading-5">Front Fence</span>
          </div>
        </Tooltip>
        <Tooltip message={"Click to expand for more details"} vertical={true}>
          <div
            className={`lg:[writing-mode:vertical-lr] lg:rotate-180 h-12 w-28 lg:h-auto lg:w-auto font-roboto ${bedColorClassAshesWall2} text-center text-primary border border-primary text-sm md:text-base cursor-pointer rounded py-2 flex justify-center items-center lg:py-4 lg:px-2 hover:bg-gray-100 hover:text-primary hover:border hover:border-primary`}
            onClick={() => dispatch(setAshesWall("Ashes Wall 2"))}
          >
            Ashes Wall 2
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

const AshesBed = ({ setAshesBed }) => {
  const statusColors = {
    available: "bg-green-500 text-white border border-green-800",
    expired: "bg-orange-500 text-white border border-orange-800",
    assigned: "bg-gray-200 text-primary border border-gray-800",
  };

  const getBedColorClass = (statuses) => {
    if (statuses.some((status) => status === "available")) {
      return statusColors.available;
    }
    if (statuses.some((status) => status === "expired")) {
      return statusColors.expired;
    }
    return statusColors.assigned;
  };

  const getStatuses = (section) =>
    CemeteryData.thecemeteryonthehill?.AshesSections?.[section]?.map(
      (section) => section.Status
    ) || [];

  const bedColorClassSandstone = getBedColorClass(
    getStatuses("SandStoneAshesBed")
  );
  const bedColorClassNewAshes = getBedColorClass(getStatuses("NewAshesBed"));
  const bedColorClassHistoric = getBedColorClass(
    getStatuses("HistoricAshesBed")
  );

  return (
    <div className="absolute w-full lg:-translate-x-0 lg:left-24 -bottom-28  flex justify-center lg:justify-start items-center">
      <div className="flex justify-between md:justify-center lg:justify-start items-center gap-2 md:gap-12 w-full xl:w-auto">
        {[
          { name: "Sandstone Ashes Bed", colorClass: bedColorClassSandstone },
          { name: "New Ashes Bed", colorClass: bedColorClassNewAshes },
          { name: "Historic Ashes Bed", colorClass: bedColorClassHistoric },
        ].map((bed, i) => (
          <Tooltip message={"Click to expand for more details"} key={i}>
            <div
              className={`font-roboto cursor-pointer md:w-auto ${bed.colorClass} text-center h-12 lg:h-auto xxs:px-0 px-2 text-primary border border-primary text-sm md:text-base rounded py-2 flex justify-center items-center hover:bg-gray-100 hover:text-primary hover:border hover:border-primary`}
              onClick={() => setAshesBed(bed.name)}
            >
              {bed.name}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

const PlotTable = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full h-full flex justify-center items-center mb-10">
      <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] 3xl:max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          <div className="w-full lg:w-[80%] order-2 lg:order-1">
            <FirstRow data={CemeteryData.thecemeteryonthehill.NormalPlots} />
          </div>
          <div className="flex flex-col gap-0 font-roboto text-lg text-paragraph order-1 lg:order-2">
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
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 my-20">
          <AshesWall />
          <AshesBed setAshesBed={(value) => dispatch(setAshesBed(value))} />
          <div className="col-span-1 lg:col-span-2">
            <SecondRow
              data={CemeteryData.thecemeteryonthehill.NormalPlots}
              CemeteryData={CemeteryData.thecemeteryonthehill.AshesSections}
            />
          </div>
          <div className="col-span-1 lg:col-span-2 lg:mt-16">
            <ThirdRow data={CemeteryData.thecemeteryonthehill.NormalPlots} />
          </div>
          <div className="col-span-1 lg:-mt-48">
            <FourthRow data={CemeteryData.thecemeteryonthehill.NormalPlots} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotTable;
