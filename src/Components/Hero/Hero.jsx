import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover
              <br />
              Most Suitable Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety that suit you very easily</span>
            <span>Forget all difficulties in finding residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button" placeholder="Search your property" >Search</button>
          </div>


          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                
              </span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
