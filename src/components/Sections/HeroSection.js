'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { y: "100vh" }, // Start from the bottom of the viewport
  visible: (i) => ({
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }, // Smooth animation
  }),
};

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute bg-hero-section bg-no-repeat bg-cover bg-center w-full h-full opacity-30 -z-10"
        aria-hidden="true"
      />
      <div className="flex flex-col justify-between items-center w-full h-full overflow-hidden px-4 sm:px-8">
        <div className="flex flex-col h-full justify-center lg:justify-center xl:justify-end items-center max-w-2xl lg:max-w-2xl xl:pt-16 sm:space-y-6 md:space-y-6 lg:space-y-4 gap-4 md:h-[60vh] xl:h-auto text-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-script font-semibold text-secondary tracking-wider">
            Welcome to
          </h1>
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
        <div className="grid grid-cols-3 sm:grid-cols-3 h-full md:h-auto xl:h-full md:grid-cols-6 xl:grid-cols-8 gap-4 place-items-end overflow-hidden w-full mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className={
                i === 0
                  ? "relative col-span-1 flex justify-center items-end w-full h-[22rem] sm:h-[16rem] md:h-[22rem] lg:h-[26rem] xl:h-[28rem]"
                  : i === 1
                  ? "flex col-span-2 relative justify-center items-end w-full h-[26rem] md:h-[30rem] xl:h-[36rem]"
                  : i === 2
                  ? "hidden md:flex col-span-2 relative justify-center items-end w-full h-[22rem] sm:h-[22rem] md:h-[28rem] xl:h-[34rem]"
                  : i === 3
                  ? "hidden col-span-2 relative xl:flex justify-center items-end w-full h-60 md:h-[30rem] xl:h-[36rem]"
                  : "hidden relative col-span-1 md:flex justify-center items-end w-full h-[16rem] sm:h-[16rem] md:h-[22rem] lg:h-[26rem] xl:h-[28rem]"
              }
            >
              <Image
                src={`/images/hero-${i + 1}.jpg`}
                fill
                alt={`Hero-Section Image-${i + 1} | The Cemetery on the Hill`}
                loading="lazy"
                className="rounded-t-2xl absolute w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
