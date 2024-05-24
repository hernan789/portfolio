import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./NabvarLayout";
import NoNavbarLayout from "./NonNabvarLayout";
import Head from "./components/Head";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

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
        <Route path="/project/:projectName" element={<ProjectDetail />} />
      </Route>
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
