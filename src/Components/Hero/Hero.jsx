import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup/build";


export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Discover
              <br />
              Most Suitable Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search your property" style={{fontSize:15,fontFamily:"Poppins"}}/>
            <button className="button" >
              Search
            </button>
          </div>

          <div className="flexColCenter stats">
    
            <div className="flexColCenter stat">
              <span><CountUp start={8800} end={9000} duration={4}/>
              <span className="plusbutton">+</span>
              </span>
              <span className="secondarytext">Premuim Products</span>
            </div>

            <div className="flexColCenter stat">
              <span><CountUp start={1950} end={2000} duration={4}/>
              <span className="plusbutton">+</span>
              </span>
              <span className="secondarytext">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp end={28} duration={4}/>
              <span className="plusbutton">+</span>
              </span>
              <span className="secondarytext">Branches</span>
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
