import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import FaqSection from "./FaqSection";
const ContentSection = () => (
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

      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%] gap-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[1.75rem] md:text-[2.75rem] text-center font-bold text-primary font-display">
              Ashes Interments In The South Of Adelaide
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-[1.75rem] text-center font-roboto text-primary">
              Peaceful Ashes Interments at The Cemetery on The Hill
            </h2>
          </div>

          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            When a loved one has passed on, the bereaved family is sometimes
            left with the responsibility of deciding how to go about this final
            stage of their lifelong journey. Unless the deceased had stated
            their final wishes beforehand or had pre-planned their funeral
            arrangements, the family members must choose usually between
            traditional burial or cremation.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Cremation has become more popular despite some restrictions
                  based on certain religious beliefs and cultural biases. In a
                  2020 survey, the average annual number of cremation services
                  performed in the country was 110,372. With the Australian
                  Bureau of Statistics advising 169,301 deaths during this
                  annual period, cremation is recognised as being the more
                  popular choice with over 65% of deceased persons being
                  cremated.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  When a family chooses cremation, they must then decide where
                  to keep their loved one’s ashes. It can be placed in an urn
                  and kept by the family at home, in a columbarium or mausoleum,
                  and even scattered at the deceased meaningful place as long as
                  permitted. Most commonly, ashes are interred in a cemetery
                  providing a physical memorial for loved ones to visit and
                  reminisce, but some options such as a memorial park, or
                  natural burial site are also available.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[24rem] w-full">
              <Image
                src={`/images/hero-2.jpg`}
                fill
                alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                loading="lazy"
                objectFit="cover"
                className=" rounded-lg object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-paragraph text-base  tracking-wide lg:text-lg">
            The interment of ashes, following a cremation, is the burial of
            ashes into their final resting place. Family and friends of the
            deceased can gather together at the interment site for an ashes
            interment ceremony, in hopes to bring closure by saying their final
            goodbyes.
          </p>
          <p className="text-paragraph text-base  tracking-wide lg:text-lg">
            The Cemetery on the Hill provides a peaceful and beautiful final
            resting place for your loved one’s ashes. We guarantee the utmost
            respect and care for every one laid to rest within our historic
            cemetery.
          </p>
          <p className="text-paragraph text-base  tracking-wide lg:text-lg">
            What type of interment service will best suit your needs? Let’s
            start discussing your options. Call us 08 8317 6044 .
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[34rem] w-full">
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

          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl text-tertiary font-bold">
                  Options for Interment of Ashes in The Cemetery on the Hill
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Families who prefer to have their loved ones cremated can
                  avail of all our interment for ashes services, including
                  managing the ashes interment rights, the physical interment of
                  cremated remains into the interment plot, and organising a
                  meaningful funeral for ashes remains.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  For most people, pets are a very big part of the family and
                  they are worthy of just as much respect and care as we would
                  treat other people. At The Cemetery on The Hill, we wanted to
                  make sure we could provide an ashes interment for pets . When
                  an Interment Right is taken out with us, you are more than
                  welcome to begin using your plot whenever you need, and
                  knowing that your beloved pet is in a place where you can
                  freely visit and one day be interred with can be the peace of
                  mind we all need. Ashes memorials for pets can absolutely also
                  be arranged accordingly, just get in touch with us to begin
                  discussing options.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  The Cemetery on the Hill offers ashes interments in a variety
                  of unique locations. Some of the ashes interment options we
                  currently have available are:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Ashes Memorial Beds
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our ashes memorial bed is an excellent choice for families
                  looking for a solemn and peaceful place to bury their loved
                  one’s ashes. When you have a permanent interment site, anyone
                  who wishes to pay their respects or to spend some time with
                  the deceased can easily visit.
                </p>

                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  The Cemetery on the Hill is carefully renovating the two
                  existing ashes beds, and a third one is being constructed so
                  we can cater to more families. Our ashes memorial beds are
                  designed with high regard to both current and future
                  interments. We guarantee our genuine commitment to providing
                  everyone with the best care and service possible.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Families, relatives, and friends are welcomed to get together
                  in The Cemetery to call upon the memories of their dearly
                  departed. Or one can simply take the time to revel in the
                  serenity of the area; soak in and appreciate its beautiful
                  landscape, garden and water features. We take great pride in
                  our work and in how we are developing and remodelling the
                  cemetery into this magnificent heritage site that it deserves
                  to be.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full  order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[28rem] w-full">
              <Image
                src={`/images/service-main.png`}
                fill
                alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                loading="lazy"
                objectFit="cover"
                className=" rounded-lg object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[24rem] w-full">
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
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Ashes Memorial Walls
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  For families who want an above-the-ground ashes interment
                  option, our ashes memorial wall is the ideal choice for a
                  final resting place. Our ashes memorial wall is a
                  free-standing wall designed to contain an individual’s
                  remains, where the cremation urns are placed and then enclosed
                  with their own memorial plaque.
                </p>

                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Ashes walls have been a popular choice for those who want a
                  more economical afterlife arrangement with fewer maintenance
                  needs.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our ashes memorial walls give this opportunity for families to
                  have that special spot where they can visit and honour those
                  who have passed on. It is merely one of the ways to comfort
                  the living and remember the deceased.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Choosing Cremation over Traditional Burial
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Cremation may still be a sensitive and very personal topic for
                  some. However, cremation is the best option for families who
                  want to always be with their loved ones even after death. The
                  cremation ashes can be stored in a sealed urn and provides
                  greater flexibility for where the remains can go. For some,
                  depending on the final wishes of the deceased or the personal
                  preference of the family, dividing the ashes among family
                  members is also an option.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  When it comes to affordability, choosing direct cremation is
                  the best option. Ashes take up a smaller space in a cemetery
                  or burial site, so it means a less expensive price compared to
                  choosing the traditional burial.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Religious and cultural views can also dictate a person’s
                  decisions after death. For the more environmentally conscious
                  individuals, cremation is also the greener option. Studies
                  suggest that cremation has up to fifty per cent less
                  environmental impact compared to traditional burial.
                  Ultimately, it is important to take into account all factors,
                  including the final wishes of the deceased, when making
                  funerary preparations.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  If you are still undecided about what type of service to get,
                  The Cemetery on the Hill is here to assist you. Please do not
                  hesitate to contact us at 08 8317 6044 .
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full  order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[44rem] w-full">
              <Image
                src={`/images/service-main.png`}
                fill
                alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                loading="lazy"
                objectFit="cover"
                className=" rounded-lg object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[38rem] w-full">
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

          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl text-tertiary font-bold">
                  How to plan for the interment of ashes ceremony?
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  An ashes interment service usually follows the cremation and
                  involves the family, friends, and relatives of the deceased
                  gathering at the interment site or other chosen location where
                  the ashes are permanently laid to rest.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  During the graveside service for burial of ashes , the family
                  and any individual who was close to the deceased can offer
                  their eulogies and prayers. If you are wondering about what to
                  say at an interment of ashes service, you can always offer
                  songs that the deceased loved to listen to when they were
                  still alive, read their favourite poems, and even play a
                  special tribute with some memorable pictures and videos, but
                  you can never go wrong with a few kind words.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  If the deceased had already pre-planned their funeral
                  arrangements, the family will not have to worry about what to
                  do when the time comes. They may have already conveyed their
                  final wishes with their family prior to their passing or had
                  executed a set of written instructions so the bereaved family
                  knows how the cremation and the funeral will transpire.
                  Moreover, the family and friends of the departed can spend
                  more of their time coping with grief and preparing themselves
                  for the final farewell.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-8 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Cost of Ashes Interment
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  The interment of ashes cost will vary depending on the price
                  of the cemetery ashes plots. If you have already reserved a
                  site or acquired an interment right from The Cemetery on the
                  Hill, we can readily arrange the ashes funeral services and
                  ceremony for your loved one.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our ashes interment sites can be reserved for up to two years.
                  Once the reservation period has come to an end, you may then
                  opt to either purchase the Interment Rights for that site or
                  relinquish the reservation.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Ashes Interment Rights are acquired for a duration of 25
                  years. If you wish for an extension, it is available for a
                  minimum of five years thereafter. We require a five-year
                  minimum remaining on an Ashes Interment Right for an interment
                  to take place.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  For more details about the pricing of Ashes interment costs,
                  please visit our Pricing Page. You may also send an email to
                  hello@thecemeteryonthehill.com.au or call us at 08 8317 6044
                  to discuss your options.
                </p>
              </div>
              <div className="flex justify-start items-center">
                <Link
                  href="/pricing"
                  passHref
                  className="bg-secondary text-white font-roboto uppercase rounded-md border cursor-pointer border-secondary px-6 py-2 flex justify-center items-center hover:bg-primary hover:border-primary text-sm sm:text-base md:text-lg"
                >
                  Pricing <FaArrowRightLong className="ml-2 text-lg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full  order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[36rem] w-full">
              <Image
                src={`/images/service-main.png`}
                fill
                alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                loading="lazy"
                objectFit="cover"
                className=" rounded-lg object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-10">
        <section
          className="relative 6xl:min-h-[35vh] flex justify-center items-center"
          aria-labelledby="banner-heading"
        >
          <div
            className={`absolute bg-banner-bg-2 bg-no-repeat w-full h-full bg-cover bg-center -z-20`}
            role="img"
            aria-label="Decorative background image"
          />
          <div className="absolute bg-tertiary bg-opacity-60 w-full h-full -z-10" />
          <div className="grid place-items-center gap-6 py-16 px-4 md:px-8">
            <div
              id="banner-heading"
              className=" w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col gap-4"
            >
              <h1 className="text-[1.75rem] 2xl:text-center md:text-[2rem] text-center font-bold font-display text-white">
                A Resting Place Worthy Of Your Pet
              </h1>
              <p className="text-lg sm:text-lg lg:text-xl font-roboto text-white text-center tracking-wide">
                {`Create a lasting tribute to your pet in our historic cemetery.
`}
              </p>
            </div>
            <Link
              href="/contact-us"
              passHref
              className="bg-secondary text-white font-roboto uppercase rounded-md border cursor-pointer border-secondary px-4 py-2 flex justify-center items-center hover:bg-primary hover:border-primary text-sm sm:text-base md:text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>

      <div className="w-[90vw] xl:w-[80vw]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
            FaQ
          </h2>
          <p className="text-paragraph text-base font-bold tracking-wide mx-6 text-center lg:text-lg">
            {`Frequently Asked Questions About Pet Interment At The Cemetery On The Hill`}
          </p>
        </div>
        <FaqSection />
      </div>
    </div>
  </div>
);

export default ContentSection;
