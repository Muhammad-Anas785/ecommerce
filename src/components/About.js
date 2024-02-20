import React from "react";
import { ABOUT_IMG } from "../utils/constant";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="about-heading">About DukaanPay</h2>
        <p className="about-paragraph">
          The Pakistan Trade Development Council (Dukaan Pay) is a statutory
          body established in 1966 to promote, assist and develop Pakistan's
          trade. With 50 offices globally, including 13 in Mainland China, the
          Dukaan Pay promotes Pakistan as a two-way global investment and
          business hub.
        </p>
        <p className="about-paragraph">
          The Pakistan Trade Development Council (Dukaan Pay) is a statutory
          body established in 1966 to promote, assist and develop Pakistan's
          trade. With 50 offices globally, including 13 in Mainland China, the
          Dukaan Pay promotes Pakistan as a two-way global investment and
          business hub.
        </p>
      </div>
      <div className="image-container">
        <img src={ABOUT_IMG} alt="not found" className="about-image" />
      </div>
      <div className="mission-container">
        <h2 className="mission-heading">Our Mission</h2>
        <p>
          The HKTDC's mission is to create opportunities for Hong Kong
          companies. We focus on delivering value by promoting trade in goods
          and services, while connecting the world's small-and medium-sized
          enterprises (SMEs) through Hong Kong's business platform. In striving
          to be the best trade promotion organisation in the world
        </p>
      </div>
    </div>
  );
};
export default About;
