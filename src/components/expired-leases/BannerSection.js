import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSection = async () => {
  return (
    <section
      className="relative 6xl:min-h-[35vh] flex justify-center items-center"
      aria-labelledby="banner-heading"
    >
      <div className="grid place-items-center gap-6 py-16 px-4 md:px-8">
        <div
          id="banner-heading"
          className=" w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col justify-center items-center gap-4"
        >
          <h1 className="text-[1.75rem] 2xl:text-center md:text-[2rem] font-bold font-display text-primary">
            HAVE QUESTIONS?
          </h1>
          <p className="text-lg sm:text-lg lg:text-xl font-roboto text-paragraph text-center tracking-wide">
            {`We understand that managing interment rights can raise questions, and we’re here to provide guidance and support. If you need assistance with renewing or releasing an interment right, or if you have any concerns or clarifications regarding the process, please don’t hesitate to reach out to us.`}
          </p>
        </div>
        <Link
          href="/contact-us"
          passHref
          className="bg-secondary text-white font-roboto uppercase rounded-md border cursor-pointer border-secondary px-4 py-2 flex justify-center items-center hover:bg-primary hover:border-primary text-sm sm:text-base md:text-lg"
        >
          Get in touch <FaArrowRightLong className="ml-2 text-lg" />
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;
