import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaArrowTurnDown } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

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
        className="hidden absolute bg-testimonials-overlay bg-contain -left-16 bg-no-repeat bg-left w-full h-full -z-20 2xl:block"
        aria-hidden="true"
      />
      <div className="max-w-[90%] md:max-w-[75%] 2xl:max-w-6xl flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
            Expired Leases
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <p className="text-paragraph text-base  tracking-wide lg:text-lg text-justify">
                We are committed to preserving the dignity and legacy of those
                interred within our historic grounds. All plots are allocated in
                accordance with Interment Rights, which are granted for a set
                period of time. As these terms near their expiry, we take every
                possible step to ensure that families are informed, allowing
                them the opportunity to renew or make other arrangements.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg text-justify">
                Our goal is to maintain the respect and tranquillity of this
                sacred space while adhering to the regulations outlined in South
                Australia’s Burial and Cremation Act 2013 and Regulations 2014.
                Whether through renewal or careful management of expired rights,
                we remain dedicated to honouring the legacies entrusted to us.
              </p>
              <div className="flex justify-start items-center gap-4">
                <Link href={"#leases-form"} passHref>
                  <span className="flex items-center justify-center px-4 py-2 text-white bg-secondary border border-secondary rounded-md cursor-pointer font-roboto uppercase hover:bg-primary hover:border-primary">
                    Renew Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414zM10 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
                <Link href={"#leases-form"} passHref>
                  <span className="flex items-center justify-center px-4 py-2 text-white bg-secondary border border-secondary rounded-md cursor-pointer font-roboto uppercase hover:bg-primary hover:border-primary">
                    Release Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414zM10 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[24rem] w-[90%]">
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
          <h3 className="text-3xl font-semibold text-primary font-display">
            WHAT HAPPENS WHEN AN INTERMENT RIGHT EXPIRES?
          </h3>
          <p className="text-paragraph text-base  tracking-wide lg:text-lg text-justify">
            As an Interment Right approaches its expiry, The Cemetery on The
            Hill diligently works to contact the rights holder. Using the most
            up-to-date contact details we have on record, we aim to notify
            families well in advance to discuss renewal or alternative
            arrangements.
          </p>
          <p className="text-paragraph text-base  tracking-wide lg:text-lg text-justify">
            Suppose an Interment Right expires and no arrangements have been
            made for renewal or relinquishment. In that case, The Cemetery on
            The Hill follows a respectful and thorough process to ensure the
            families of the deceased are informed. An expiration notice may be
            placed on the plot, and we will also publish a notice in The
            Advertiser in an attempt to reach any family members who may not
            have been contacted directly. The expiration status will also be
            listed on our website.
          </p>
          <p className="text-paragraph text-base  tracking-wide lg:text-lg text-justify">
            After these efforts, a waiting period of 2 years begins. During this
            time, we encourage the family to contact us to discuss options for
            renewal or to make decisions regarding the plot. If no contact is
            made within this period, the plot will be reclaimed by The Cemetery
            on The Hill.
          </p>
          <p className="text-paragraph text-base  tracking-wide lg:text-lg text-justify">
            In compliance with the Burial and Cremation Act 2013 and Regulations
            2014, the reclaimed plot may then be reused and made available for a
            new interment right holder. Our process is always conducted with the
            utmost care, ensuring that every action taken respects the dignity
            of the interred and adheres to South Australian legislation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
