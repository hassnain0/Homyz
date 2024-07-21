import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { BsFillChatDotsFill } from "react-icons/bs";
export const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left Side */}
        <div className="c-left">
          <span className="orangeText">Our Contacts</span>
          <br />
          <span className="primaryText">Easy to Contact Us</span>
          <br />
          <span className="secondaryText">
            We Always ready to help by providing
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              {/* First Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}  className="flexCenter icon"/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">123 124 124</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* secondMode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"></span>Chat
                    <span className="secondaryText">123 124 124</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            <div className="flexStart row">
              {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"></span>Video Call
                    <span className="secondaryText">123 124 124</span>
                  </div>
                </div>
                <div className="flexCenter button">Make Video Call Now</div>
              </div>

              {/* Fourth Mode */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"></span>Message
                    <span className="secondaryText">123 124 124</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
