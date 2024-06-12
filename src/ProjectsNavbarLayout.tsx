import { Outlet } from "react-router-dom";
import ProjectsNavbar from "../src/components/ProjectsNavbar";

function ProjectsNavbarLayout() {
  return (
    <>
      <ProjectsNavbar />
      <Outlet />
    </>
  );
}

export default ProjectsNavbarLayout;
