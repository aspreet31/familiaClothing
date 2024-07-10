import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_icon from '../Assets/hero.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>OUR NEWEST ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>For</p>
          </div>
          <p> Everyone</p>
          <p>Checkout!</p>
        </div>
        <div className="hero-latest-btn">
        <div>
            New Collection
        </div>
        <img src={arrow_icon} alt=""/>
      </div>
      </div>
      <div className="hero-right">
        <img src={hero_icon} alt="" />
      </div>
    </div>
  );
};

export default Hero;
