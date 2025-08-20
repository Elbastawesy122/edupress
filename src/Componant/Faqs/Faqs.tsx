import { useState } from "react";
import type { DataFaqs } from "./InterfaceFaqs";
import FaqItem from "./FaqItem";

interface FaqsProps {
  faqs: DataFaqs[];
}

const Faqs = ({ faqs }: FaqsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <div className="faqs px-[10%] py-15">
        <div className="title">
            <h2 className="text-3xl font-semibold mb-4">FAQs</h2>
        </div>
      <div className="boxes grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          {leftFaqs.map((data, index) => (
            <FaqItem
              key={index}
              data={data}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {rightFaqs.map((data, index) => (
            <FaqItem
              key={mid + index}
              data={data}
              isOpen={openIndex === mid + index}
              onToggle={() => toggleFaq(mid + index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
