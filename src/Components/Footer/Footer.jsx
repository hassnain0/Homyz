import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container innerWidth flexCenter">
        {/* Left Side */}

        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our Vision is to make all people <br />
            the best place to live for them
          </span>
        </div>
        {/* Right Side */}

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New york, FL 5471, USA</span>

          <div className="flexCenter f-menu">
            <span>Property</span><span>Service</span><span>Product</span><span>About US</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
