'use client'
import { useState } from "react";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We cater to various sectors, including finance, healthcare, retail, and manufacturing, with custom IT solutions designed to meet industry-specific needs.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, our team provides round-the-clock support to ensure your operations remain uninterrupted and your systems stay secure.",
  },
  {
    question: "Q3: How do you ensure data security?",
    answer: "We implement robust security protocols, including encryption, multi-factor authentication, and regular system audits, to protect your data.",
  },
  {
    question: "Can you help us transition to cloud-based systems?",
    answer: "Absolutely. Our cloud experts will assist with a seamless transition, ensuring minimal disruption and maximum efficiency.",
  },
  
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#080a62] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 pb-4 bg-white p-4 ${activeIndex === index ? "border-primary" : ""}`}
            >
              <button
                className="w-full text-left flex items-center justify-between text-[#080a62] font-bold text-lg md:text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span>{`${index + 1}. ${faq.question}`}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
