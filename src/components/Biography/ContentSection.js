import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContentSection = () => {
  return (
    <div className="flex justify-center items-center relative w-full overflow-hidden pb-20 gap-8">
      <Content />
    </div>
  );
};

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
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Richard and Mary’s daughter, Charlotte, was the first of their children to
      marry. Charlotte married William Gray on the 8th of February 1850. Her
      marriage notice (South Australian Gazette and Mining Journal (Adelaide, SA
      : 1847 - 1852) Saturday 9 February 1850 - Page 3) indicated that she was
      the daughter of Richard Bosworth, Esquire, of Prior’s Court, Noarlunga.
      Prior’s Court at this time would probably have been a minor dwelling as
      Richard built a more substantial home in the following year.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      The foundation stone for The Church on The Hill previously known as St
      Philip and St James was laid by Bishop Short in March of 1850. “A Meeting
      of the subscribers for the erection of a Church at Noarlunga, was held [in
      June 1850], when Messrs Bosworth, Hollins, and J. S. Clark were elected
      trustees. The church will be a very pretty structure of stone from the
      neighbouring quarries, and it is to be on an acre in the township
      presented by Mr Giles for the South Australian Company. The sum required,
      is £400, of which the Government will contribute £150, and the
      subscription list already amounts to £180.” [South Australian (Adelaide,
      SA : 1844 - 1851) Friday 28 June 1850 - Page 2] The building was dedicated
      and ready for use in May 1852.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      On the 11th of May 1850 Richard was appointed as a Justice of the Peace
      for the Province of South Australia and on the 16th of May, Richard was
      appointed as a ‘New’ Magistrate, again giving his address as Prior’s
      Court. As a Magistrate and JP, Richard sat on numerous Local Court cases.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      In October of 1850, Richard purchased land in the Hundred of Willunga,
      being Section 369, consisting of 80 acres for which he paid eighty pounds
      five shillings. In December of 1850 a further Government land sale took
      place, and Richard purchased two Sections, being Section 5185 and 5191.
      Section 5185 consisted of 76 acres for which Richard paid seventy six
      pounds one shilling and Section 5191 consisted of 80 acres for which he
      paid eighty pounds one shilling.
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
  <div className="relative w-full flex justify-start items-center ">
    <div className="h-[20rem] lg:h-[22rem] absolute w-[60%] md:w-[90%] z-10 ">
      <Image
        src={`/images/Richard-4.png`}
        fill
        alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
        loading="lazy"
        objectFit="contain"
        className="rounded-lg object-contain"
      />
    </div>
  </div>
);

const TextWrapper = () => (
  <div className="w-full flex flex-col justify-center items-start">
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold text-primary font-display">
        Richard Bosworth: Wine Judge and Builder in Early 1851
      </h3>

      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        Richard was appointed one of the Judges of Wines at the Annual
        Exhibition of the South Australian Horticultural and Agricultural
        Society held in February of 1851.
      </p>
      <p className="text-paragraph text-base card tracking-wide lg:text-lg">
        A newspaper report from March of 1851 suggested that Richard was
        “building a very good house” although this may have been extended from
        the original construction.
      </p>
    </div>
  </div>
);

const BenefitsSection = () => (
  <div className="flex flex-col gap-4">
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      A Farmer’s Association meeting took place on the 18th of September 1851 in
      the Devonshire Inn at McLaren Vale. The meeting was chaired by Richard
      Bosworth, Esquire, J.P. The meeting “many interesting subjects were
      discussed” which resulted in the formation of the “Maclaren Vale Farmers’
      Agricultural Association”. Mr Bosworth was elected President and a
      Committee was appointed to draw up rules and regulations, on Monday the
      29th of September 1851 being the first day of business. [South Australian
      Register (Adelaide, SA : 1839 - 1900) Saturday 20 September 1851 - Page 2]
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      In December of 1851, Richard again purchased land in the Hundred of
      Willunga, being Sections 318 and 319, both consisting of 80 acres for
      which he paid one hundred and three pounds and one hundred and one pounds.
      In April of 1854, Richard placed an advertisement in the South Australian
      Register addressed “TO PUBLICANS AND CAPITALISTS. THE Proprietors of
      Sections Nos. 318 and 319 are prepared to treat for Erecting and carrying
      on a Respectable Hotel at Port Onkaparinga.”
    </p>
  </div>
);

const AdditionalInfoSection = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-3xl font-semibold text-primary font-display">
      Richard Bosworth: Pioneer District Councillor and Landowner
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      A public meeting was held at the Bush Inn, Willunga, on the 11th of July
      1853, for the purpose of nominating five gentlemen to act as District
      Councillors, and to define the boundaries of the proposed district.
      Richard Bosworth was one of the five who were appointed to prepare a
      memorial to the Governor requesting him to proclaim the Act for the
      district, and recommending that the five be appointed as District
      Councillors. [Adelaide Observer (SA : 1843 - 1904) Saturday 16 July 1853 -
      Page 2]
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      In September of 1853, Richard purchased two town sections of land in the
      County of Hindmarsh, Township of Goolwa. The land was one rood, which
      equates to approximately one quarter of an acre, being Sections 73 and 84
      for which he paid thirty pounds five shillings and twenty pounds ten
      shillings respectively.
    </p>

    <GeneralAdvice />
  </div>
);

