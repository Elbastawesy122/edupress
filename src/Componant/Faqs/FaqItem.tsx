import { IoIosArrowDown } from "react-icons/io";
import type { DataFaqs } from "./InterfaceFaqs";

interface FaqItemProps {
  data: DataFaqs;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ data, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div
      className="box bg-[#F5F5F5] p-4 rounded-xl flex justify-between items-start gap-4 h-fit cursor-pointer"
      onClick={onToggle}
    >
      <div className="question flex flex-col gap-4">
        <h2
          className={`transition-colors duration-300 cursor-pointer ${
            isOpen ? "text-[#FF782D]" : ""
          }`}
          onClick={onToggle}
        >
          {data.question}
        </h2>

        <p
          className={`text-[#555555] transition-all duration-500 ease-in-out ${
            isOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          {data.answer}
        </p>
      </div>

      <div
        className={`iconarrow transform transition-transform duration-500 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <IoIosArrowDown
          className="text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FaqItem;
