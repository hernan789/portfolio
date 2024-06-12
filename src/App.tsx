import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./NabvarLayout";
import ProjectsNabvarLayout from "../src/ProjectsNavbarLayout";
import Head from "./components/Head";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FastDelivery from "./components/FastDelivery";

import MiTurnoWeb from "./components/MiTurnoWeb";
import Tmdb from "./components/Tmdb";
import Training from "./components/TrainingProjects";

function App() {
  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route
          path="/"
          element={
            <>
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
          }
        />
      </Route>
      <Route element={<ProjectsNabvarLayout />}>
        <Route path="/fast" element={<FastDelivery />} />
        <Route path="/turno" element={<MiTurnoWeb />} />
        <Route path="/tmdb" element={<Tmdb />} />
        <Route path="/training" element={<Training />} />
      </Route>
    </Routes>
  );
}

export default App;
