import BiographyTimeline from "@/components/biography/BiographyTimeline";
import BiographySlider from "@/components/ui/BiographySlider";

// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
const res = await fetch(
  `${process.env.BASE_URL}/api/biographies/${params.deceased}`
);
let biography = await res.json();

  if (Array.isArray(biography)) {
  console.log("Array true");
  biography = biography[0]; // Extract the first item if it's an array
}


  return {
    title: `${biography?.Title} Biography`,
    description: `Explore the biography of ${biography?.Title} interred at The Cemetery on The Hill. Learn more about their story and legacy as part of our historical preservation efforts.`,
    keywords: `Cemetery biographies, life stories, legacy preservation, interment biographies, The Cemetery on The Hill, cemetery historical records, ${biography?.Title},${biography?.Title} History, ${biography?.Title} Australia`,
    author: "The Cemetery on The Hill",
    canonical: `https://www.thecemeteryonthehill.com.au/biography/${params.deceased}`,
  };
}

// Async component for the page
const BiographyPage = async ({ params }) => {

const res = await fetch(
  `${process.env.BASE_URL}/api/biographies/${params.deceased}`
);
let biography = await res.json();

if (Array.isArray(biography)) {
  biography = biography[0]; // Extract the first item if it's an array
}


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
          {biography?.Title}
        </h2>
      </div>

      <div className="flex justify-center items-center py-4 lg:px-8 space-x-4 w-full h-full">
        <div className="w-[100vw] sm:w-[80vw] md:w-[85vw] lg:w-[75vw] xl:w-[80vw] 4xl:w-[70vw] 5xl:w-[60vw] px-4">
          <BiographySlider BiographyImages={biography?.Images} />
        </div>
      </div>

      {biography?.Events && (
        <BiographyTimeline BiographyData={biography?.Events} />
      )}
    </div>
  );
};

export default BiographyPage;
