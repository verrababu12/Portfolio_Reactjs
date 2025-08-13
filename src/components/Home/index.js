import React from "react";
import TypeWriter from "../TypeWriter/index.js";
import "./index.css";

const Home = () => {
  return (
    <header className="home-hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            Hi, I'm <span className="name">Veeru</span> 👋
          </h1>
          <h2 className="typewriter-heading">
            <TypeWriter
              words={[
                "I am a Full Stack Developer",
                "I am a Backend Developer",
                "I am a Frontend Developer",
                "I build scalable web apps",
              ]}
              typingSpeed={90}
              deleteSpeed={50}
              delayBetween={1400}
            />
          </h2>
          <div className="cta-row">
            <a
              className="btn"
              href="https://drive.google.com/file/d/1qv52puMwy0xrNyQqbM2j95C_pcdDvC8z/view?usp=sharing"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://res.cloudinary.com/dpd55e6mf/image/upload/v1732844360/portfolioimage_jjzaye.png"
            alt="profile"
            className="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Home;

// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import "./intro.css";

// const Intro = () => {
//   const [text] = useTypewriter({
//     words: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
//     loop: {},
//     typeSpeed: 120,
//     deleteSpeed: 80,
//   });
//   return (
//     <section id="intro">
//       <div className="introContent">
//         <span className="hello">Hello,</span>
//         <span className="introText">
//           I'm<span className="introName">Veeru</span>
//           <br /> <span className="type-text">{text}</span>
//           <span>
//             <Cursor cursorStyle="|" />
//           </span>
//         </span>
//         <p className="introPara">
//           I am a skilled and passionate web designer with experience in creating
//           visually appearing and user-friendly websites.
//         </p>
//       </div>
//       <img
//         src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729053560/Daniel_Radcliffe_dn1n6s.jpg"
//         alt="Profile"
//         className="bg"
//       />
//     </section>
//   );
// };

// export default Intro;
