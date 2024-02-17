import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="first-div">
        <div className="main-title">
          <h2 className="title-bold">
            Your Gateway to Excellence in Education!
          </h2>
          <p className="paragraph-hero">Sign Up Now for a transformative Learning Experience</p>
        </div>
        <button className="button-hero">
          <img src="../src/assets/icons/Stars.svg" />
          <span>Start Learning</span>
        </button>
      </div>
      <div className="img-tab">
        <img className="blueImg" src="../src/assets/icons/headline-img.svg" />
      </div>
    </div>
  );
};

export default Hero;
