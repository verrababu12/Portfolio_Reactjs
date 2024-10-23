import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
