import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSection from "./BannerSection";
import Simple from "../Slider/Simple";

const TestimonialSection = () => {


  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col justify-between">
      <div className="relative overflow-hidden h-full flex justify-start items-start lg:items-center">
        <div className="absolute bg-ellipse-1 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
        <div className="absolute bg-ellipse-2 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
        <div className="hidden absolute bg-testimonials-overlay bg-no-repeat bg-left w-full h-full -z-20 bg-contain md:block" />
        <div className="py-20 flex flex-col justify-between items-start w-full space-y-2">
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
          <div className="flex md:justify-end lg:justify-center items-center py-8 6xl:py-24 lg:px-8 space-x-4 w-full h-full">
            <div className="w-full md:w-[80vw] lg:w-[85vw] 4xl:w-[70vw] 5xl:w-[60vw] px-4 md:ml-10 lg:ml-0">
              <Simple />
            </div>
          </div>
        </div>
      </div>
      <BannerSection />
    </div>
  );
};

export default TestimonialSection;
