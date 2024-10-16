import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSection = async () => {
  return (
    <section
      className="relative 6xl:min-h-[35vh] flex justify-center items-center"
      aria-labelledby="banner-heading"
    >
      <div
        className={`absolute bg-banner-bg-2 bg-no-repeat w-full h-full bg-cover bg-center -z-20`}
        role="img"
        aria-label="Decorative background image"
      />
      <div className="absolute bg-tertiary bg-opacity-60 w-full h-full -z-10" />
      <div className="grid place-items-center gap-6 py-16 px-4 md:px-8">
        <div
          id="banner-heading"
          className=" w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col gap-4"
        >
          <h1 className="text-[1.75rem] text-start 2xl:text-center md:text-[2rem] font-bold font-display text-white">
            Contact Us to Learn More
          </h1>
          <p className="text-lg sm:text-lg lg:text-xl font-roboto text-white text-center tracking-wide">
            {`Our compassionate team is here to guide you with care, respect, and understanding. Whether you need assistance with planning, have questions about our services, or simply want to explore your options, we are here to listen and provide the support you need.`}
          </p>
        </div>
        <Link
          href="/contact-us"
          passHref
          className="bg-secondary text-white font-roboto uppercase rounded-md border cursor-pointer border-secondary px-4 py-2 flex justify-center items-center hover:bg-primary hover:border-primary text-sm sm:text-base md:text-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;