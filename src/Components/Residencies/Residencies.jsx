import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residencies.css";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flexColStart">
                <img src={item.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{item.price}</span>
                </span>

                <span className="primaryText">{item.name}</span>
                <span className="primaryText">{item.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
