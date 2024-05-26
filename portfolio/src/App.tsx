import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./NabvarLayout";
import NoNavbarLayout from "./NonNabvarLayout";
import Head from "./components/Head";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProyectDetail from "./components/ProjectDetail";
// import MiTurnoWeb from "./components/MiTurnoWeb";
// import Tmdb from "./components/Tmdb";
// import Training from "./components/TrainingProjects";

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
      <Route element={<NoNavbarLayout />}>
        <Route path="/project/:projectName" element={<ProyectDetail />} />
      </Route>
      {/* <Route element={<NoNavbarLayout />}>
        <Route path="/project/:fast" element={<ProyectDetail />} />
        <Route path="/project/:turno" element={<MiTurnoWeb />} />
        <Route path="/project/:tmdb" element={<Tmdb />} />
        <Route path="/project/:training" element={<Training />} />
      </Route> */}
    </Routes>
  );
}

export default App;
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nabvar from "./components/Nabvar";
// import Head from "./components/Head";
// import About from "./components/About";
// import Technologies from "./components/Technologies";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// function App() {
//   return (
//     <>
//       <Nabvar />
//       <div id="head">
//         <Head />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="technologies">
//         <Technologies />
//       </div>
//       <div id="projects">
//         <Projects />
//       </div>
//       <div id="contact">
//         <Contact />
//       </div>
//     </>
//   );
// }

// export default App;
