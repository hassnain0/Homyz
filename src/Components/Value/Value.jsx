import React, { useState } from "react";
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
import data from "../../utils/accordion";

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
          <br />
          <span className="primaryText text">Value We Give to You</span>
          <br />
          <span>
            We always ready to help by providing the best service for You
            <br />
            We beleive a good palce to love can make your life better
          </span>
          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              const [className,setClassName]=useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}` } key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
