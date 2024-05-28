import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute bg-hero-section bg-no-repeat bg-cover bg-center w-full h-full opacity-30 -z-10" />
      <div className="flex flex-col justify-between items-center w-full h-full overflow-hidden px-4 sm:px-8">
        <div className="flex flex-col h-full justify-center lg:justify-end items-center max-w-2xl lg:max-w-2xl lg:pt-16 sm:space-y-6 md:space-y-6 lg:space-y-4 gap-4 lg:h-auto text-center">
          <h5 className="text-4xl sm:text-4xl md:text-5xl font-script font-semibold text-secondary tracking-wider">
            Welcome to
          </h5>
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold font-display text-primary">
            THE HISTORIC CEMETERY ON THE HILL
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-paragraph tracking-wide">
            Perched on top of a hill overlooking the Onkaparinga River and the
            beautiful township of Old Noarlunga is The Church and Cemetery on
            the Hill. Formerly the Church and Cemetery of St Philip and St
            James, which was established in 1850 shortly after the first
            European settlement in the area around the 1840s.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 h-full md:grid-cols-6 xl:grid-cols-8 gap-4 place-items-end overflow-hidden w-full mt-8">
          <div className="relative col-span-1 flex justify-center items-end w-full h-[22rem] sm:h-[16rem] md:h-[22rem] lg:h-[26rem] xl:h-[28rem]">
            <Image
              src="/images/hero-1.jpg"
              fill
              alt="Historic Cemetery Image 1"
              className="rounded-t-2xl absolute w-fit object-cover"
            />
          </div>
          <div className="flex col-span-2 relative  justify-center items-end w-full h-[26rem] md:h-[30rem] xl:h-[36rem]">
            <Image
              src="/images/hero-2.jpg"
              fill
              alt="Historic Cemetery Image 2"
              className="rounded-t-2xl absolute w-fit object-cover object-top"
            />
          </div>
          <div className="hidden md:flex col-span-2 relative justify-center items-end w-full h-[22rem] sm:h-[22rem] md:h-[28rem] xl:h-[34rem]">
            <Image
              src="/images/hero-3.jpg"
              fill
              alt="Historic Cemetery Image 3"
              className="rounded-t-2xl absolute w-fit object-cover"
            />
          </div>
          <div className="hidden col-span-2 relative xl:flex justify-center items-end w-full h-60 md:h-[30rem] xl:h-[36rem]">
            <Image
              src="/images/hero-4.jpg"
              fill
              alt="Historic Cemetery Image 4"
              className="rounded-t-2xl absolute w-fit object-cover object-top"
            />
          </div>
          <div className="hidden relative col-span-1 md:flex justify-center items-end w-full h-[16rem] sm:h-[16rem] md:h-[22rem] lg:h-[26rem] xl:h-[28rem]">
            <Image
              src="/images/hero-5.jpg"
              fill
              alt="Historic Cemetery Image 5"
              className="absolute rounded-t-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
