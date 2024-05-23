// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "./components/Nabvar";
import Head from "./components/Head";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Nabvar />
      <div id="head">
        <Head />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
