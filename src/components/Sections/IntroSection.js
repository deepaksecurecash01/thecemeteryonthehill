import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const IntroSection = () => {
  return (
    <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-7 place-items-center overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-elipse1 bg-cover bg-no-repeat -z-10" />
      <div className="absolute bottom-0 right-0 h-full w-full bg-elipse2 bg-cover bg-no-repeat -z-10" />

      <div className="relative col-span-1 lg:col-span-4 h-72 md:h-[30rem] lg:h-full w-full flex justify-end items-end order-1 lg:order-2">
        <div className="absolute w-full h-full bg-intro_overly bg-cover bg-no-repeat object-right -z-20" />
        <Image
          src="/images/intro-statue.png"
          layout="fill"
          objectFit="contain"
          alt="Picture of the author"
          className="object-bottom rounded-t-2xl"
        />
      </div>

      <div className="col-span-1 lg:col-span-3 h-full w-full py-6 px-8 lg:px-12 md:pr-4 sm:px-12 space-y-6 md:flex md:flex-col justify-center items-start order-2 lg:order-1">
        <h2 className="text-[1.75rem] md:text-[4rem] font-bold text-start text-burgundy font-trajanpro3">
          The Historic Cemetery on the Hill
        </h2>
        <p className="text-base md:text-lg lg:text-lg text-start tracking-wide text-gray-700">
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
        <Link href="/contact" passHref>
          <button className="flex items-center justify-center px-4 py-2 lg:px-6 lg:py-3 text-white bg-gold border border-gold rounded-md cursor-pointer font-roboto uppercase lg:text-xl hover:bg-burgundy hover:border-burgundy">
            Get in touch <FaArrowRightLong className="ml-2 text-lg" />
          </button>
        </Link>

        <div className="flex items-center justify-start gap-4 mt-4 md:mt-0">
          <FaFacebook className="text-xl lg:text-2xl text-gray-700 cursor-pointer hover:text-gold" />
          <FaInstagram className="text-xl lg:text-2xl text-gray-700 cursor-pointer hover:text-gold" />
          <FaTiktok className="text-xl lg:text-2xl text-gray-700 cursor-pointer hover:text-gold" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
