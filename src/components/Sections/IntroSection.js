import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const IntroSection = () => {
  return (
    <div className="relative min-h-screen grid grid-cols-7 place-items-center overflow-hidden w-full">
      <div className="absolute bg-elipse1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      <div className="absolute bg-elipse2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />

      <div className="col-span-3 py-20 h-full w-full pl-12 space-y-6 flex flex-col justify-center items-start">
        <h2 className="text-[4rem] font-bold text-start font-trajanpro3 text-burgundy">
          The Historic Cemetery on the Hill
        </h2>
        <p className="text-grey text-lg text-start tracking-wide">
          Perched on top of a hill overlooking the Onkaparinga River and the
          beautiful township of Old Noarlunga is The Church and Cemetery on the
          Hill. Formerly the Church and Cemetery of St Philip and St James,
          which was established in 1850 shortly after the first European
          settlement in the area around the 1840s. <br /> On the 25th of July
          1850, the land was conveyed in trust for erection and maintenance of a
          Church of England, with Richard Bosworth, James Clark, and Philip
          Hollins appointed as trustees. The Church and Cemetery’s former name,
          St Philip & St James, was in honour of Mssrs Clark and Hollins.
        </p>
        <button className="bg-gold text-white font-roboto uppercase rounded-md border cursor-pointer border-gold px-6 py-3 text-xl flex justify-center items-center hover:bg-burgundy hover:border-burgundy">
          Get in touch <FaArrowRightLong className="text-lg ml-2" />
        </button>
        <div className="flex justify-center items-center gap-4">
          <FaFacebook className="text-2xl text-grey hover:text-gold cursor-pointer" />
          <FaInstagram className="text-2xl text-grey hover:text-gold cursor-pointer" />
          <FaTiktok className="text-2xl text-grey hover:text-gold cursor-pointer" />
        </div>
      </div>
      <div className="relative col-span-4 h-full w-full flex justify-end items-end">
        <div className="absolute bg-intro_overly bg-no-repeat object-right bg-cover w-full h-full -z-20 " />

        <Image
          src="/images/intro-statue.png"
          width={900}
          height={900}
          alt="Picture of the author"
          className="rounded-t-2xl object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default IntroSection;
