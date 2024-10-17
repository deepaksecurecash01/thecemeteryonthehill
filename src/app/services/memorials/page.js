import ContentSection from "@/components/services/memorials/ContentSection";

export const metadata = {
  title: "Memorials",
  description:
    "You don’t need to overburden yourself when deciding on how to memorialise your loved one. The Cemetery on The Hill is here to assist you in choosing unique and personalised memorials without distress. Learn more about our memorial options here.",
  keywords:
    "Memorials, memorialise, memorial options, unique memorial site, cremation memorials, memorials for pets, planning a tribute, monument, memorial plaques, memorial urn, cemetery monuments, memorial gardens cemetery, headstones for graves, commemorative plaque",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/services/memorials",
};

const page = () => {
  return (
    <div className="relative">
      <ContentSection />
    </div>
  );
};

export default page;
