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
              Memorials In The South Of Adelaide
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-[1.75rem] text-center font-roboto text-primary">
              Peaceful Memorials at The Cemetery on The Hill
            </h2>
          </div>
          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            Life is a journey, and just like every other journey, there is an
            end—the ultimate destination. Part of life is death and losing
            someone we hold dear is one of the most difficult moments in our
            mortal existence.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Everyone has their own way of handling grief and coping with
                  the loss of a loved one. Keeping the connection with the
                  deceased as close as possible, such as holding on to their
                  cremation ashes at home for a period of time, can be a
                  significant part of someone’s method of managing their grief
                  and working towards moving on. Others will prefer to inter the
                  ashes in a memorial gardens cemetery and hold a permanent
                  memorial as their preferred way toward acceptance and healing.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  In Australia, memorialising the death of a loved one is an
                  integral part of every culture and religion. As a secular
                  country, there is a high regard for religious freedom and
                  cultural diversity. When it comes to arranging funerals, most
                  families incorporate memorials, commonly headstones for graves
                  , commemorative plaques, and some even like to go to an
                  extravagant extent creating magnificent mausoleums.
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
            <div className="flex flex-col gap-4">
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Between the 18th century and the post-World War II era, the
                majority of memorials, mostly war memorials, were erected. Even
                though there are different ideas on how a memorial should be,
                its structure, purpose, location and value, all memorials share
                a common aim of remembering those we have lost.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Families choose to memorialise their loved ones because of what
                they meant to them and how special they were, some simply do so
                because they believe it is the right thing to do, in any case
                planning a tribute is never an easy task. They want their
                memories to always remain with them, and for future generations
                to never lose the connection to their predecessors.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                What type of interment service will best suit your needs? Let’s
                start discussing your options. Call us 08 8317 6044 .
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium text-tertiary font-display ">
                Why Choose a Memorial?
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Why do people choose to have a memorial for their dearly
                departed? When the unfortunate time comes to decide on how to
                pick a memorial for a loved one, the amount of information and
                choices available can be very overwhelming to the point of
                physical and emotional exhaustion, especially when in a fragile
                state during the process of mourning a loss.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Families can get confused about what memorial option to choose,
                and how to determine what’s right and what’s appropriate. From
                memorial urns to monuments, memorial plaques to tombstones and
                gravestones, and everything else in between. It’s no wonder how
                strenuous deciding on the right memorial option can be.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                The Cemetery on the Hill is here to assist families in their
                moment of sorrow. We can walk you through the process and help
                you with all your memorial needs. If still undecided, here are
                some of the benefits of having a memorial.
              </p>
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
            <div className="relative h-96 md:h-[26rem] w-full">
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
                A Place to Mourn and Pay Tribute
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Scattering of ashes has grown popular, and it somewhat evokes a
                more poignant yet unique way of honouring the death of a loved
                one. When families choose to scatter the cremation ashes, they
                may still want to have a perpetual site as a tribute to their
                loved ones. In other most unfortunate circumstances, the body of
                the deceased may have not been recovered and returned to the
                family, like those who are missing, lost at sea or who died in
                war. Finding solace at such moments is critical for families to
                work through their grief.
              </p>

              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Holding a memorial can give an opportunity for families to have
                that special place where they can visit and remember those who
                have passed on even without a physical interment. It emphasises
                the importance of preserving the link between families and those
                who have crossed the bridge to the afterlife.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium text-tertiary font-display ">
                Easier Access For Reflection
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                When a family member keeps their loved one’s ashes at home,
                visitations may be a challenge especially for those who are not
                part of the family. They will need to ask for permission prior
                to visiting. Their preferred time to visit may not exactly
                complement the family’s available time to allow visitors.
              </p>

              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Permanent memorials provide easier access for everyone, not just
                for family and close relatives. Non-family members, such as
                friends and colleagues, who want to pay their respects to the
                deceased can have that special place that they can visit
                whenever they can.
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
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[30rem] w-full">
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
                Helping the Bereavement Process
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Dealing with death and mourning the loss of someone close to
                your heart is painful for any person, which is why a memorial
                can be an important part of one’s bereavement and journey
                towards a healthy healing process. A memorial provides a
                tangible representation of the life that was lost and can help
                promote a more positive way of achieving closure.
              </p>

              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Talking about death is difficult and can make someone feel
                uncomfortable, that is why people naturally avoid conversations
                about it. According to psychologists, taking actions to
                memorialise the deceased can help the grieving family to
                acknowledge and deal with their feelings rather than suppressing
                them.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                If you are still undecided about what type of service to get,
                The Cemetery on the Hill is here to assist you. Please do not
                hesitate to contact us at 08 8317 6044 .
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
              What are the Different Memorial Options?
            </h2>
          </div>

          <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
            {
              "When the time comes for families to decide about their loved one’s end-of-life options, it is important that they get to choose the most suitable way to memorialise their dear departed. Different cemeteries have their own memorial options to choose from."
            }
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  The Cemetery on the Hill provides families with unique and
                  personalised memorials. All of our memorial options include
                  maintenance around existing memorials, as well as providing
                  opportunities to create new memorials for your loved ones.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  On top of the memorial options, families will absolutely
                  appreciate our historic location, with its 360-degree view of
                  the natural landscape overlooking the Onkaparinga River and
                  the scenic township of Old Noarlunga.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Here in The Cemetery, we understand how dealing with the loss
                  of a loved one and coping with grief is a very personal and
                  sensitive moment. We believe how creating memorials can
                  provide consolation to bereaved families and friends.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  We are currently developing two of our main memorial options,
                  which focus on offering the naming rights for our ashes
                  memorial beds and ashes memorial walls. These options will
                  give families a chance to provide a physical memorial for
                  their loved ones with options for interments. These options
                  can still be taken advantage of even if there is no need for
                  an interment.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[38rem] w-full">
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
            <div className="relative h-96 md:h-[14rem] w-full">
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
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                Ashes Memorial Beds Naming Rights
              </h3>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Our ashes memorial beds naming rights option includes a large
                illuminated memorial name on the front of the bed in laser-cut
                rusted steel, Interment Rights for one plot in the named bed for
                99 years, the first Interment in the plot with a brass memorial
                plaque. The number of possible ashes interments will depend on
                the location and size of the container the ashes are stored in.
                Naming is subject to approval.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                  Ashes Memorial Wall Naming Rights
                </h3>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Ashes memorial wall naming rights include a large illuminated
                  memorial name on the front top of the wall in laser-cut
                  stainless steel, Interment Rights for 25 ashes remains in the
                  named wall for 99 years, this is strictly a cremation
                  memorial. A wall-length stainless steel plate will be provided
                  and engraved when needed, to accommodate 25 names with date of
                  birth and date of death. Naming is subject to approval.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Memorials can help people acknowledge loss and honour death as
                  part of everyone’s journey in this temporal world. It can
                  provide a perpetual remembrance in celebration of the life
                  they had lived.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Did your loved ones express their wishes before their final
                  breath? Did they specify what they would like done with their
                  remains when they pass on? One of these other options may be
                  the perfect choice for your memorial needs. These other
                  options include a memorial plaque with the details of who the
                  memorial is for or named after.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Some memorial options we are looking at possibly incorporating
                  throughout the Cemetery in the future are:
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[38rem] w-full">
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
            <div className="flex flex-col gap-4">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                Garden Beds
              </h3>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Our future memorial gardens will provide a private and natural
                garden setting for families to memorialise their dear departed.
                This option allows you to scatter or inter the ashes of your
                loved one in one of our garden beds and we will provide a
                customised commemorative plaque to incorporate into the garden.
              </p>
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                Water Features
              </h3>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                The Cemetery is looking to landscape some beautiful naturalistic
                water features into the landscape. We are aiming to provide some
                unique options for memorials throughout these features. These
                memorials will most likely not have interment options but
                alternative arrangements for interments around these features
                may be discussed.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                Benches
              </h3>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Memorial benches are another option for memorialising your loved
                one’s cremation ashes. Families can showcase their creativity
                when going for this type of memorial. Most memorial benches are
                made from a variety of materials and depending on the location
                may be made out of wood, stone or even granite, coming in a
                variety of colours, sizes and coatings. You can add some
                personal touches and incorporate unique memorial plaques or
                follow your loved one’s final wishes.
              </p>
                <h3 className="text-base lg:text-lg text-tertiary font-bold">
                Statue Monuments and Headstones
              </h3>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Although cemetery monuments and headstones are commonly
                associated with traditional burials, this memorial option is
                also widely used for ashes interments or remains not present.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Here in The Cemetery on the Hill, we may allow cremation ashes
                to be buried with their choice of headstones or monuments. There
                are different memorial designs and personalisations available,
                including different varieties of materials to use, with varying
                shapes and sizes, and adding customised illustrations or
                inscriptions.
              </p>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center w-full order-first xl:order-none py-8 xl:py-0">
            <div className="relative h-96 md:h-[34rem] w-full">
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
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium text-tertiary font-display ">
                Memorial Tree
              </h2>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                Did your loved one enjoy gardening or have a fascination with
                plants? If so, why not plant a memorial tree. This option will
                allow you to plant a tree, or memorialise an existing tree, to
                create a special long-lasting memorial. You may even be able to
                scatter the ashes of your loved one around the memorial tree or
                inter them below a tree before it is newly planted, providing a
                unique memorial site.
              </p>
              <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                If you are looking for a personalised memorial for your loved
                one with or without remains, get in touch with us to discuss
                what options we may have available now or in the near future to
                suit your needs. We also understand that our pets in life can be
                just as much a part of the family as a human member, for this
                reason, all memorial options can absolutely be utilised as
                memorials for pets.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full overflow-hidden relative xl:py-8 xl:gap-12">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-4 order-2 xl:order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-tertiary font-display ">
                  Memorial Costs
                </h2>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Costs will vary depending on your selected type of memorial.
                  But here at The Cemetery on the Hill, we want to make sure
                  that your loved ones are memorialised in a unique and
                  memorable way while making the process as comforting as
                  possible during a devastating time.
                </p>
                <p className="text-paragraph text-base  tracking-wide lg:text-lg">
                  Our memorials and their pricing are subject to availability.
                  Do you already have a specific type of memorial in mind? Would
                  you like to see what options are available for your loved one?
                  Feel free to connect with us through email:
                  hello@thecemeteryonthehill.com.au or call us at 08 8317 6044.
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
            <div className="relative h-96 md:h-[24rem] w-full">
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
            {`Frequently Asked Questions About Memorials`}
          </p>
        </div>
        <FaqSection />
      </div>
    </div>
  </div>
);

export default ContentSection;
