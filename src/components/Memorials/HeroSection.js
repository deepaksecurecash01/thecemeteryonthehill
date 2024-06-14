import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => (
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
        className="hidden absolute bg-testimonials-overlay bg-contain bg-no-repeat bg-left w-full h-full -z-20 xl:block"
        aria-hidden="true"
      />
      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%]">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl md:text-5xl font-bold text-primary font-display">
            Memorials
          </h1>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            Life is a journey, and just like every other journey, there is an
            end—the ultimate destination. Part of life is death and losing
            someone we hold dear is one of the most difficult moments in our
            mortal existence.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
                Everyone has their own way of handling grief and coping with the
                loss of a loved one. Keeping the connection with the deceased as
                close as possible, such as holding on to their cremation ashes
                at home for a period of time, can be a significant part of
                someone’s method of managing their grief and working towards
                moving on. Others will prefer to inter the ashes in a
                <strong className="font-extrabold text-primary">
                  &nbsp;memorial gardens cemetery&nbsp;
                </strong>
                and hold a permanent memorial as their preferred way toward
                acceptance and healing.
              </p>
              <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
                In Australia, memorialising the death of a loved one is an
                integral part of every culture and religion. As a secular
                country, there is a high regard for religious freedom and
                cultural diversity. When it comes to arranging funerals, most
                families incorporate memorials, commonly
                <strong className="font-extrabold text-primary">
                  &nbsp;headstones for graves&nbsp;
                </strong>
                , commemorative plaques, and some even like to go to an
                extravagant extent creating magnificent mausoleums.
              </p>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
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
        <div className="flex flex-col justify-center items-start gap-8 py-8 xl:py-0">
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            Between the 18th century and the post-World War II era, the majority
            of memorials, mostly war memorials, were erected. Even though there
            are different ideas on how a memorial should be, its structure,
            purpose, location and value, all memorials share a common aim of
            remembering those we have lost.
          </p>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            Families choose to memorialise their loved ones because of what they
            meant to them and how special they were, some simply do so because
            they believe it is the right thing to do, in any case
            <strong className="font-extrabold text-primary">
              &nbsp;planning a tribute&nbsp;
            </strong>
            is never an easy task. They want their memories to always remain
            with them, and for future generations to never lose the connection
            to their predecessors.
          </p>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            What type of interment service will best suit your needs? Let’s
            start discussing your options. Call us
            <strong className="font-extrabold text-primary">
              &nbsp;
              <Link className="underline" href="tel:08-8317-6044">
                08 8317 6044
              </Link>
              &nbsp;
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
