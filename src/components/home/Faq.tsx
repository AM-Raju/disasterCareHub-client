import Container from "../../layouts/Container";
import QnA from "../faq/QnA";

const Faq = () => {
  const faqData = [
    {
      question: "What is the purpose of your company?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sed ea quia, eum accusantium sit nemo aut vero deleniti consequatur sint, voluptate delectus et. Atque, architecto commodi perferendis natus magnam nesciunt porro, dicta hic ipsa laudantium neque obcaecati eius numquam voluptatum et eum totam quam alias! Corporis maxime consequuntur blanditiis?",
    },
    {
      question: "How do I create an account?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sed ea quia, eum accusantium sit nemo aut vero deleniti consequatur sint, voluptate delectus et. Atque, architecto commodi perferendis natus magnam nesciunt porro, dicta hic ipsa laudantium neque obcaecati eius numquam voluptatum et eum totam quam alias! Corporis maxime consequuntur blanditiis?",
    },
    {
      question: "Can I supply aid in multiple locations?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sed ea quia, eum accusantium sit nemo aut vero deleniti consequatur sint, voluptate delectus et. Atque, architecto commodi perferendis natus magnam nesciunt porro, dicta hic ipsa laudantium neque obcaecati eius numquam voluptatum et eum totam quam alias! Corporis maxime consequuntur blanditiis?",
    },
    {
      question: "What security measures are in place to protect my aid?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sed ea quia, eum accusantium sit nemo aut vero deleniti consequatur sint, voluptate delectus et. Atque, architecto commodi perferendis natus magnam nesciunt porro, dicta hic ipsa laudantium neque obcaecati eius numquam voluptatum et eum totam quam alias! Corporis maxime consequuntur blanditiis?",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sed ea quia, eum accusantium sit nemo aut vero deleniti consequatur sint, voluptate delectus et. Atque, architecto commodi perferendis natus magnam nesciunt porro, dicta hic ipsa laudantium neque obcaecati eius numquam voluptatum et eum totam quam alias! Corporis maxime consequuntur blanditiis?",
    },
  ];

  return (
    <Container>
      <div className="mt-96 lg:mt-16 mb-32">
        <h1 className=" pt-8 text-6xl font-poppins font-bold text-center">FAQs</h1>
        {/* Accordion */}
        <div className="lg:max-w-[70%] mx-auto mt-10">
          {faqData.map((faq, index) => (
            <QnA key={index} faq={faq}></QnA>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
