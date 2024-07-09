import Image from "next/image";
import "./Timeline.css";

const Timeline = () => {
 const timelineData = [
   {
     year: "February 1824",
     description:
       "Richard Bosworth was born in Cricklewood, Middlesex, England, and was the son of Thomas Bosworth and Ann (née Wright). On the 8th of February 1824, Richard married Mary (née Miller) in the Parish of St. Pancras, County of Middlesex, England.",
   },
   {
     year: "August 1848",
     description:
       "Their five children were born prior to their emigration – Charlotte aged 15, Ann aged 14, Richard Daniel aged 9, Henry aged 7, and John aged 4. The family left London on the 24th of August 1848 and travelled via Plymouth, before they arrived in Adelaide.",
   },
   {
     year: "December 1848",
     description:
       "Richard and Mary Bosworth, along with their five children, arrived in South Australia aboard the Hooghly on the 5th of December 1848. The family were listed as cabin passengers which indicated that they had the means to pay their fare to South Australia.",
   },
   {
     year: "May 1849",
     description:
       "Richard wasted no time in purchasing land and in May of 1849, he purchased three sections of land: Section 3078 consisting of 82 acres, for which he paid eighty-two pounds one shilling; Section 616 consisting of 77 acres, paying seventy-seven pounds one shilling; Section 609 consisting of 79 acres, paying seventy-nine pounds one shilling.",
   },
   {
     year: "June 1849",
     description:
       "In June of 1849, Richard purchased more Crown Land, Section 100, consisting of 79 acres, for which he paid one hundred and eighteen pounds. He also purchased Section 110 which consisted of 80 acres, paying ninety-eight pounds.",
   },
   {
     year: "February 1850",
     description:
       "Richard and Mary’s daughter, Charlotte, was the first of their children to marry. Charlotte married William Gray on the 8th of February 1850. Her marriage notice indicated that she was the daughter of Richard Bosworth, Esquire, of Prior’s Court, Noarlunga.",
   },
   {
     year: "March 1850",
     description:
       "The foundation stone for The Church on The Hill, previously known as St Philip and St James, was laid by Bishop Short in March of 1850. In June 1850, a meeting of the subscribers for the erection of a Church at Noarlunga was held, when Messrs Bosworth, Hollins, and J. S. Clark were elected trustees.",
   },
   {
     year: "May 1850",
     description:
       "On the 11th of May 1850, Richard was appointed as a Justice of the Peace for the Province of South Australia and on the 16th of May, Richard was appointed as a ‘New’ Magistrate, again giving his address as Prior’s Court.",
   },
   {
     year: "October 1850",
     description:
       "In October of 1850, Richard purchased land in the Hundred of Willunga, Section 369, consisting of 80 acres for which he paid eighty pounds five shillings.",
   },
   {
     year: "December 1850",
     description:
       "In December of 1850, a further Government land sale took place, and Richard purchased two Sections, Section 5185 and 5191. Section 5185 consisted of 76 acres for which Richard paid seventy-six pounds one shilling and Section 5191 consisted of 80 acres for which he paid eighty pounds one shilling.",
   },
   {
     year: "February 1851",
     description:
       "Richard was appointed one of the Judges of Wines at the Annual Exhibition of the South Australian Horticultural and Agricultural Society held in February of 1851.",
   },
   {
     year: "March 1851",
     description:
       "A newspaper report from March of 1851 suggested that Richard was “building a very good house” although this may have been extended from the original construction.",
   },
   {
     year: "September 1851",
     description:
       "A Farmer’s Association meeting took place on the 18th of September 1851 in the Devonshire Inn at McLaren Vale. The meeting was chaired by Richard Bosworth, Esquire, J.P. The meeting resulted in the formation of the Maclaren Vale Farmers’ Agricultural Association.",
   },
   {
     year: "December 1851",
     description:
       "In December of 1851, Richard again purchased land in the Hundred of Willunga, Sections 318 and 319, both consisting of 80 acres for which he paid one hundred and three pounds and one hundred and one pounds.",
   },
   {
     year: "May 1852",
     description:
       "The Church on The Hill was finally dedicated and declared ready for use in May of 1852.",
   },
   {
     year: "July 1853",
     description:
       "A public meeting was held at the Bush Inn, Willunga, on the 11th of July 1853, for the purpose of nominating five gentlemen to act as District Councillors. Richard Bosworth was one of the five who were appointed to prepare a memorial to the Governor requesting him to proclaim the Act for the district.",
   },
   {
     year: "September 1853",
     description:
       "In September of 1853, Richard purchased two town sections of land in the County of Hindmarsh, Township of Goolwa. The land was one rood, which equates to approximately one-quarter of an acre, being Sections 73 and 84.",
   },
   {
     year: "April 1854",
     description:
       "In April of 1854, Richard placed an advertisement in the South Australian Register addressed “TO PUBLICANS AND CAPITALISTS. THE Proprietors of Sections Nos. 318 and 319 are prepared to treat for Erecting and carrying on a Respectable Hotel at Port Onkaparinga.”",
   },
   {
     year: "April 1854",
     description:
       "In April of 1854, Richard purchased land in the County of Light, near the Shea-Oak Log. This land was Section 716 of 324 acres for which he paid seven hundred and ten pounds.",
   },
   {
     year: "September 1854",
     description:
       "In September of 1854, Richard purchased three more sections of land, Section 510, consisting of 615 acres, for the sum of 870 pounds, Section 508, consisting of 312 acres, for the sum of 318 pounds. He also purchased Section 1822, consisting of 176 acres, for the sum of 230 pounds.",
   },
   {
     year: "April 1855",
     description:
       "Richard was appointed a Warden of The Church on The Hill in April of 1855 and was also elected as a Synodman, a position he held for many years.",
   },
   {
     year: "July 1855",
     description:
       "On the 23rd of July 1855, a meeting was held in the office of Solicitor, Mr. Arthur Hardy, to determine whether or not the Britannia Mining Company should be dissolved. Richard Bosworth, who held 219 shares, attended the meeting.",
   },
   {
     year: "January 1860",
     description:
       "Richard and Mary’s daughter, Ann, married George Worthington, of Morphett Vale, on the 30th of January 1860. The marriage took place at Trinity Church, Adelaide.",
   },
   {
     year: "June 1861",
     description:
       "On the 8th of June 1861, Richard and Mary’s second son, Henry Thomas, aged 27 years, died at Pendita, Western Plains. His cause of death was related to working in a waterless wilderness.",
   },
   {
     year: "December 1862",
     description:
       "Richard and Mary’s son, John, was married at St Paul’s Church in Melbourne on the 20th of December 1862. His wife was Kate Lucy Cramond, daughter of the late John Cramond, Esquire, of London.",
   },
   {
     year: "About 1863",
     description:
       "In about 1863, the first renovations to The Church on The Hill were carried out.",
   },
   {
     year: "November 1864",
     description:
       "Richard was a Wine Judge for the Southern Vinegrowers’ Association Show of Wines held on the 8th of November 1864. This was the first show of wines in connection with the Association and was held in a large room adjoining the Alma Inn.",
   },
   {
     year: "March 1866",
     description:
       "By 1866, Richard was wanting to sell or let on lease some of his land and he placed an advertisement in the Adelaide Observer on the 3rd of March, which read: “the Northern Portion of Block 509, Hundred of Gilbert, being 261 acres, and partly fenced. This property adjoins the square mile Block 510, half of which is also to be let, and is fenced and subdivided, with a large dam of water, well, and other improvements. The property is within 14 miles of Kapunda Railway Terminus. Apply to R. Bosworth, near Noarlunga.” On the 24th of March 1866, Richard also advertised another section of land “to be let”: “Section No. 56, of Block 2001, Tavistock, containing 101 Acres of Arable and Pasture Land, frontage on the Bremer with permanent water. Apply to Richard Bosworth, Noarlunga.”",
   },
   {
     year: "May 1866",
     description:
       "Only two months later, on the 19th of May 1866, Richard died at his home, Prior’s Court. He was in his 70th year. Mary was the Executor of his estate.",
   },
   {
     year: "May 1868",
     description:
       "On the 31st of May 1868, Mary also passed. Sadly her death came about from an accident when she was in the company of her son-in-law, Mr. Gray. They were coming into the township of Littlehampton when the horse pulling the trap, shied and overturned the vehicle, trapping Mary underneath the horse. She died the following day from her injuries, also in her 70th year. Both Richard and Mary were buried in The Cemetery on The Hill.",
   },
 ];

  return (
    <>
      <section className="relative flex flex-col justify-center items-center w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mb-16 py-6 md:py-8 timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center card  ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } ${index === 0 ? "" : "md:-mt-6"}`}
          >
            <div
              className={`md:relative px-6 lg:px-[50px] w-full md:w-[50%]  flex justify-center items-center ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div
                className={`absolute  p-4 bg-primary h-10 w-10 top-5 md:top-0 z-10 rounded-full overflow-hidden flex justify-center items-center circle ${
                  index % 2 === 0 ? "-right-[22px]" : "-left-[19px]"
                }`}
              >
                <Image
                  src={`/images/${
                    index % 2 === 0 ? "left" : "right"
                  }-arrow.svg`}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                  className="rounded-md p-3 absolute hidden md:block"
                />
                <Image
                  src={`/images/${
                    index % 2 === 0 ? "right" : "right"
                  }-arrow.svg`}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                  className="rounded-md p-3 absolute md:hidden"
                />
              </div>
              <div className="text-box relative px-[40px] md:px-6 py-5 md:py-0 rounded-[6px] text-[15px] flex flex-col gap-2">
                <h3
                  className={`text-3xl md:text-4xl lg:text-4xl font-bold text-primary font-display ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.year}
                </h3>
                <p
                  className={`text-base md:text-lg text-paragraph ${
                    index % 2 === 0 ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Timeline;
