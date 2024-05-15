import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh]">
      <div className="absolute bg-herosection bg-no-repeat bg-cover bg-center w-full h-full opacity-30 -z-10" />
      <div className="flex flex-col justify-between items-center w-full h-[90vh]">
        <div className="flex flex-col justify-center items-center w-[40rem] h-[28rem] gap-2">
          <h5 className="text-5xl font-eliyamoliscript font-semibold text-gold tracking-wider">Welcome to</h5>
          <h2 className="text-[2.75rem] font-bold text-center font-trajanpro3 text-burgundy">
            THE HISTORIC CEMETERY ON THE HILL
          </h2>
          <p className="text-grey text-center tracking-wide">
            Perched on top of a hill overlooking the Onkaparinga River and the
            beautiful township of Old Noarlunga is The Church and Cemetery on
            the Hill. Formerly the Church and Cemetery of St Philip and St
            James, which was established in 1850 shortly after the first
            European settlement in the area around the 1840s.
          </p>
        </div>
        <div className="grid grid-cols-8 gap-4 place-items-end overflow-hidden w-full">
          <div className="relative col-span-1 flex justify-center items-end w-full h-96">
            <Image
              src="/images/image-80.png"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover"
            />
          </div>
          <div className="relative col-span-2 flex justify-center items-end w-full h-[36rem]">
            <Image
              src="/images/image-80.jpg"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover object-top"
            />
          </div>
          <div className="relative col-span-2 flex justify-center items-end w-full h-[30rem]">
            <Image
              src="/images/image-77.png"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover"
            />
          </div>
          <div className="relative col-span-2 flex justify-center items-end w-full h-[36rem]">
            <Image
              src="/images/image-81.jpg"
              fill
              alt="Picture of the author"
              className="rounded-t-2xl absolute w-fit object-cover object-top" 
            />
          </div>
          <div className="relative col-span-1 flex justify-center items-end w-full h-96">
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
