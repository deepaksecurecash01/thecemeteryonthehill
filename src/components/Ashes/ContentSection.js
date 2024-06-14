import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContentSection = () => {
  return (
    <div className="flex justify-center items-center relative w-full overflow-hidden py-20 gap-8">
      <Background />
      <Content />
    </div>
  );
};

const Background = () => (
  <>
    <div
      className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
      aria-hidden="true"
    />
    <div
      className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
      aria-hidden="true"
    />
  </>
);

const Content = () => (
  <div className="flex flex-col gap-8 max-w-[90%] md:max-w-[75%] xl:max-w-[60%]">
    <IntroSection />
    <ImagesSection />
    <BenefitsSection />
    <AdditionalInfoSection />
    <MainImage />
    <CostSection />
  </div>
);

const IntroSection = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-3xl font-semibold text-tertiary font-display">
      Options for Interment of Ashes in The Cemetery on the Hill
    </h2>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Families who prefer to have their loved ones cremated can avail of all our
     <strong className="font-extrabold text-primary">
        &nbsp;interment for ashes&nbsp;
      </strong> services, including managing the ashes interment
      rights, the physical <strong className="font-extrabold text-primary">
        &nbsp;interment of cremated remains&nbsp;
      </strong> into the interment
      plot, and organising a meaningful funeral for ashes remains.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      For most people, pets are a very big part of the family and they are
      worthy of just as much respect and care as we would treat other people. At
      The Cemetery on The Hill, we wanted to make sure we could provide an 
      <strong className="font-extrabold text-primary">
        &nbsp;ashes interment for pets&nbsp;
      </strong>. When an Interment Right is taken out with us, you are
      more than welcome to begin using your plot whenever you need, and knowing
      that your beloved pet is in a place where you can freely visit and one day
      be interred with can be the peace of mind we all need.<strong className="font-extrabold text-primary">
        &nbsp;Ashes memorials for pets&nbsp;
      </strong>can absolutely also be arranged accordingly, just get in touch with
      us to begin discussing options.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      The Cemetery on the Hill offers ashes interments in a variety of unique
      locations. Some of the ashes interment options we currently have available
      are:
    </p>
  </div>
);

const ImagesSection = () => (
  <div className="flex flex-col gap-4 md:flex-row justify-center items-center py-4 xl:py-8 xl:gap-0">
    <ImageWrapper />
    <TextWrapper />
  </div>
);

const ImageWrapper = () => (
  <div className="relative h-[30rem] lg:h-[28rem] w-full flex justify-center items-center order-first md:order-none">
    <div className="h-[20rem] lg:h-[22rem] w-[60%] md:w-[70%] xl:w-[50%] absolute bottom-0 right-0 md:right-2 xl:right-12 z-10">
      <Image
        src={`/images/ourvision.jpg`}
        fill
        alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
        loading="lazy"
        objectFit="cover"
        className="rounded-lg object-center"
      />
    </div>
    <div className="absolute top-0 h-[20rem] lg:h-[22rem] w-[60%] md:w-[70%] xl:w-[50%] inset-0">
      <Image
        src={`/images/hero-2.jpg`}
        fill
        alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
        loading="lazy"
        objectFit="cover"
        className="rounded-lg object-center"
      />
    </div>
  </div>
);

const TextWrapper = () => (
  <div className="w-full flex flex-col justify-center items-start">
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold text-tertiary font-display">
        Ashes Memorial Beds
      </h3>
      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        Our ashes memorial bed is an excellent choice for families looking for a
        solemn and peaceful place to bury their loved one’s ashes. When you have
        a permanent interment site, anyone who wishes to pay their respects or
        to spend some time with the deceased can easily visit.
      </p>
      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        The Cemetery on the Hill is carefully renovating the two existing ashes
        beds, and a third one is being constructed so we can cater to more
        families. Our ashes memorial beds are designed with high regard to both
        current and future interments. We guarantee our genuine commitment to
        providing everyone with the best care and service possible.
      </p>
      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        Families, relatives, and friends are welcomed to get together in The
        Cemetery to call upon the memories of their dearly departed. Or one can
        simply take the time to revel in the serenity of the area; soak in and
        appreciate its beautiful landscape, garden and water features. We take
        great pride in our work and in how we are developing and remodelling the
        cemetery into this magnificent heritage site that it deserves to be.
      </p>
    </div>
  </div>
);

const BenefitsSection = () => (
  <div className="flex flex-col gap-4">
   
    
    <h3 className="text-3xl font-semibold text-tertiary font-display">
      Ashes Memorial Walls
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      For families who want an above-the-ground ashes interment option, our ashes memorial wall is the ideal choice for a final resting place. Our ashes memorial wall is a free-standing wall designed to contain an individual’s remains, where the cremation urns are placed and then enclosed with their own memorial plaque.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Ashes walls have been a popular choice for those who want a more economical afterlife arrangement with fewer maintenance needs.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Our ashes memorial walls give this opportunity for families to have that special spot where they can visit and honour those who have passed on. It is merely one of the ways to comfort the living and remember the deceased.
    </p>
  </div>
);


