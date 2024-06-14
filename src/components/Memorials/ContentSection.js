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
      Why Choose a Memorial?
    </h2>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Why do people choose to have a memorial for their dearly departed? When
      the unfortunate time comes to decide on how to pick a memorial for a loved
      one, the amount of information and choices available can be very
      overwhelming to the point of physical and emotional exhaustion, especially
      when in a fragile state during the process of mourning a loss.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Families can get confused about what memorial option to choose, and how to
      determine what’s right and what’s appropriate.
      <strong className="font-extrabold text-primary">
        &nbsp;From memorial urns&nbsp;
      </strong>
      to monuments, memorial plaques to tombstones and gravestones, and
      everything else in between. It’s no wonder how strenuous deciding on the
      right memorial option can be.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      The Cemetery on the Hill is here to assist families in their moment of
      sorrow. We can walk you through the process and help you with all your
      memorial needs. If still undecided, here are some of the benefits of
      having a memorial.
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
        A Place to Mourn and Pay Tribute
      </h3>
      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        Scattering of ashes has grown popular, and it somewhat evokes a more
        poignant yet unique way of honouring the death of a loved one. When
        families choose to scatter the cremation ashes, they may still want to
        have a perpetual site as a tribute to their loved ones. In other most
        unfortunate circumstances, the body of the deceased may have not been
        recovered and returned to the family, like those who are missing, lost
        at sea or who died in war. Finding solace at such moments is critical
        for families to work through their grief.
      </p>
      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        Holding a memorial can give an opportunity for families to have that
        special place where they can visit and remember those who have passed on
        even without a physical interment. It emphasises the importance of
        preserving the link between families and those who have crossed the
        bridge to the afterlife.
      </p>
    </div>
  </div>
);

const BenefitsSection = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-3xl font-semibold text-tertiary font-display">
      Easier Access For Reflection
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      When a family member keeps their loved one’s ashes at home, visitations
      may be a challenge especially for those who are not part of the family.
      They will need to ask for permission prior to visiting. Their preferred
      time to visit may not exactly complement the family’s available time to
      allow visitors.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Permanent memorials provide easier access for everyone, not just for
      family and close relatives. Non-family members, such as friends and
      colleagues, who want to pay their respects to the deceased can have that
      special place that they can visit whenever they can.
    </p>
    
  </div>
);


const AdditionalInfoSection = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-3xl font-semibold text-tertiary font-display">
      Helping the Bereavement Process
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Dealing with death and mourning the loss of someone close to your heart is
      painful for any person, which is why a memorial can be an important part
      of one’s bereavement and journey towards a healthy healing process. A
      memorial provides a tangible representation of the life that was lost and
      can help promote a more positive way of achieving closure.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Talking about death is difficult and can make someone feel uncomfortable,
      that is why people naturally avoid conversations about it. According to
      psychologists,
      <strong className="font-extrabold text-primary">
        &nbsp;
        <Link
          target="_blank"
          className="underline"
          href="https://positivepsychology.com/grief-counseling/"
        >
          taking actions to memorialise the deceased
        </Link>
        &nbsp;
      </strong>
      can help the grieving family to acknowledge and deal with their feelings
      rather than suppressing them.
    </p>

    <ContactInfo />
    <GeneralAdvice />
    <Description />
    <Summary />
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
      What are the Different Memorial Options?
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      When the time comes for families to decide about their loved one’s
      end-of-life options, it is important that they get to choose the most
      suitable way to
      <strong className="font-extrabold text-primary">
        &nbsp;memorialise&nbsp;
      </strong>
      their dear departed. Different cemeteries have their own<strong className="font-extrabold text-primary">
        &nbsp;memorial options&nbsp;
      </strong>
      to choose from.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      The Cemetery on the Hill provides families with unique and personalised
      memorials. All of our memorial options include maintenance around existing
      memorials, as well as providing opportunities to create new<strong className="font-extrabold text-primary">
        &nbsp;memorials for your loved ones.
      </strong>
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      On top of the memorial options, families will absolutely appreciate our
      historic location, with its 360-degree view of the natural landscape
      overlooking the Onkaparinga River and the scenic township of Old
      Noarlunga.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Here in The Cemetery, we understand how dealing with the loss of a loved
      one and coping with grief is a very personal and sensitive moment. We
      believe how creating memorials can provide consolation to bereaved
      families and friends.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      We are currently developing two of our main memorial options, which focus
      on offering the naming rights for our ashes memorial beds and ashes
      memorial walls. These options will give families a chance to provide a
      physical memorial for their loved ones with options for interments. These
      options can still be taken advantage of even if there is no need for an
      interment.
    </p>
  </>
);


