import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div className="relative">
      <div className="absolute bg-banner_bg bg-no-repeat w-full h-full bg-cover bg-center -z-20" />
      <div className="absolute bg-black bg-opacity-60 w-full h-full -z-10" />
      <div className="grid place-items-center gap-6 py-20 px-4 md:px-8">
        <p className="text-lg sm:text-lg md:text-xl text-white text-center max-w-3xl">
          {
            "Don't just take our word for it - see what actual users of our service have to say about their experience."
          }
        </p>
        <button className="bg-gold text-white font-roboto uppercase rounded-md border cursor-pointer border-gold px-4 py-2 flex justify-center items-center hover:bg-burgundy hover:border-burgundy text-sm sm:text-base md:text-lg">
          Contact Us <FaArrowRightLong className="text-xl sm:text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
