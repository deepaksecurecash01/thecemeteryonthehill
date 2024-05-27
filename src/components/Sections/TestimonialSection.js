import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSection from "./BannerSection";
import Simple from "../Slider/Simple";

const TestimonialSection = () => {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex flex-col justify-between">
      <div className="absolute bg-ellipse-1 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
      <div className="absolute bg-ellipse-2 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      <div className="hidden absolute bg-testimonials-overlay -left-16 bg-no-repeat bg-left w-full h-full -z-20 bg-contain md:block" />
      <div className=" w-full min-h-screen z-10 flex flex-col justify-between items-center">
        <div className="pt-10 6xl:min-h-[65vh] h-full flex flex-col justify-center items-start w-full space-y-2">
          <div className="flex flex-col justify-center items-center lg:flex-row w-full h-full gap-6">
            <div className="px-8 space-y-2 w-full md:pl-64">
              <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-start font-display text-primary">
                Testimonial
              </h2>
              <p className="text-paragraph text-base text-start tracking-wide md:pr-10 lg:text-lg">
                {
                  "Don't just take our word for it - see what actual users of our service have to say about their experience."
                }
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end lg:justify-center items-center py-10 lg:px-8 space-x-4 w-full h-full">
            <div className="w-[90vw] sm:w-[80vw] md:w-[85vw] lg:w-[75vw] xl:w-[90vw] 4xl:w-[70vw] 5xl:w-[60vw] px-4 md:ml-10 lg:ml-24  ">
              <Simple />
            </div>
          </div>
        </div>
        <div className="w-full">
          <BannerSection />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
