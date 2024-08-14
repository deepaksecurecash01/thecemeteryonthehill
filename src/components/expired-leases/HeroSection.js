import React from "react";
import Image from "next/image";

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
      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%] 2xl:max-w-6xl">
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
            Expired Leases
          </h2>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            All plots located at The Cemetery On the Hill are used in accordance
            with a held Interment Right. Each Interment Right has a set amount
            of time associated with it. For grave plots, this is 50 years; and
            for ashes plots, this is 25 years. As an Interment Right approaches
            its expiry, The Cemetery on The Hill will make every effort to
            contact the Interment Rights holder using the contact details we
            have on record.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <p className="text-base md:text-lg font-bold text-justify text-paragraph">
                If an Interment Right expires and no arrangements have been made
                for renewal or relinquishment, an expiration notice will be
                placed on the plot advising the family of the deceased to get in
                contact with The Cemetery on The Hill to discuss options. An
                expiry notice will be posted in the Advertiser as well.
              </p>
              <p className="text-base md:text-lg font-bold text-justify text-paragraph">
                If a period of 2 years has passed since these efforts to notify
                the interment right holder were made, the plot will be reclaimed
                by The Cemetery on The Hill. In accordance with the Burial and
                Cremation Act 2013 and Regulations 2014, the site may then be
                reused and made available for a new interment right holder.
              </p>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[20rem] w-[90%]">
              <Image
                src={`/images/ourvision.jpg`}
                fill
                alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                loading="lazy"
                objectFit="cover"
                className=" rounded-lg object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 py-8 xl:py-0">
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            On the occasion that a site is reused, The Cemetery on The Hill will
            adhere strictly to the South Australian Legislation. If a gravesite
            is reused, The Cemetery on The Hill will perform what is called a
            lift and deepen procedure to relocate any interred remains further
            down in the same plot. This procedure is performed with absolute
            respect for the remains. Any skeletal remains are carefully
            collected and placed into an ossuary box; the depth of the grave is
            then increased and the ossuary box is placed at the new depth.
          </p>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            In the case of reusing an expired ashes interment plot, the existing
            cremated remains will be respectfully removed and relocated to an
            unmarked location within The Cemetery on The Hill. In the case of an
            ashes plot being relinquished, upon removal of the cremated remains,
            The Cemetery on The Hill will be more than happy to return these
            remains at the discretion of the family. If no direction is provided
            upon relinquishment of the plot, the interred remains will be
            relocated to an unmarked location within the Cemetery.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