const Description = () => (
  <div className="flex flex-col gap-4">
    <h4 className="text-2xl font-semibold text-tertiary font-display mt-8">
      Ashes Memorial Beds Naming Rights
    </h4>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Our ashes memorial beds naming rights option includes a large illuminated
      memorial name on the front of the bed in laser-cut rusted steel, Interment
      Rights for one plot in the named bed for 99 years, the first Interment in
      the plot with a brass memorial plaque. The number of possible ashes
      interments will depend on the location and size of the container the ashes
      are stored in. Naming is subject to approval.
    </p>

    <h4 className="text-2xl font-semibold text-tertiary font-display mt-8">
      Ashes Memorial Wall Naming Rights
    </h4>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Ashes memorial wall naming rights include a large illuminated memorial
      name on the front top of the wall in laser-cut stainless steel, Interment
      Rights for 25 ashes remains in the named wall for 99 years, this is
      strictly a
      <strong className="font-extrabold text-primary">
        &nbsp;cremation memorial
      </strong>
      . A wall-length stainless steel plate will be provided and engraved when
      needed, to accommodate 25 names with date of birth and date of death.
      Naming is subject to approval.
    </p>

    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Memorials can help people acknowledge loss and honour death as part of
      everyone’s journey in this temporal world. It can provide a perpetual
      remembrance in celebration of the life they had lived.
    </p>

    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Did your loved ones express their wishes before their final breath? Did
      they specify what they would like done with their remains when they pass
      on? One of these other options may be the perfect choice for your memorial
      needs. These other options include a memorial plaque with the details of
      who the memorial is for or named after.
    </p>

    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Some memorial options we are looking at possibly incorporating throughout
      the Cemetery in the future are:
    </p>

    <h4 className="text-2xl font-semibold text-tertiary font-display mt-8">
      Garden Beds
    </h4>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Our future memorial gardens will provide a private and natural garden
      setting for families to memorialise their dear departed. This option
      allows you to scatter or inter the ashes of your loved one in one of our
      garden beds and we will provide a customised
      <strong className="font-extrabold text-primary">
        &nbsp;commemorative plaque&nbsp;
      </strong>
      to incorporate into the garden.
    </p>

    <h4 className="text-2xl font-semibold text-tertiary font-display mt-8">
      Water Features
    </h4>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      The Cemetery is looking to landscape some beautiful naturalistic water
      features into the landscape. We are aiming to provide some unique options
      for memorials throughout these features. These memorials will most likely
      not have interment options but alternative arrangements for interments
      around these features may be discussed.
    </p>

    <h4 className="text-2xl font-semibold text-tertiary font-display mt-8">
      Benches
    </h4>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Memorial benches are another option for memorialising your loved one’s
      cremation ashes. Families can showcase their creativity when going for
      this type of memorial. Most memorial benches are made from a variety of
      materials and depending on the location may be made out of wood, stone or
      even granite, coming in a variety of colours, sizes and coatings. You can
      add some personal touches and incorporate unique
      <strong className="font-extrabold text-primary">
        &nbsp;memorial plaques&nbsp;
      </strong>
      or follow your loved one’s final wishes.
    </p>

    <h4 className="text-2xl font-semibold text-tertiary font-display ">
      Statue Monuments and Headstones
    </h4>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Although
      <strong className="font-extrabold text-primary">
        &nbsp;cemetery monuments&nbsp;
      </strong>
      and headstones are commonly associated with traditional burials, this
      memorial option is also widely used for ashes interments or remains not
      present.
    </p>

    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Here in The Cemetery on the Hill, we may allow cremation ashes to be
      buried with their choice of headstones or
      <strong className="font-extrabold text-primary">&nbsp;monuments</strong>.
      There are different memorial designs and personalisations available,
      including different varieties of materials to use, with varying shapes and
      sizes, and adding customised illustrations or inscriptions.
    </p>
  </div>
);

const Summary = () => (
  <div className="flex flex-col gap-4">


    <h3 className="text-3xl font-semibold text-tertiary font-display">
      Memorial Tree
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Did your loved one enjoy gardening or have a fascination with plants? If
      so, why not plant a memorial tree. This option will allow you to plant a
      tree, or memorialise an existing tree, to create a special long-lasting
      memorial. You may even be able to scatter the ashes of your loved one
      around the memorial tree or inter them below a tree before it is newly
      planted, providing a<strong className="font-extrabold text-primary">
        &nbsp;unique memorial site
      </strong>.
    </p>

    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      If you are looking for a personalised memorial for your loved one with or
      without remains, get in touch with us to discuss what options we may have
      available now or in the near future to suit your needs. We also understand
      that our pets in life can be just as much a part of the family as a human
      member, for this reason, all memorial options can absolutely be utilised
      as<strong className="font-extrabold text-primary">
        &nbsp;memorials for pets
      </strong>.
    </p>
  </div>
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
      Memorial Costs
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Costs will vary depending on your selected type of memorial. But here at
      The Cemetery on the Hill, we want to make sure that your loved ones are
      memorialised in a unique and memorable way while making the process as
      comforting as possible during a devastating time.
    </p>

    <ContactDetails />
  </div>
);



const ContactDetails = () => (
  <p className="text-paragraph text-base card tracking-wide lg:text-lg">
    Our memorials and their pricing are subject to availability. Do you already
    have a specific type of memorial in mind? Would you like to see what options
    are available for your loved one? Feel free to connect with us through
    email:
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
    </strong>
.  </p>
);



export default ContentSection;
