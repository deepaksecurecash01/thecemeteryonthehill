"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";
import SuccessMsg from "../ExpiredLeases/SuccessMsg";


const Receipt = ({elementData}) => {
  
  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className=" md:max-h-[1024px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center py-28 md:py-24 lg:py-20">
    

        <div
          className={`w-[70%]  md:w-auto pt-6 sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10 `}
        >
          {elementData?.map(({ Plot_number, Status, short_plot_number }) => (
            <div
              key={name}
              className="relative w-full mb-5 xl:mb-5 flex flex-col justify-center h-full items-center gap-6"
            >
              <p className="text-primary text-center font-display text-4xl">
                {Plot_number}
              </p>
              <p className="text-primary text-center font-display text-4xl">
                {Status}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Receipt;
