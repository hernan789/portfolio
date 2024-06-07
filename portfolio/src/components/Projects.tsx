import { projectsInfo } from "../assets/Proyects/Info";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { shift } from "../state/theme";

const Projects: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shift({ light: false }));
  }, []);
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
                  <img
                    className="mt-8 w-[350px] h-[550px] "
                    src={project.path}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className="proyectos-g grid grid-cols-1 md:grid-cols-2 gap-10 text-white font-medium  mt-10">
        <div className="border-t-2 border-white bg-black flex flex-col hover:bg-[#ff0] hover:text-black hover:p-[5%]  hover:border-0  ">
          <h3 className="pt-4">Fast Delivery</h3>
          <img
            className="mt-8 img-proyect"
            src="https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        <div className="border-t-2 border-white bg-black flex flex-col hover:bg-[#ff0] hover:text-black hover:p-[5%] hover:border-0 ">
          <h3 className="pt-4">Fast Delivery</h3>
          <img
            className="mt-8 img-proyect"
            src="https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        <div className="border-t-2 border-white bg-black flex flex-col hover:bg-[#ff0] hover:text-black hover:p-[5%]  hover:border-0  ">
          <h3 className="pt-4">Fast Delivery</h3>
          <img
            className="mt-8 img-proyect"
            src="https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        <div className="border-t-2 border-white bg-black flex flex-col hover:bg-[#ff0] hover:text-black hover:p-[5%]  hover:border-0   ">
          <h3 className="pt-4">Fast Delivery</h3>
          <img
            className="mt-8 img-proyect"
            src="https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
