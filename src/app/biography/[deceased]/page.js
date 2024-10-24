import BiographyTimeline from "@/components/biography/BiographyTimeline";
import BiographySlider from "@/components/ui/BiographySlider";

// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
const res = await fetch(
  `${process.env.BASE_URL}/api/person/${params.deceased}`
);

  const data = await res.json();

  return {
    title: `${data?.FirstName} ${data?.LastName} Biography`,
    description: `Explore the biography of ${data?.FirstName} ${data?.LastName} interred at The Cemetery on The Hill. Learn more about their story and legacy as part of our historical preservation efforts.`,
    keywords: `Cemetery biographies, life stories, legacy preservation, interment biographies, The Cemetery on The Hill, cemetery historical records, ${data?.FirstName} ${data?.LastName}, ${data?.LastName} History, ${data?.LastName} Australia`,
    author: "The Cemetery on The Hill",
    canonical: `https://www.thecemeteryonthehill.com.au/biography/${params.deceased}`,
  };
}

// Async component for the page
const BiographyPage = async ({ params }) => {
 const res = await fetch(
   `${process.env.BASE_URL}/api/person/${params.deceased}`
 );

  const data = await res.json();

  return (
    <div className="flex flex-col items-center justify-center relative w-full overflow-hidden py-10 gap-8">
      <div
        className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[90%] md:max-w-[75%] xl:max-w-[60%] flex flex-col justify-center items-center gap-8">
        <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
          {data?.FirstName + " " + data?.LastName}
        </h2>
      </div>

      <div className="flex justify-center items-center py-4 lg:px-8 space-x-4 w-full h-full">
        <div className="w-[100vw] sm:w-[80vw] md:w-[85vw] lg:w-[75vw] xl:w-[80vw] 4xl:w-[70vw] 5xl:w-[60vw] px-4">
          <BiographySlider BiographyImages={data?.BiographyImages} />
        </div>
      </div>

      {data?.BiographyData && (
        <BiographyTimeline BiographyData={data?.BiographyData} />
      )}
    </div>
  );
};

export default BiographyPage;
