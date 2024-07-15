import React from "react";
import {
  AccordionItem,
  Accordion,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flexColSatrt v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give to You</span>
          <span>
            We always ready to help by providing the best service for You
            <br />
            We beleive a good palce to love can make your life better
          </span>
          <Accordion allowMultipleExpanded={false}>

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
