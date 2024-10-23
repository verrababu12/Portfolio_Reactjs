import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./intro.css";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName">Veeru</span>
          <br /> <span className="type-text">{text}</span>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </span>
        <p className="introPara">
          I am a skilled and passionate web designer with experience in creating
          visually appearing and user-friendly websites.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729053560/Daniel_Radcliffe_dn1n6s.jpg"
        alt="Profile"
        className="bg"
      />
    </section>
  );
};

export default Intro;
