import BiographyTimeline from "@/components/biography/BiographyTimeline";
import BiographySlider from "@/components/ui/BiographySlider";
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full overflow-hidden py-10 gap-8">
      <div
        className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-8 ">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
            The Life of Richard and Mary Bosworth
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 lg:px-8 space-x-4 w-full h-full">
        <div className="w-[100vw] sm:w-[80vw] md:w-[85vw] lg:w-[75vw] xl:w-[80vw] 4xl:w-[70vw] 5xl:w-[60vw] px-4">
          <BiographySlider />
        </div>
      </div>
      <BiographyTimeline />
    </div>
  );
}

export default page