import "./Timeline.css";
import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "5th December, 1848",
      title: "Arrived in South Australia",
      description:
        "Richard and Mary Bosworth, along with their five children, arrived in South Australia aboard the Hooghly on the 5th of December 1848. The family were listed as cabin passengers which indicated that they had the means to pay their fare to South Australia.",
    },
    {
      year: "24th August, 1848",
      title: "The family left London",
      description:
        "Richard was born in Cricklewood, Middlesex, England, and was the son of Thomas Bosworth and Ann (nee Wright). On the 8th of February 1824, Richard married Mary (nee Miller) in the Parish of St. Pancras, County of Middlesex, England. Their five children were born prior to their emigration – Charlotte aged 15, Ann aged 14, Richard Daniel aged 9, Henry aged 7 and John aged 4. The family left London on the 24th of August 1848 and travelled via Plymouth, prior to their arrival in Adelaide.",
    },
    {
      year: "May & June of 1849",
      title: "Richard Purchased Land",
      description:
        "Richard wasted no time in purchasing land and in May of 1849 he purchased three sections of land: Section 3078 consisting of 82 acres, for which he paid eighty two pounds one shilling, section 616 consisting of 77 acres, paying seventy seven pounds one shilling, section 609 consisting of 79 acres, paying seventy nine pounds one shilling. In June of 1849, Richard purchased more Crown Land, being Section 100, consisting of 79 acres, for which he paid one hundred and eighteen pounds. He also purchased Section 110 which consisted of 80 acres, paying ninety eight pounds.",
    },
    {
      year: "8th February, 1850",
      title: "Charlotte Married",
      description:
        "Richard and Mary’s daughter, Charlotte, was the first of their children to marry. Charlotte married William Gray on the 8th of February 1850. Her marriage notice indicated that she was the daughter of Richard Bosworth, Esquire, of Prior’s Court, Noarlunga.",
    },
    {
      year: "March of 1850",
      title: "Foundation Stone Laid for The Church on The Hill",
      description:
        "The foundation stone for The Church on The Hill previously known as St Philip and St James was laid by Bishop Short in March of 1850. A meeting of the subscribers for the erection of a Church at Noarlunga, was held in June 1850, when Messrs Bosworth, Hollins, and J. S. Clark were elected trustees.",
    },
    {
      year: "11th of May, 1850",
      title: "Richard Appointed as a Justice of the Peace",
      description:
        "On the 11th of May 1850 Richard was appointed as a Justice of the Peace for the Province of South Australia and on the 16th of May, Richard was appointed as a ‘New’ Magistrate, again giving his address as Prior’s Court.",
    },
    {
      year: "October of 1850",
      title: "Richard Purchased Land in the Hundred of Willunga",
      description:
        "In October of 1850, Richard purchased land in the Hundred of Willunga, being Section 369, consisting of 80 acres for which he paid eighty pounds five shillings. In December of 1850 a further Government land sale took place, and Richard purchased two Sections, being Section 5185 and 5191.",
    },
    {
      year: "February of 1851",
      title: "Judge of Wines at the Annual Exhibition",
      description:
        "Richard was appointed one of the Judges of Wines at the Annual Exhibition of the South Australian Horticultural and Agricultural Society held in February of 1851.",
    },
    {
      year: "March of 1851",
      title: "Building a New House",
      description:
        "A newspaper report from March of 1851 suggested that Richard was building a very good house, although this may have been extended from the original construction.",
    },
    {
      year: "18th of September 1851",
      title: "Formation of the Maclaren Vale Farmers’ Agricultural Association",
      description:
        "A Farmer’s Association meeting took place on the 18th of September 1851 in the Devonshire Inn at McLaren Vale. The meeting was chaired by Richard Bosworth, Esquire, J.P. The meeting resulted in the formation of the Maclaren Vale Farmers’ Agricultural Association.",
    },
    {
      year: "December of 1851",
      title: "Richard Purchased More Land",
      description:
        "In December of 1851, Richard again purchased land in the Hundred of Willunga, being Sections 318 and 319, both consisting of 80 acres for which he paid one hundred and three pounds and one hundred and one pounds.",
    },
    {
      year: "11th of July 1853",
      title: "Appointed as District Councillor",
      description:
        "A public meeting was held at the Bush Inn, Willunga, on the 11th of July 1853, for the purpose of nominating five gentlemen to act as District Councillors. Richard Bosworth was one of the five who were appointed to prepare a memorial to the Governor requesting him to proclaim the Act for the district.",
    },
    {
      year: "September of 1853",
      title: "Purchased Town Sections of Land in the County of Hindmarsh",
      description:
        "In September of 1853, Richard purchased two town sections of land in the County of Hindmarsh, Township of Goolwa. The land was one rood, which equates to approximately one quarter of an acre, being Sections 73 and 84.",
    },
    {
      year: "April of 1854",
      title: "Purchased Land in the County of Light",
      description:
        "In April of 1854, Richard purchased land in the County of Light, near the Shea-Oak Log. This land was Section 716 of 324 acres for which he paid seven hundred and ten pounds.",
    },
    {
      year: "April of 1854",
      title: "Advertisement for a Hotel",
      description:
        "In April of 1854, Richard and his son-in-law advertised for possible expressions of interest with regard to erecting, on Sections 318 and 319, and carrying on a respectable hotel at Port Onkaparinga.",
    },
    {
      year: "September of 1854",
      title: "Purchased More Land in the County of Light",
      description:
        "In September of 1854, Richard purchased three more sections of land, Section 510, consisting of 615 acres, for the sum of 870 pounds, Section 508, consisting of 312 acres, for the sum of 318 pounds. He also purchased Section 1822, consisting of 176 acres, for the sum of 230 pounds.",
    },
    {
      year: "April of 1855",
      title: "Appointed Warden of The Church on The Hill",
      description:
        "Richard was appointed a Warden of The Church on The Hill in April of 1855 and was also elected as a Synodman, a position he held for many years.",
    },
    {
      year: "23rd of July 1855",
      title: "Britannia Mining Company Meeting",
      description:
        "On the 23rd of July 1855, a meeting was held in the office of Solicitor, Mr Arthur Hardy, to determine whether or not the Britannia Mining Company should be dissolved. Richard Bosworth, who held 219 shares, attended the meeting.",
    },
    {
      year: "30th of January 1860",
      title: "Ann Married",
      description:
        "Richard and Mary’s daughter, Ann, married George Worthington, of Morphett Vale, on the 30th of January 1860. The marriage took place at Trinity Church, Adelaide.",
    },
    {
      year: "8th of June 1861",
      title: "Death of Henry Thomas",
      description:
        "On the 8th of June 1861, Richard and Mary’s second son, Henry Thomas, aged 27 years, died at Pendita, Western Plains. His cause of death was related to working in a waterless wilderness.",
    },
    {
      year: "20th of December 1862",
      title: "John Married",
      description:
        "Richard and Mary’s son, John, was married at St Paul’s Church in Melbourne on the 20th of December 1862. His wife was Kate Lucy Cramond, daughter of the late John Cramond, Esquire, of London.",
    },
    {
      year: "About 1863",
      title: "Renovations to The Church on The Hill",
      description:
        "About 1863, renovations to The Church on The Hill were undertaken when a chancel and vestry were added and a bell was procured and hung. Richard was one of the men who assisted in the renovations.",
    },
    {
      year: "8th of November 1864",
      title: "Wine Judge for the Southern Vinegrowers’ Association",
      description:
        "Richard was a Wine Judge for the Southern Vinegrowers’ Association Show of Wines held on the 8th of November 1864.",
    },
    {
      year: "3rd of March 1866",
      title: "Advertisement to Sell or Lease Land",
      description:
        "By 1866, Richard was wanting to sell or let on lease, some of his land and he placed an advertisement in the Adelaide Observer on the 3rd of March.",
    },
    {
      year: "24th of March 1866",
      title: "Another Advertisement to Lease Land",
      description:
        "On the 24th of March 1866, Richard also advertised another section of land to be let.",
    },
    {
      year: "19th of May 1866",
      title: "Death of Richard Bosworth",
      description:
        "On the 19th of May 1866, Richard died at his home, Prior’s Court. He was in his 70th year.",
    },
    {
      year: "31st of May 1868",
      title: "Death of Mary Bosworth",
      description:
        "On the 31st of May 1868, Mary died from injuries sustained in an accident when she was in the company of her son-in-law. She was also in her 70th year.",
    },
  ];

  const evenItems = timelineData.filter((item, index) => index % 2 === 0);
  const oddItems = timelineData.filter((item, index) => index % 2 !== 0);

  return (
    <section className="relative flex flex-col justify-center gap-0 items-center w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] py-6 md:py-2 mb-12 timeline">
      <div className="relative  w-full bg-black flex flex-col md:flex-row items-start justify-center h-full card">
        {" "}
        <div className=" columns-1">
          {evenItems.map((item, index) => (
            <div
              key={index}
              className="relative lg:px-[50px] md:w-[50%] w-full h-full flex justify-center items-center md:justify-center "
            >
              <div
                className={`h-10 w-10 bg-transparent border-4 border-primary bg-white rounded-full absolute top-8 z-10 circle -right-[20px]`}
              />
              <div
                className={`absolute hidden md:block bg-primary w-[50%] h-[6px] top-12 right-0`}
              />
              <div
                className={`text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] flex flex-col gap-2 ${
                  index % 2 === 0 ? "md:text-end" : "md:text-start"
                }`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary font-display">
                  {item.year}
                </h3>
                <h5 className="text-xl md:text-2xl lg:text-2xl font-bold text-primary font-display">
                  {item.title}
                </h5>
                <p className="text-base md:text-lg text-paragraph">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" columns-1">
          {oddItems.map((item, index) => (
            <div
              key={index}
              className="relative lg:px-[50px] w-full h-full flex justify-center items-center md:justify-center"
            >
              <div
                className={`h-10 w-10 bg-transparent border-4 border-primary bg-white rounded-full absolute top-8 z-10 circle -left-[20px]`}
              />
              <div
                className={`absolute hidden md:block bg-primary w-[50%] h-[6px] top-12 left-0`}
              />
              <div
                className={`text-box relative py-[20px] px-[30px] rounded-[6px] text-[15px] flex flex-col gap-2 ${
                  index % 2 === 0 ? "md:text-end" : "md:text-start"
                }`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary font-display">
                  {item.year}
                </h3>
                <h5 className="text-xl md:text-2xl lg:text-2xl font-bold text-primary font-display">
                  {item.title}
                </h5>
                <p className="text-base md:text-lg text-paragraph">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
