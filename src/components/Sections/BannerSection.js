import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <section
      className="relative 6xl:min-h-[35vh] flex justify-center items-center"
      aria-labelledby="banner-heading"
    >
      <div
        className="absolute bg-banner-bg bg-no-repeat w-full h-full bg-cover bg-center -z-20"
        role="img"
        aria-label="Decorative background image"
      />
      <div className="absolute bg-tertiary bg-opacity-60 w-full h-full -z-10" />
      <div className="grid place-items-center gap-6 py-16 px-4 md:px-8">
        <h2
          id="banner-heading"
          className="text-lg sm:text-lg lg:text-xl 6xl:text-2xl text-white text-center max-w-3xl"
        >
          {
            "Don't just take our word for it - see what actual users of our service have to say about their experience."
          }
        </h2>
        <Link href="/contact" passHref
           className="bg-secondary text-white font-roboto uppercase rounded-md border cursor-pointer border-secondary px-4 py-2 flex justify-center items-center hover:bg-primary hover:border-primary text-sm sm:text-base md:text-lg">
            Contact Us <FaArrowRightLong className="text-xl sm:text-2xl ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
