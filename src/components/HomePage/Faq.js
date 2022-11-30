import React from "react";
import Accordion from "../LayoutUI/Accordian";
import { faqData } from "../../utils/content";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
          {faqData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
