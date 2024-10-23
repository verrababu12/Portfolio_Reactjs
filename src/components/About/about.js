import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiSqlite, SiMongodb } from "react-icons/si";
import "./about.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img
              src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729053559/Daniel_Radcliffe_1_ew9kre.jpg"
              alt="About"
              className="about-img"
            />
          </div>
          <div className="about-col-2">
            <h1>About Me</h1>
            <p>
              Hi! I'm a passionate developer with experience in building web
              applications using modern technologies. I enjoy solving problems
              and creating dynamic, responsive websites.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => handleTabClick("skills")}
              >
                Skills
              </p>
              {/* <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => handleTabClick("education")}
              >
                Education
              </p> */}
            </div>

            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul className="skills-list">
                <li>
                  <FaHtml5 className="skill-icon html-icon" />
                  <span className="skill-percentage">HTML</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                </li>
                <li>
                  <FaCss3Alt className="skill-icon css-icon" />
                  <span>CSS</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                </li>
                <li>
                  <FaJs className="skill-icon js-icon" />
                  <span>JavaScript</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                </li>
                <li>
                  <FaPython className="skill-icon python-icon" />
                  <span>Python</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">80%</span>
                  </div>
                </li>
                <li>
                  <FaReact className="skill-icon react-icon" />
                  <span>ReactJS</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">95%</span>
                  </div>
                </li>
                <li>
                  <FaNodeJs className="skill-icon nodejs-icon" />
                  <span>NodeJS</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">95%</span>
                  </div>
                </li>
                <li>
                  <SiSqlite className="skill-icon sqlite-icon" />
                  <span>SQLite</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                </li>
                <li>
                  <SiMongodb className="skill-icon mongodb-icon" />
                  <span>MongoDB</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="skill-percentage">90%</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>2022-Present</span>
                  <br />
                  MERN Training at NxtWave Institute
                </li>
                <li>
                  <span>2020</span>
                  <br />
                  MSC from AKNU Rajhamundry
                </li>
                <li>
                  <span>2018</span>
                  <br />
                  BSC from GBR Anaparthi
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