const AdditionalInfoSection = () => (
  <div className="flex flex-col gap-4">

    
    <h3 className="text-3xl font-semibold text-tertiary font-display">
      Choosing Cremation over Traditional Burial
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Cremation may still be a sensitive and very personal topic for some. However, cremation is the best option for families who want to always be with their loved ones even after death. The cremation ashes can be stored in a sealed urn and provides greater flexibility for where the remains can go. For some, depending on the final wishes of the deceased or the personal preference of the family, dividing the ashes among family members is also an option.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      When it comes to affordability, choosing direct cremation is the best option. Ashes take up a smaller space in a cemetery or burial site, so it means a less expensive price compared to choosing the traditional burial.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Religious and cultural views can also dictate a person’s decisions after death. For the more environmentally conscious individuals, cremation is also the greener option. Studies suggest that cremation has up to fifty per cent less environmental impact compared to traditional burial. Ultimately, it is important to take into account all factors, including the final wishes of the deceased, when making funerary preparations.
    </p>

    <ContactInfo />
    <GeneralAdvice />
  </div>
);



const ContactInfo = () => (
  <p className="text-paragraph text-base card tracking-wide lg:text-lg">
    If you are still undecided about what type of service to get, The Cemetery
    on the Hill is here to assist you. Please do not hesitate to contact us at
    <strong className="font-extrabold text-primary">
      &nbsp;
      <Link className="underline" href="tel:08-8317-6044">
        08 8317 6044
      </Link>
      &nbsp;
    </strong>
    .
  </p>
);
const GeneralAdvice = () => (
  <>
    
    <h3 className="text-3xl font-semibold text-tertiary font-display">
      How to plan for the interment of ashes ceremony?
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      An<strong className="font-extrabold text-primary">
        &nbsp;ashes interment service&nbsp;
      </strong>usually follows the cremation and involves the family, friends, and relatives of the deceased gathering at the interment site or other chosen location where the ashes are permanently laid to rest.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      During the<strong className="font-extrabold text-primary">
        &nbsp;graveside service for burial of ashes&nbsp;
      </strong>, the family and any individual who was close to the deceased can offer their eulogies and prayers. If you are wondering about<strong className="font-extrabold text-primary">
        &nbsp;what to say at an interment of ashes&nbsp;
      </strong>service, you can always offer songs that the deceased loved to listen to when they were still alive, read their favourite poems, and even play a special tribute with some memorable pictures and videos, but you can never go wrong with a few kind words.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      If the deceased had already pre-planned their funeral arrangements, the family will not have to worry about what to do when the time comes. They may have already conveyed their final wishes with their family prior to their passing or had executed a set of written instructions so the bereaved family knows how the cremation and the funeral will transpire. Moreover, the family and friends of the departed can spend more of their time coping with grief and preparing themselves for the final farewell.
    </p>
  </>
);





const MainImage = () => (
  <div className="relative h-[28rem] w-full">
    <Image
      src={`/images/service-main.png`}
      fill
      alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
      loading="lazy"
      objectFit="cover"
      className="rounded-lg object-center"
    />
  </div>
);

const CostSection = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-3xl font-semibold text-tertiary font-display">
      Cost of Ashes Interment
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      The
      <strong className="font-extrabold text-primary">
        &nbsp;interment of ashes cost&nbsp;
      </strong>
      will vary depending on the price of the
      <strong className="font-extrabold text-primary">
        &nbsp;cemetery ashes plots
      </strong>
      . If you have already reserved a site or acquired an interment right from
      The Cemetery on the Hill, we can readily arrange the
      <strong className="font-extrabold text-primary">
        &nbsp;ashes funeral services&nbsp;
      </strong>
      and ceremony for your loved one.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Our ashes interment sites can be reserved for up to two years. Once the
      reservation period has come to an end, you may then opt to either purchase
      the Interment Rights for that site or relinquish the reservation.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Ashes Interment Rights are acquired for a duration of 25 years. If you
      wish for an extension, it is available for a minimum of five years
      thereafter. We require a five-year minimum remaining on an Ashes Interment
      Right for an interment to take place.
    </p>

    <ContactDetails />
  </div>
);



const ContactDetails = () => (
  <p className="text-paragraph text-base card tracking-wide lg:text-lg">
    For more details about the pricing of Ashes interment costs, please visit
    our
    <strong className="font-extrabold text-primary">
      &nbsp;
      <Link
        className="underline"
        href="/pricing"
      >
        Pricing Page
      </Link>
    </strong>
    . You may also send an email to
    <strong className="font-extrabold text-primary">
      &nbsp;
      <Link
        className="underline"
        href="mailto:hello@thecemeteryonthehill.com.au"
      >
        hello@thecemeteryonthehill.com.au
      </Link>
      &nbsp;
    </strong>
    or call us at
    <strong className="font-extrabold text-primary">
      &nbsp;
      <Link className="underline" href="tel:08-8317-6044">
        08 8317 6044
      </Link>
      &nbsp;
    </strong>
    to discuss your options.
  </p>
);



export default ContentSection;
