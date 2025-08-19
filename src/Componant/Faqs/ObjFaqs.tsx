import Faqs from "./Faqs";
import type { DataFaqs } from "./InterfaceFaqs";

const ObjFaqs = () => {
  const data: DataFaqs[] = [
    {
      question: "What Does Royalty Free Mean?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
    {
      question: "How can I use these assets?",
      answer:
        "You can use them in personal and commercial projects without additional royalties.",
    },
  ];

  return <Faqs faqs={data} />;
};

export default ObjFaqs;
