import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRightLong
} from "react-icons/fa6";
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
              Pet Cemetery In The South Of Adelaide
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-[1.75rem] text-center font-roboto text-primary">
              Peaceful Pet Interments at The Cemetery on The Hill
            </h2>
          </div>

          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            At The Cemetery on The Hill, we understand the profound bond we
            share with our pets. Our Pet Cemetery provides a serene and
            dignified resting place for your cherished companions, honouring
            their memory within the same historic and peaceful grounds that have
            served the community for over a century and a half. We have a
            dedicated section in the cemetery specifically for pet interments.
            However, for families who prefer to have their pets interred
            alongside their loved ones, we also offer the option of laying them
            to rest in family-owned plots. No matter your preferred interment
            option, we offer a tranquil setting where your pet’s memory will
            endure in a place of beauty and reflection, allowing you to visit
            and remember the joy they brought into your life.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Why Choose The Cemetery On The Hill For Pet Interments?
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Choosing The Cemetery on The Hill for your pet’s final resting
                  place is a deeply personal decision that reflects your love
                  and dedication to their memory. Our pet-inclusive cemetery
                  offers a unique sanctuary, where peace, reflection, and
                  remembrance come together in a setting that is as tranquil as
                  it is meaningful. Here, the bond you shared with your pet is
                  cherished and preserved for generations to come.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                  A Historic and Tranquil Setting
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Located within the heritage-listed grounds of The Cemetery on
                  The Hill, our pet-friendly cemetery provides a serene
                  environment where pets are interred with the same dignity and
                  respect given to the people laid to rest here. Set against the
                  backdrop of South Australia’s beautiful countryside and
                  overlooking the peaceful Onkaparinga River, this sacred space
                  offers solace and comfort to families who seek a quiet,
                  reflective place to honour their beloved companions. The rich
                  history of the grounds, combined with the natural beauty of
                  the landscape, makes this a truly unique place for
                  remembrance.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[36rem] w-full">
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
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[36rem] w-full">
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
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                  Personalised Attention and Care
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our compassionate team is here to support you every step of
                  the way, ensuring that every detail reflects your wishes. From
                  helping you select the perfect spot within our peaceful
                  grounds to assisting with memorial options that reflect the
                  personality and spirit of your pet, we are dedicated to
                  creating an experience that honours the unique bond you
                  shared. Every interment is handled with the utmost care,
                  because the love and companionship pets bring into our lives
                  deserve nothing less.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                  A Lasting Memorial
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Choosing The Cemetery on The Hill means more than simply
                  finding a resting place for your pet—it means creating a
                  lasting tribute to their life and the joy they brought into
                  your home. Our grounds are being thoughtfully restored and
                  carefully maintained to provide a fitting space for
                  reflection, where you can return time and time again to honour
                  and remember your pet. Our commitment to restoration and
                  preservation means that your pet’s resting place will remain a
                  tranquil, dignified space for years to come, providing a
                  lasting connection to the love you shared.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Our Services For Cherished Pets
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  We offer a range of personalised interment services to honour
                  your pet’s unique legacy. Our services are designed to ensure
                  that each pet is laid to rest in a dignified and respectful
                  manner within the peaceful grounds of The Cemetery on The
                  Hill.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                  Pet Ashes Interments
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our beautifully landscaped cemetery provides a serene
                  environment for the ashes of your beloved pet. You have the
                  option to inter your pet’s ashes in our dedicated pet section,
                  which offers tranquil surroundings, or within your
                  family-owned plot, allowing your pet to rest in a location
                  that you have planned for your family’s future arrangements.
                  We handle all aspects of the ashes interment with care,
                  ensuring that your pet is honoured in a location that offers
                  comfort and peace.
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
      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%] gap-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[1.75rem] md:text-[2.75rem] text-center font-bold text-primary font-display">
              The History Of Pet Cemeteries
            </h2>
          </div>

          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
           {'Long before we began sharing photos of our beloved pets online, and centuries before dogs were celebrated as "man’s best friend," animals were already an indispensable part of human life. These early bonds were often practical—dogs served as protectors, hunters, and companions, while cats kept our homes free of pests. But over time, these relationships deepened, evolving into something far more profound. Our pets became our friends, our confidants, and eventually, cherished members of our families. This shift in perception is beautifully reflected in the history of pet cemeteries, where the love and loyalty between humans and their animals is honoured and preserved.'}
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Archaeological evidence tells us that our connection to pets
                  has ancient roots. The ancient Egyptians, for example, viewed
                  cats not only as cherished pets but as divine beings worthy of
                  reverence. In fact, the oldest known pet cemetery was
                  discovered during excavations at the Berenice Troglodytica
                  seaport, where, between the 1st and 2nd centuries CE, dozens
                  of cats were laid to rest with the same care given to human
                  remains. Similarly, in ancient Siberia, archaeologists have
                  found evidence that dogs were buried alongside their human
                  companions as early as 8,000 years ago—a testament to the
                  powerful emotional bond that transcended mere utility.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Throughout history, there are countless examples of people
                  creating sacred spaces to honour their pets. One such place is
                  the Ashkelon dog cemetery in Israel, dating back to the 5th
                  century BCE. This burial ground—the largest of its kind in the
                  ancient world—held the remains of hundreds of dogs, each
                  lovingly placed to rest, signifying how deeply the people of
                  that time valued their loyal companions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[30rem] w-full">
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
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
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
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  The idea of pet cemeteries, as we know them today, began to
                  take shape in the 19th century, a time when society’s views on
                  animals were shifting. In 1881, London’s Hyde Park saw the
                  creation of what would become Britain’s first pet cemetery. It
                  began with a single burial—a Maltese terrier named Cherry,
                  whose owners had cherished their time with her walking in the
                  park. They asked the gatekeeper if they could lay her to rest
                  there, and with his compassionate approval, the Hyde Park Pet
                  Cemetery was born.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  In Paris, just a few years later in 1899, the Cimetière des
                  Chiens was established, one of the world’s first public pet
                  cemeteries. With elaborate monuments and beautifully sculpted
                  memorials, this cemetery became a place where the memories of
                  beloved pets could be preserved for eternity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  In the United States, the Hartsdale Pet Cemetery in New York
                  was founded in 1896 and remains America’s oldest and largest
                  pet cemetery. Originally created by a veterinarian who offered
                  a grieving owner a place to bury her dog in his orchard, it
                  has since grown into a sanctuary for over 80,000 animals. Each
                  grave stands as a loving reminder of the animals who brought
                  joy and comfort to the families who cared for them. The
                  cemetery, now listed on the National Register of Historic
                  Places, is a lasting tribute to the deep connection between
                  humans and their pets.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  These sacred spaces are not merely resting places for
                  animals—they are enduring symbols of the love and
                  companionship that pets bring into our lives. Today, pet
                  cemeteries like The Cemetery on The Hill continue to offer a
                  place of peace, where families can return time and again to
                  honour the memory of their beloved companions. The Cemetery on
                  The Hill stands as a testament to love that transcends even
                  death—a love that remains as steadfast as the bond between a
                  pet and its family.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full  order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[30rem] w-full">
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
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
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
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  How Much Does Pet Interment Cost?
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  The cost of pet interment at The Cemetery on The Hill can vary
                  depending on a number of factors, including the type of
                  interment you choose and any personalised memorials you would
                  like to include. We understand that every pet is unique, and
                  our aim is to offer a range of options that allow you to
                  honour your beloved companion in a way that feels right for
                  you. We offer perpetuity locations for pet ashes interments,
                  starting from as low as $500. You can get a better gauge of
                  the pricing we can offer for family plots that can include
                  pets by visiting our Pricing page.
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
                ensure that your pet is remembered with dignity and care, all
                while respecting your personal preferences.
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
