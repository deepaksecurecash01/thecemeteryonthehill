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
        className={`absolute bg-banner-bg bg-no-repeat w-full h-full bg-cover bg-center -z-20`}
        role="img"
        aria-label="Decorative background image"
      />
      <div className="absolute bg-tertiary bg-opacity-60 w-full h-full -z-10" />
      <div className="grid place-items-center gap-6 py-16 px-4 md:px-8">
        <h2
          id="banner-heading"
          className="text-lg sm:text-lg lg:text-xl 6xl:text-2xl font-roboto text-white text-center max-w-3xl tracking-wide"
        >
          {
            "If you have a question, want some more information or would just like to speak to someone from our team, make an enquiry now and we'll be in touch."
          }
        </h2>
        <Link
          href="/contact-us"
          passHref
          className="bg-secondary text-white font-roboto uppercase rounded-md border cursor-pointer border-secondary px-4 py-2 flex justify-center items-center hover:bg-primary hover:border-primary text-sm sm:text-base md:text-lg"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
