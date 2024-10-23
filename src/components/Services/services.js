import React from "react";
import "./services.css";
import { FaCode, FaCrop } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div className="service-item">
            <FaCode className="service-icon" />
            <h2>Web Design</h2>
            <p>
              "I create visually appealing and user-friendly websites that work
              seamlessly on all devices. My designs focus on modern, responsive
              layouts that enhance user engagement. My goal is to turn ideas
              into functional, eye-catching websites."
            </p>
            <a
              href="https://webdesign-for-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="services-btn"
            >
              Learn More
            </a>
          </div>
          <div className="service-item">
            <FaCrop className="service-icon" />
            <h2>UI/UX Design</h2>
            <p>
              "My UI/UX design approach centers on creating intuitive and
              engaging user experiences. I design interfaces that guide users
              smoothly and effectively, blending aesthetics with usability."
            </p>
            <a
              href="https://ui-ux-design-for-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="services-btn"
            >
              Learn More
            </a>
          </div>
          <div className="service-item">
            <FaAppStore className="service-icon" />
            <h2>App Design</h2>
            <p>
              "I design apps that prioritize user experience, combining
              functionality with clean, appealing visuals. My focus is on
              creating intuitive interfaces that enhance user interaction."
            </p>
            <a
              href="https://app-design-for-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="services-btn"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
