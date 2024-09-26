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
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
            Ashes Interments
          </h2>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            When a loved one has passed on, the bereaved family is sometimes
            left with the responsibility of deciding how to go about this final
            stage of their lifelong journey. Unless the deceased had stated
            their final wishes beforehand or had pre-planned their funeral
            arrangements, the family members must choose usually between
            traditional burial or cremation.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <p className="text-base md:text-lg text-justify text-paragraph">
                Cremation has become more popular despite some restrictions
                based on certain religious beliefs and cultural biases. In a
                2020 survey, the
                <strong className="font-extrabold text-primary">
                  &nbsp;
                  <Link
                    target="_blank"
                    className=" underline"
                    href="https://accaweb.com.au/images/easyblog_articles/45/CREMATION-CAPACITY-SURVEY-2020_14Oct2020.pdf"
                  >
                    average annual number of cremation services
                  </Link>
                  &nbsp;
                </strong>
                performed in the country was 110,372. With the Australian Bureau
                of Statistics advising 169,301 deaths during this annual period,
                cremation is recognised as being the more popular choice with
                over 65% of deceased persons being cremated.
              </p>
              <p className="text-base md:text-lg text-justify text-paragraph">
                When a family chooses cremation, they must then decide where to
                keep their loved one’s ashes. It can be placed in an urn and
                kept by the family at home, in a columbarium or mausoleum, and
                even scattered at the deceased meaningful place as long as
                permitted. Most commonly, ashes are interred in a cemetery
                providing a physical memorial for loved ones to visit and
                reminisce, but some options such as a memorial park, or natural
                burial site are also available.
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
            The interment of ashes, following a cremation, is the
            <strong className="font-extrabold text-primary">
              &nbsp;burial of ashes&nbsp;
            </strong>
            into their final resting place. Family and friends of the deceased
            can gather together at the interment site for an ashes interment
            ceremony, in hopes to bring closure by saying their final goodbyes.
          </p>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            The Cemetery on the Hill provides a peaceful and beautiful
            <strong className="font-extrabold text-primary">
              &nbsp;final resting place for your loved one’s ashes
            </strong>
            . We guarantee the utmost respect and care for every one laid to
            rest within our historic cemetery.
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
