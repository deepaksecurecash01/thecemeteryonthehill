import React from "react";

const FaqSection = () => {
const faqData = [
  {
    question:
      "What types of memorials are available at The Cemetery on The Hill?",
    answer:
      "We offer a range of memorial options, including ashes memorial beds, ashes memorial walls, garden beds, water feature memorials, memorial benches, statue monuments, and headstones. Each option can be personalised to reflect the unique life of your loved one.",
  },
  {
    question: "Can I create a memorial even if there is no interment?",
    answer:
      "Yes, we understand that not all families choose interment. Whether your loved one’s ashes have been scattered or their body was not recovered, we offer memorial options that provide a lasting tribute in their memory.",
  },
  {
    question: "What is the difference between ashes memorial beds and walls?",
    answer:
      "Ashes memorial beds offer a tranquil, landscaped environment for the interment of ashes, often marked by a commemorative plaque. Ashes memorial walls, on the other hand, allow for an above-ground resting place where urns are securely placed within the wall, with an engraved plaque bearing the name of the deceased.",
  },
  {
    question: "Can memorials be personalised?",
    answer:
      "Absolutely. All of our memorial options offer personalisation, from custom plaques to engraved stones. You can work closely with our team to create a tribute that reflects the unique personality and life of your loved one.",
  },
  {
    question: "What is the cost of memorials?",
    answer:
      "Memorial costs vary depending on the type of memorial chosen and any personalisation. We are committed to offering transparent pricing and will provide detailed information based on your selections. Please contact us at 08 8317 6044 or email us at hello@thecemeteryonthehill.com.au to discuss pricing options.",
  },
  {
    question: "Why should I choose a memorial at The Cemetery on The Hill?",
    answer:
      "Our historic cemetery offers a peaceful, scenic setting with a deep connection to the past. Memorials at The Cemetery on The Hill provide families with a lasting tribute in a location that combines natural beauty with rich history.",
  },
  {
    question: "Can I memorialise a pet at The Cemetery on The Hill?",
    answer:
      "Yes, we offer memorial options for pets as well, recognising their important place in our lives. All of our memorial options, including benches, plaques, and trees, can be used to create a lasting tribute to your cherished pet.",
  },
  {
    question: "Why is a permanent memorial important?",
    answer:
      "A permanent memorial provides a dedicated place for family and friends to visit, reflect, and honour their loved one. It also ensures that future generations can maintain a connection to their family history.",
  },
  {
    question: "How do I start the process of selecting a memorial?",
    answer:
      "You can begin by contacting us directly at 08 8317 6044 or sending us an email at hello@thecemeteryonthehill.com.au. Our compassionate team will guide you through the available options and help you choose the most fitting tribute for your loved one.",
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
