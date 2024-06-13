import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
      <div className="relative">
        <div
          className="bg-ourhistoryandvision-bg bg-no-repeat bg-cover h-[30vh] w-full"
          aria-labelledby="banner-heading"
        />
        <div className="flex flex-col items-center justify-center relative w-full overflow-hidden py-10 gap-8">
          <div
            className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
            aria-hidden="true"
          />
          <div
            className="hidden absolute bg-testimonials-overlay bg-contain bg-no-repeat bg-left w-full h-full -z-20  xl:block"
            aria-hidden="true"
          />
          <div className="max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
            <div className="flex flex-col justify-center items-center gap-8">
              <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
                Burials
              </h2>
              <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
                Do you believe that without death, life would lose its meaning?
                That life is being put in balance by death? Because we are fully
                aware of the inevitability and irreversibility of us dying at
                some point in our life, it makes us appreciate life more and
                encourage a more optimistic way of living. The transient nature
                of being makes death an essential part of our life. It is no
                wonder people now are more open to talking about death and their
                afterlife arrangements.
              </p>
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative">
              <div className=" w-full flex justify-center items-center">
                <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
                  <p className="text-base md:text-lg text-justify text-paragraph">
                    With this openness to the thought of death and end-of-life
                    options, many new methods and alternatives have emerged.
                    Aside from the traditional funeral and cremation services,
                    there are now eco-friendly funeral options or green burials,
                    resomation or water cremation, and one of the newest ideas
                    in ecological burials called promession, which is
                    freeze-drying the body and reducing it into powder.
                  </p>
                  <p className="text-base md:text-lg text-justify text-paragraph">
                    Neanderthals did bury their dead and may have deliberately
                    placed flowers as part of their burial rites. In Australia’s
                    aboriginal culture, traditional practices when an aborigine
                    dies include a smoking ceremony and painting red ochre on
                    all living spaces to drive away the spirit of the deceased;
                    and the death ceremony, which includes practices such as
                    painting the bodies of the mourners and bringing families
                    together to share food, song, and dance.
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
                <Image
                  src="/images/History-Image-Test.png"
                  width={600}
                  height={500}
                  loading="lazy"
                  objectFit="contain"
                  alt="Historic Cemetery Statue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;
