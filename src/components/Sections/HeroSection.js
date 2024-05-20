import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh]">
      <div className="absolute bg-herosection bg-no-repeat bg-cover bg-center w-full h-full opacity-30 -z-10" />
      <div className="flex flex-col justify-between items-center w-full h-[95vh] overflow-hidden pt-20 px-4 sm:px-8 ">
        <div className="flex flex-col justify-center items-center max-w-2xl lg:max-w-2xl lg:pt-16 sm:space-y-6 md:space-y-6 lg:space-y-4 gap-4 lg:h-[28rem]  text-center">
          <h5 className="text-4xl sm:text-4xl md:text-5xl font-eliyamoliscript font-semibold text-gold tracking-wider">
            Welcome to
          </h5>
          <h2 className="text-[1.75rem]  md:text-[2.75rem] font-bold font-trajanpro3 text-burgundy">
            THE HISTORIC CEMETERY ON THE HILL
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 tracking-wide">
            Perched on top of a hill overlooking the Onkaparinga River and the
            beautiful township of Old Noarlunga is The Church and Cemetery on
            the Hill. Formerly the Church and Cemetery of St Philip and St
            James, which was established in 1850 shortly after the first
            European settlement in the area around the 1840s.
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-4 h-full md:grid-cols-6 lg:grid-cols-8 gap-4 place-items-end overflow-hidden w-full mt-8">
          <div className="relative col-span-1 justify-center items-end w-full h-[16rem] flex sm:h-[16rem] md:h-[18rem] lg:h-[24rem]">
            <Image
              src="/images/image-80.png"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover"
            />
          </div>
          <div className="hidden col-span-2 relative justify-center items-end w-full h-60 md:flex md:h-96 lg:h-[36rem]">
            <Image
              src="/images/image-80.jpg"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover object-top"
            />
          </div>
          <div className="relative col-span-2 flex justify-center items-end w-full h-[22rem] sm:h-[12rem] md:h-[20rem] lg:h-[30rem]">
            <Image
              src="/images/image-77.png"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover"
            />
          </div>
          <div className="hidden col-span-2 relative justify-center items-end w-full h-60 lg:flex md:h-[24rem] lg:h-[36rem]">
            <Image
              src="/images/image-81.jpg"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover object-top"
            />
          </div>
          <div className="relative col-span-1 justify-center items-end w-full h-[16rem] flex sm:h-[16rem] md:h-[18rem] lg:h-[24rem]">
            <Image
              src="/images/image-79.jpg"
              fill
              alt="Picture of the author"
              className="absolute rounded-t-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
