"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { y: "100vh" }, // Start from the bottom of the viewport
  visible: (i) => ({
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 }, // Smooth animation
  }),
};

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute bg-hero-section bg-no-repeat bg-cover bg-center w-full h-full max-h-screen opacity-30 -z-10"
        aria-hidden="true"
      />
      <div className="flex flex-col justify-between items-center w-full h-full overflow-hidden px-4 sm:px-8">
        <div className="flex flex-col h-full justify-center lg:justify-center items-center max-w-2xl lg:max-w-5xl xl:pt-16 gap-6 md:h-[60vh] xl:h-full text-center">
          <motion.h1
            className="text-4xl sm:text-4xl md:text-5xl font-script font-semibold text-secondary tracking-wider"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Welcome to
          </motion.h1>
          <div className="flex flex-col gap-2">
            <motion.h2
              className="text-[1.5rem] md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold font-display text-primary"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              THE HISTORIC CEMETERY ON THE HILL
            </motion.h2>
            <motion.h2
              className="text-xl md:text-2xl lg:text-[1.75rem] font-roboto text-primary"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              A State Heritage Cemetery in Adelaide, South Australia
            </motion.h2>
          </div>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-lg text-paragraph tracking-wide"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Nestled above the serene landscape of Old Noarlunga, with a backdrop
            overlooking the Onkaparinga River, The Cemetery on The Hill offers a
            peaceful final resting place for all families. For over a century
            and a half, this hallowed ground has been the eternal home for the
            early settlers and pioneering families who helped shape the
            Noarlunga and surrounding districts. With its rich historical
            significance, The Cemetery on The Hill continues to offer dignified
            interment services, providing families a place of meaningful
            memorial, today and for generations to come.
          </motion.p>
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