const GeneralAdvice = () => (
  <>
    <h3 className="text-3xl font-semibold text-primary font-display">
      {
        "Richard Bosworth's 1854-1866: Land Purchases, Business Endeavors, and Family Events"
      }
    </h3>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      In April of 1854, saw Richard again purchasing land, this time in the
      County of Light, near the Shea-Oak Log. This land was Section 716 of 324
      acres for which he paid seven hundred and ten pounds.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Also in April of 1854, Richard and his son-in-law advertised for possible
      expressions of interest with regard to erecting, on Sections 318 and 319,
      and carrying on a “respectable hotel at Port Onkaparinga”. Interested
      parties were asked to contact Richard Bosworth, Esq., of Prior’s Court,
      near Noarlunga or Mr William Gray of Port Onkaparinga. [South Australian
      Register (Adelaide, SA : 1839 - 1900) Friday 21 April 1854 - Page 4] There
      is no information suggesting that the hotel was ever built.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      In September of 1854, Richard purchased three more sections of land,
      Section 510, consisting of 615 acres, for the sum of 870 pounds, Section
      508, consisting of 312 acres, for the sum of 318 pounds. Both these
      sections were in the County of Light, between the Rivers Light and
      Gilbert, near Peters’ Hill Trigonometrical Station, Hundred of Gilbert. He
      also purchased Section 1822, consisting of 176 acres, for the sum of 230
      pounds, being in the County of Hindmarsh, South of the junction of the
      Mount Barker Creek and the River Bremer, on the River Bremer, Hundred of
      Strathalbyn.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Richard was appointed a Warden of The Church on The Hill in April of 1855
      and was also elected as a Synodman, synod meaning a local or provincial
      assembly of bishops and other church officials meeting to resolve
      questions of discipline or administration, a position he held for many
      years.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Richard had also purchased shares, with one such purchase being for the
      Britannia Mining Company. On the 23rd of July 1855, a meeting was held in
      the office of Solicitor, Mr Arthur Hardy, of King William street,
      Adelaide, to determine whether or not the Company should be dissolved.
      This meeting was attended by a number of men in the Colony including
      Richard Bosworth who held 219 shares. “It was proposed by Mr Richard
      Bosworth, and seconded by Mr John Hector—That Mr John Bentham Neales, Mr
      Henry Kent Hughes, and Mr John Cornish be trustees for the purpose of
      winding up the affairs of the Britannia Mining Company. Carried
      unanimously.” (Adelaide Times (SA : 1848 - 1858) Saturday 25 August 1855 -
      Page 3)
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Richard and Mary’s daughter, Ann, married George Worthington, of Morphett
      Vale, on the 30th of January 1860. The marriage took place at Trinity
      Church, Adelaide.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      On the 8th of June 1861, Richard and Mary’s second son, Henry Thomas, aged
      27 years, died at Pendita, Western Plains. Western Plains is located
      approximately 400 km north of Adelaide. It is known that Henry’s brother,
      John, had land in the far north of the State, near Lake Torrens, and Henry
      was probably working for him. Henry’s cause of death was taken from an
      entry in Manning’s Place Names of South Australia: “[John] left his
      comfortable establishment” to try and subdue a “waterless wilderness”.
      “Failing in all trials by sinking for water” . . . “where a brother’s life
      succumbed to the bad water.”
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Richard and Mary’s son, John, was married at St Paul’s Church in Melbourne
      on the 20th of December 1862. His wife was Kate Lucy Cramond, daughter of
      the late John Cramond, Esquire, of London.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      About 1863, renovations to The Church on The Hill were undertaken when a
      chancel and vestry were added and a bell was procured and hung. Richard
      was one of the men who assisted in the renovation work. Other improvements
      were also made around this time, with the earthen floor being covered in
      slate flagging and the windows being glazed with lead-lights. The roof was
      also re-slated.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      Richard was a Wine Judge for the Southern Vinegrowers’ Association Show of
      Wines held on the 8th of November 1864. This was the first show of wines
      in connection with the Association and was held in a large room adjoining
      the Alma Inn.
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      By 1866, Richard was wanting to sell or let on lease, some of his land and
      he placed on advertisement in the Adelaide Observer on the 3rd of March,
      which read: “the Northern Portion of Block 509, Hundred of Gilbert, being
      261 acres, and partly fenced. This property adjoins the square mile Block
      5I0, half of which is also to be let, and is fenced and sub-divided, with
      large dam of water, well, and other improvements. The property is within
      14 miles of Kapunda Railway Terminus. Apply to R. Bosworth, near
      Noarlunga.”
    </p>
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      On the 24th of March 1866, Richard also advertised another section of land
      “to be let”: “Section No. 56, of Block 2001, Tavistock, containing 101
      Acres of Arable and Pasture Land, frontage on the Bremer with permanent
      water. Apply to Richard Bosworth, Noarlunga.”
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
    <p className="text-paragraph text-base card tracking-wide lg:text-lg">
      On the 24th of March 1866, Richard also advertised another section of land
      “to be let”: “Section No. 56, of Block 2001, Tavistock, containing 101
      Acres of Arable and Pasture Land, frontage on the Bremer with permanent
      water. Apply to Richard Bosworth, Noarlunga.”
    </p>
  </div>
);

export default ContentSection;
