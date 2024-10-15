import React from "react";

const FaqSection = () => {
const faqData = [
  {
    question:
      "What types of burial plots are available at The Cemetery on The Hill?",
    answer:
      "We offer several types of burial plots, including single-depth plots, double-depth plots, and family plots. Each plot is situated within our historic grounds, providing a serene and respectful resting place for your loved ones.",
  },
  {
    question: "How can I purchase a burial plot?",
    answer:
      "To purchase a burial plot, you can contact our team directly. We will guide you through the available options, provide pricing information, and help you select the plot that best suits your needs. You can also reserve a plot in advance, ensuring peace of mind for the future.",
  },
  {
    question: "Why is there a limited number of burial plots available?",
    answer:
      "We are a heritage-listed site with a strong focus on preserving our historic grounds. As we continue to restore and maintain The Cemetery on The Hill, our future focus is predominantly on ashes interments. Ashes interments offer a meaningful and space-efficient way to honour your loved ones, allowing more families to find a place of remembrance within our grounds.",
  },
  {
    question: "Are there any burial plots available for immediate use?",
    answer:
      "Yes, we have a limited number of burial plots available for immediate use. Given our focus on ashes interments, these plots are offered on a first-come, first-served basis. We recommend contacting us as soon as possible to discuss availability.",
  },
  {
    question: "Can I visit the cemetery before deciding on a burial plot?",
    answer:
      "Absolutely. We encourage families to visit The Cemetery on The Hill to view our available plots and experience the peaceful surroundings. Our team is happy to arrange a guided tour and answer any questions you may have during your visit.",
  },
  {
    question:
      "What are the costs associated with a burial at The Cemetery on The Hill?",
    answer:
      "The cost of a burial at The Cemetery on The Hill depends on several factors, including the type of plot, its location within the cemetery, and any additional services you choose. We offer transparent pricing and can provide you with a detailed quote based on your specific needs.",
  },
];


  return (
    <div className="overflow-hidden w-full bg-white shadow-xl my-10 rounded-xl">
      <div className="grid divide-y divide-secondary/30 mx-auto px-10 py-5">
        {faqData.map((faq, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className=" font-roboto text-tertiary">
                  {faq.question}
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-paragraph mt-3 group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
