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
              Burials Interments In The South Of Adelaide
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-[1.75rem] text-center font-roboto text-primary">
              Peaceful Burials Interments at The Cemetery on The Hill
            </h2>
          </div>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            Do you believe that without death, life would lose its meaning? That
            life is being put in balance by death? Because we are fully aware of
            the inevitability and irreversibility of us dying at some point in
            our life, it makes us appreciate life more and encourage a more
            optimistic way of living. The transient nature of being makes death
            an essential part of our life. It is no wonder people now are more
            open to talking about death and their afterlife arrangements.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  With this openness to the thought of death and end-of-life
                  options, many new methods and alternatives have emerged. Aside
                  from the traditional funeral and cremation services, there are
                  now eco-friendly funeral options or green burials, resomation
                  or water cremation, and one of the newest ideas in ecological
                  burials called promession, which is freeze-drying the body and
                  reducing it into powder.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Neanderthals did bury their dead and may have deliberately
                  placed flowers as part of their burial rites. In Australia’s
                  aboriginal culture, traditional practices when an aborigine
                  dies include a smoking ceremony and painting red ochre on all
                  living spaces to drive away the spirit of the deceased; and
                  the death ceremony, which includes practices such as painting
                  the bodies of the mourners and bringing families together to
                  share food, song, and dance.
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
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[22rem] w-full">
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
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium text-tertiary font-display ">
                Why Choose Burial over Cremation?
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Traditional burial is the most common type of burial option
                offered by cemeteries. For many people, it is a matter of
                personal preference. They may cringe at the idea of being burned
                and having their body reduced to ashes. Others may only be
                exercising their religious obedience wherein cremation is still
                not fully supported.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Burial services tend to be the more traditional option,
                especially for families who gravitate more towards the
                conventional aspect. However, if you are not bound by any
                religious or cultural biases when deciding about burial vs
                cremation , the following points may convince you to choose
                burial.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium text-tertiary font-display ">
                It provides a permanent place to visit your loved one.
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                One of the main benefits of choosing burial is that it provides
                a permanent place to visit your loved one. Having a designated
                space in the cemetery where families, friends, and colleagues
                can commemorate those who have passed on can give peace of mind.
                You can rest easy knowing that your loved one is there and you
                can visit them whenever. Having that close proximity can help
                with the grieving process as well. It gives you that special
                moment when you visit the site—a moment to just feel connected
                with your loved one even when simply spending it in silence.
              </p>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full  order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[20rem] w-full">
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
            <div className="relative h-96 md:h-[22rem] w-full">
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
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium text-tertiary font-display ">
                It gives you time to properly say your goodbyes.
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                When you opt for traditional burial, it can give you the time
                you need to properly say your farewells and leave nothing
                unsaid. It allows you to properly mourn, get closure, and deal
                with the stages of grief. You may choose to have a viewing or
                visitation to give other family members the opportunity to pay
                their respects, especially those who need to travel. The body
                can be embalmed, although this is one of the fairly uncommon
                burial practices in Australia , so you can delay the funeral.
                Additionally, having a meaningful ceremony and witnessing the
                lowering of the coffin into the ground can give closure. It
                signifies the finality of death, allows you to embrace the loss
                with your mind and with your heart, and leads to a healthy
                acceptance and eventually towards healing.
              </p>
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
          <div className="grid place-items-center gap-4 py-16 px-4 md:px-8">
            <div
              id="banner-heading"
              className=" w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col gap-4"
            >
              <h1 className="text-[1.75rem] 2xl:text-center md:text-[2rem] text-center font-bold font-display text-white">
                A Resting Place Worthy Of Your Loved One.
              </h1>
              <p className="text-lg sm:text-lg lg:text-xl font-roboto text-white text-center tracking-wide">
                {`Create a lasting tribute to your loved one in our historic cemetery.
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
      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%] gap-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[1.75rem] md:text-[2.75rem] text-center font-bold text-primary font-display">
              It’s more intimate and can be personalised.
            </h2>
          </div>

          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            {
              "For most people, thinking about a funeral automatically involves choosing the casket followed by arranging the burial ceremony. Burial is considered as the standard method of honouring the dearly departed. More people are accustomed to and comfortable with it. Families can choose what type of cemetery plot they prefer, whether it’s a single-depth burial plot, double-depth burial plot, family plot, mausoleum, columbarium, or private estate. It can be personalised, depending on the rules and regulations at your chosen cemetery. You have the opportunity to choose the type of casket and to design a unique memorial or headstone as a permanent remembrance of the life they once lived."
            }
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Knowing the different types of burial plots and deciding what
                  to choose for your loved one may feel unsettling, considering
                  that you are going through one of the toughest moments in
                  life. The death of a loved one can become a big challenge for
                  the grieving family when one is left with the task of
                  preparing the final moments and arranging what happens at a
                  burial service , while also dealing with the loss and coping
                  with their own grief process.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Ideally, your first action towards planning a burial
                  arrangement must be to select a cemetery or memorial park.
                  Choose one that is close to your family and to your loved
                  one’s friends so it’s easier for everyone to visit. You may
                  even select one where your other family members or relatives
                  are laid to rest, for a sense of togetherness and the feeling
                  of being connected.
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
            <div className="flex flex-col gap-4">
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                It is important that you also choose the place that gives
                comfort and peace within you. You must be able to experience
                that feeling of tranquillity when you spend time with your
                dearly departed.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Here at The Cemetery on the Hill, we genuinely respect each
                family’s chosen funeral arrangement. We want to make our
                services as accommodating and fitting as possible. Our natural
                setting and fresh ambience give families a sense of security and
                serenity. With the impressive scenery in our historic cemetery,
                we guarantee comfortable moments when you visit your loved ones.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                We offer a traditional burial option which is the perfect way to
                commemorate the passing of your loved one. With our future focus
                being predominantly on ashes interments, only a few burial plots
                are available.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  How Much Does Burial Cost?
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  When buying a burial plot , the burial cost will vary
                  depending on the available space, the location of the burial
                  plots, and the plot size. If you have already reserved a site
                  or acquired an interment right from The Cemetery on the Hill,
                  we can readily arrange the burial assistance and ceremony for
                  your loved one.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our burial sites can be reserved for up to two years. Once the
                  reservation period has come to an end, you may then opt to
                  either purchase the Interment Rights for that site or
                  relinquish the reservation. Burial Interment Rights are
                  acquired for a duration of 50 years. If you wish for an
                  extension, it is available for a minimum of five years
                  thereafter.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  For more details about the pricing of individual plots and
                  interment costs, please visit our Pricing page. You may also
                  send an email to hello@thecemeteryonthehill.com.au or call us
                  at 08 8317 6044 to discuss your options.
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
          <div className="grid place-items-center gap-4 py-16 px-4 md:px-8">
            <div
              id="banner-heading"
              className=" w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col gap-4"
            >
              <p className="text-lg sm:text-lg lg:text-xl font-roboto text-white text-center tracking-wide">
                Our compassionate team is here to help guide you through the
                process, providing clear information on the available options
                and associated costs. Whether you are considering a simple ashes
                interment or a more elaborate memorial, we will work with you to
                ensure that your loved one is remembered with dignity and care,
                all while respecting your personal preferences.
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
            {`Frequently Asked Questions About Burials At The Cemetery On The Hill`}
          </p>
        </div>
        <FaqSection />
      </div>
    </div>
  </div>
);

export default ContentSection;
