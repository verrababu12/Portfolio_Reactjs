import React from "react";
import Navbar from "./components/NavBar/index.js";
import Home from "./components/Home/index.js";
import About from "./components/About/index.js";
import Services from "./components/Services/index.js";
import Skills from "./components/Skills/index.js";
import Education from "./components/Education/index.js";
import Projects from "./components/Projects/index.js";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

// import NavBar from "./components/NavBar/navbar";
// import Intro from "./components/Intro/intro";
// import About from "./components/About/about";
// import Services from "./components/Services/services";
// import Portfolio from "./components/Portfolio/portfolio";
// import Contact from "./components/Contact/contact";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <section id="intro">
//         <Intro />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="services">
//         <Services />
//       </section>
//       <section id="portfolio">
//         <Portfolio />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default App;
