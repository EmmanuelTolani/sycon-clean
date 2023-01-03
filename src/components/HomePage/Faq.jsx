import React, { useState } from "react";
import Accordion from "../LayoutUI/Accordian";
import { faqData } from "../../utils/faq-data";
import { faqD } from "../../utils/content";
const Faq = (props) => {
  // const [data, setData] = useState("");
  // if (props.data == "full") {
  //   setData(faqD);
  // } else {
  //   setData(faqData);
  // }
  return (
    <div className="faq">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
          <Accordion title="What’s Included In A Regular Clean?" content="">
            <p>Included:</p>
            <ol>
              <li>All exterior surfaces in all rooms</li>
              <li>Floors are vacuumed and mopped</li>
              <li>
                Bathroom (complete toilet clean, shower, handles, tub, drain)
              </li>
              <li>Bedroom shelving, nightstands, bed frame, tidy up bed)</li>
              <li>All window sills</li>
            </ol>
            <p>Not Included:</p>
            <ol>
              <li>
                All Extras are not included(must be selected for an additional
                cost)
              </li>
            </ol>
          </Accordion>
          <Accordion title="What’s Included In A Deep Clean?" content="">
            <p>Included:</p>
            <ol>
              <li>Everything included in a regular clean and baseboards</li>
              <li>Light switches and door handles</li>
              <li>Detailed dusting</li>
              <li>Back splashes and faucet fixtures are polished</li>
              <li>
                Light organization of all rooms( for detailed organization
                select add on)
              </li>
              <li>Extra hour is included for high detailed area</li>
            </ol>
            <p>Not Included:</p>
            <ol>
              <li>
                All Extras are not included (must be selected for an additional
                cost)`
              </li>
            </ol>
          </Accordion>
          {props.type === "full"
            ? faqD.map(({ title, content }, index) => (
                <Accordion key={index} title={title} content={content} />
              ))
            : faqData.map(({ title, content }, index) => (
                <Accordion key={index} title={title} content={content} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
