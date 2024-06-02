import { Link } from "react-router-dom";
import { projectsInfo } from "../assets/Proyects/Info";
import { useEffect } from "react";
function Tmdb() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const project = projectsInfo.filter((project) => {
    return "tmdb" == project.displayName;
  });
  console.log(project);
  return (
    <section className="bg-white min-h-full  text-black ">
      <h2 className="proyectos-h2 font-[550] pt-[30%] leading-none sm:tracking-[-2px] md:tracking-[-4px] text-black">
        {project[0].name}
      </h2>
      <div className="proyectos-x grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-16">
        <p className="">{project[0].description} </p>
        <div className="">
          <h2 className="text-black border-b-1 border-black pb-2">
            {project[0].detail1}
          </h2>
          <h2 className="text-black border-t-2 border-black py-2">
            {project[0].detail2}
          </h2>
          <h2 className="text-black border-t-2 border-black py-2">
            {project[0].detail3}
          </h2>
        </div>
      </div>
      <div className="grid justify-items-center mt-40">
        <img className=" img-proyect rounded " src={project[0].path2} />
      </div>
      <div className="grid justify-items-center pb-[10%]">
        <div className="proyectos-g pt-[10%] font-medium italic">
          {project[0].description}{" "}
        </div>
      </div>
      <div className="proyectos-x pt-[7%] pl-[10%] flex flex-col sm:flex-row gap-14 pb-[10%]  bg-orange-500">
        <div className="proyectos-texto-derecha font-medium italic justify pt-[20%]">
          {project[0].description}{" "}
        </div>
        <img className="mt-8 img-proyect rounded" src={project[0].path4} />
      </div>

      <section className="min-h-screen">
        <div className="grid justify-center pt-[5%] pb-[5%] bg-black">
          <h2 className="proyectos-h2 text-white font-medium sm:tracking-[-2px] md:tracking-[-2px]">
            Kill em all
          </h2>
          <p className="proyectos-texto-derecha font-medium italic justify pt-[20%] text-white "></p>
          <div className="grid justify-center pt-[5%]  pb-[5%] bg-black">
            <img
              className="mt-8 grid justify-center  img-proyect rounded"
              src={project[0].path3}
            />
          </div>
        </div>
      </section>

      <div className=" min-h-full align-middle  bg-black flex flex-col text-white text-xl font-medium ">
        <div className="flex flex-row justify-evenly py-[3%]">
          <Link to={project[0].link1}>
            <button className="w-[200px] h-[50px] text-black mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
              Frontend
            </button>
          </Link>
          <Link to={project[0].link2}>
            <button className="w-[200px] h-[50px] text-black mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
              Backend
            </button>
          </Link>
        </div>
        <footer className="flex flex-col justify-between mt-4 text-medium text-xl border-t-[1px] border-t-white pb-[5%]">
          <ul className="flex flex-row justify-evenly mt-12  ">
            <li className="hover:underline">
              <a href="https://linkedin.com/in/hernán-duarte-b70a90291">
                LinkedIn
              </a>
            </li>
            <br />
            <li className="hover:underline">
              <a href="https://github.com/hernan789">GitHub</a>
            </li>
          </ul>
          <ul className="mt-10 text-base text-center b-l-[1px] border-l-black ">
            <li>Copyright © 2024 Hernán Duarte. All Rights Reserved</li>
          </ul>

          <div></div>
        </footer>
      </div>
    </section>
  );
}

export default Tmdb;
