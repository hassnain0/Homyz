import React from "react";
import "./GetStarted.css";

export const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexCOlCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <br />
          <span className="secondaryText" style={{ color: "white" }}>
            Subscribe and find super attractive price quotes from us
            <br />
            Find your residence soon
          </span>
          <br />
          <button className="button">
          <a href="mailto:NathanDrakeX@gmail.com">Get Started</a>
        </button>
        </div>
        
      </div>
    </section>
  );
};
