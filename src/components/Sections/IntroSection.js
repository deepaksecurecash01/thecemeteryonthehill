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
    <div className="relative h-full lg:min-h-screen grid grid-cols-1 lg:grid-cols-7 place-items-center lg:overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-ellipse-1 bg-cover bg-no-repeat -z-10" />
      <div className="absolute bottom-0 right-0 h-full w-full bg-ellipse-2 bg-cover bg-no-repeat -z-10" />

      <div className="relative col-span-1 h-[30vh]  lg:col-span-4 lg:h-full w-full flex justify-end items-end order-1 lg:order-2">
        <div className="absolute w-full h-full bg-intro-overlay bg-cover bg-no-repeat object-right -z-20" />
        <Image
          src="/images/intro-statue.png"
          layout="fill"
          objectFit="contain"
          alt="Historic Cemetery Statue"
          className="object-bottom rounded-t-2xl"
        />
      </div>

      <div className="col-span-1 lg:col-span-3 lg:h-full w-full py-6 px-8 xl:px-12 md:pr-4 space-y-6 md:flex md:flex-col justify-start lg:justify-center items-start order-2 lg:order-1">
        <h2 className="text-[1.75rem] md:text-[4rem] font-bold text-start text-primary font-display">
          The Historic Cemetery on the Hill
        </h2>
        <p className="text-base tracking-wide md:text-lg text-start text-paragraph">
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
          <button className="flex items-center justify-center mt-4 md:mt-0 px-4 py-2 lg:px-6 lg:py-3 text-white bg-secondary border border-secondary rounded-md cursor-pointer font-roboto uppercase lg:text-xl hover:bg-primary hover:border-primary">
            Get in touch <FaArrowRightLong className="ml-2 text-lg" />
          </button>
        </Link>

        <div className="flex items-center justify-start gap-4 mt-4 md:mt-0">
          <FaFacebook className="text-xl lg:text-2xl text-paragraph cursor-pointer hover:text-secondary" />
          <FaInstagram className="text-xl lg:text-2xl text-paragraph cursor-pointer hover:text-secondary" />
          <FaTiktok className="text-xl lg:text-2xl text-paragraph cursor-pointer hover:text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
