import React from 'react'
import Image from "next/image";
import Timeline from "@/components/OurHistoryAndVision/Timeline";

const OurHistory = () => {
  return (
    <div className="flex flex-col items-center relative w-full overflow-hidden py-10 gap-8">
      <div
        className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
        Our History
      </h2>
      <div className="flex justify-center items-center w-[80vw] -space-x-56">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            custom={i}
            className={
              i === 0
                ? "relative w-full h-[22rem] sm:h-[16rem] md:h-[22rem] lg:h-[26rem] xl:h-[28rem]"
                : i === 1
                ? "relative z-10 w-full h-[26rem] md:h-[30rem] xl:h-[36rem]"
                : "relative w-full h-[16rem] sm:h-[16rem] md:h-[22rem] lg:h-[26rem] xl:h-[28rem]"
            }
          >
            <Image
              src={`/images/hero-${i + 1}.jpg`}
              fill
              alt={`Hero-Section Image-${i + 1} | The Cemetery on the Hill`}
              loading="lazy"
              className="absolute w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full h-full overflow-hidden relative">
        <div
          className="hidden absolute bg-testimonials-overlay history-overlay -left-16 bg-no-repeat bg-left w-full h-full -z-20 bg-contain md:block"
          aria-hidden="true"
        />
        <Timeline />
      </div>
    </div>
  );
}

export default OurHistory