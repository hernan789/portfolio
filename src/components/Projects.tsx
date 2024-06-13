import { projectsInfo } from "../assets/Proyects/Info";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <section className="bg-black min-h-full text-white pb-10">
      <h2 className="proyectos-h2 font-[550] leading-none sm:tracking-[-2px] md:tracking-[-4px]  text-white">
        Projects
      </h2>
      <div className="proyectos-g grid grid-cols-1 md:grid-cols-2 gap-10 text-white font-medium  mt-10 pb-[5%]">
        {projectsInfo.map((project: any, i: any) => {
          return (
            <Link to={`/${project.displayName}`}>
              <div
                key={i}
                className="border-t-2 border-white bg-black flex flex-col hover:bg-[#ff0] hover:text-black hover:p-[5%]  hover:border-0  "
              >
                <h3 className="pt-4">{project.name}</h3>
                <div className="grid justify-items-center">
                  <img className="mt-8" src={project.path} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
