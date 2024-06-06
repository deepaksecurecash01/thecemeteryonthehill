import React from "react";
import Image from "next/image";
import Timeline from "@/components/OurHistoryAndVision/Timeline";

const OurVision = () => {
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
        Our Vision
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
      <div className="flex w-full h-full overflow-hidden relative">
        <div
          className="hidden absolute bg-testimonials-overlay history-overlay rotate-180 -right-16 bg-no-repeat bg-left w-full h-full -z-20 bg-contain md:block"
          aria-hidden="true"
        />
        <div className="flex w-full justify-center">
          <div className=" w-[70vw] flex flex-col justify-center items-center gap-6 ">
            <div className=" flex flex-col justify-center items-center space-y-6">
              <p className="text-base tracking-wide md:text-xl text-justify text-paragraph ">
                Dealing with loss will never be easy. It can be painful to say
                goodbye to a loved one. And it is equally difficult to find a
                suitable memorial and location for their forever resting place.
              </p>
              <p className="text-base tracking-wide md:text-xl text-justify text-paragraph">
                The memories we hold of them may never be forgotten and we may
                not necessarily need a place to grieve and reflect. The Cemetery
                on the Hill offers you the opportunity to have a meaningful
                funeral and gain closure. At our unique location, surrounded by
                the stunning Onkaparinga gorge and river, you will find a
                peaceful and beautiful place to mourn your loved ones, and to
                reflect and reminisce those cherished memories.
              </p>
              <p className="text-base tracking-wide md:text-xl text-justify text-paragraph ">
                As a heritage-listed site and a prominent landmark in the area,
                we are dedicated to preserving the history of the place as we
                carefully restore and open it up to greater possibilities. It is
                our mission to make The Cemetery on the Hill a serene and
                beautifully landscaped place to put your loved ones to rest.
              </p>
              <p className="text-base tracking-wide md:text-xl text-justify text-paragraph">
                With the ongoing developments in The Cemetery, we assure the
                families and the rest of the community that the ashes and buried
                remains of your loved ones are in safe hands and will always be
                treated with the utmost respect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
