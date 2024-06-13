import Image from "next/image";
import React from "react";

const ContentSection = () => {
  return (
    <div className="flex justify-center items-center relative w-full overflow-hidden py-10 gap-8">
      <div
        className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-8 max-w-[70%]">
        <div className="flex flex-col  gap-4">
          <h2 className="text-4xl font-semibold text-tertiary font-display">
            Why Choose Burial over Cremation?
          </h2>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            Traditional burial is the most common type of burial option offered
            by cemeteries. For many people, it is a matter of personal
            preference. They may cringe at the idea of being burned and having
            their body reduced to ashes. Others may only be exercising their
            religious obedience wherein cremation is still not fully supported.
          </p>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            Burial services tend to be the more traditional option, especially
            for families who gravitate more towards the conventional aspect.
            However, if you are not bound by any religious or cultural biases
            when deciding about burial vs cremation, the following points may
            convince you to choose burial.
          </p>
        </div>
        <div className="flex flex-col  gap-4">
          <h3 className="text-3xl font-semibold text-tertiary font-display">
            It provides a permanent place to visit your loved one.
          </h3>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            One of the main benefits of choosing burial is that it provides a
            permanent place to visit your loved one. Having a designated space
            in the cemetery where families, friends, and colleagues can
            commemorate those who have passed on can give peace of mind. You can
            rest easy knowing that your loved one is there and you can visit
            them whenever. Having that close proximity can help with the
            grieving process as well. It gives you that special moment when you
            visit the site—a moment to just feel connected with your loved one
            even when simply spending it in silence.
          </p>
        </div>
        <div className="flex flex-col  gap-4">
          <h3 className="text-3xl font-semibold text-tertiary font-display">
            It gives you time to properly say your goodbyes.
          </h3>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            When you opt for traditional burial, it can give you the time you
            need to properly say your farewells and leave nothing unsaid. It
            allows you to properly mourn, get closure, and deal with the stages
            of grief. You may choose to have a viewing or visitation to give
            other family members the opportunity to pay their respects,
            especially those who need to travel. The body can be embalmed,
            although this is one of the fairly uncommon burial practices in
            Australia, so you can delay the funeral. Additionally, having a
            meaningful ceremony and witnessing the lowering of the coffin into
            the ground can give closure. It signifies the finality of death,
            allows you to embrace the loss with your mind and with your heart,
            and leads to a healthy acceptance and eventually towards healing.
          </p>
        </div>
        <div className="flex flex-col  gap-4">
          <h3 className="text-3xl font-semibold text-tertiary font-display">
            It’s more intimate and can be personalised.
          </h3>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            For most people, thinking about a funeral automatically involves
            choosing the casket followed by arranging the burial ceremony.
            Burial is considered as the standard method of honouring the dearly
            departed. More people are accustomed to and comfortable with it.
            Families can choose what type of cemetery plot they prefer, whether
            it’s a single-depth burial plot, double-depth burial plot, family
            plot, mausoleum, columbarium, or private estate. It can be
            personalised, depending on the rules and regulations at your chosen
            cemetery. You have the opportunity to choose the type of casket and
            to design a unique memorial or headstone as a permanent remembrance
            of the life they once lived.
          </p>
        </div>
        <div className="flex flex-col  gap-4">
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            If you are still undecided about what type of service to get, The
            Cemetery on the Hill is here to assist you. Please do not hesitate
            to contact us at 08 8317 6044.
          </p>
          <div className="flex justify-center items-center py-8">
            <div className="relative h-[36rem] w-full flex justify-center items-center">
              <div className="  h-96 md:h-[28rem] w-[70%] absolute bottom-0 inset-x-36 z-10">
                <Image
                  src={`/images/ourvision.jpg`}
                  fill
                  alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
                  loading="lazy"
                  objectFit="cover"
                  className=" rounded-lg object-center"
                />
              </div>
              <div className="absolute top-0 h-96 md:h-[28rem] w-[70%]">
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
            <div className="w-full flex flex-col justify-center items-start">
              <div className="w-full flex flex-col justify-center items-center gap-4">
                
              </div>
            </div>
          </div>

          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            We offer a traditional burial option which is the perfect way to
            commemorate the passing of your loved one. With our future focus
            being predominantly on ashes interments, only a few burial plots are
            available.
          </p>
        </div>
        <div className="flex flex-col  gap-4">
          <h3 className="text-3xl font-semibold text-tertiary font-display">
            How Much Does Burial Cost?
          </h3>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            When buying a burial plot, the burial cost will vary depending on
            the available space, the location of the burial plots, and the plot
            size. If you have already reserved a site or acquired an interment
            right from The Cemetery on the Hill, we can readily arrange the
            burial assistance and ceremony for your loved one.
          </p>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            Our burial sites can be reserved for up to two years. Once the
            reservation period has come to an end, you may then opt to either
            purchase the Interment Rights for that site or relinquish the
            reservation. Burial Interment Rights are acquired for a duration of
            50 years. If you wish for an extension, it is available for a
            minimum of five years thereafter.
          </p>
          <p className="text-paragraph text-base card tracking-wide lg:text-lg">
            For more details about the pricing of individual plots and interment
            costs, please visit our Pricing page. You may also send an email to
            hello@thecemeteryonthehill.com.au or call us at 08 8317 6044 to
            discuss your options.
          </p>
        </div>
        <div className="relative h-[28rem] w-full">
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
  );
};

export default ContentSection;
