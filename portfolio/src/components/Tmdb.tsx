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
            {project[0].detail3}
          </h2>
          <h2 className="text-black border-t-2 border-black py-2">2023</h2>
        </div>
      </div>
      <div className="grid justify-items-center mt-[10%]  ">
        <img className=" img-proyect rounded " src={project[0].path2} />
      </div>
      <div className="grid justify-items-center pb-[10%]">
        <div className="proyectos-g pt-[10%] font-medium italic">
          This was my first full stack project. It was very excited to plan the
          bolierplate, the think about an accurate schema design and test its
          accuracy when the APP began to scale. I left the frontend design to
          the end.
        </div>
      </div>
      <div className="proyectos-x pt-[7%] pl-[10%] flex flex-col 2xl:flex-row gap-14 pb-[10%]  bg-orange-500">
        <div className="proyectos-texto-derecha font-medium italic justify pt-[20%]">
          This was a solo project. I consulted the vast online bibliography of
          the technologies I was utilizing and found solutions and inspiration.
          During the process, I failed many times. It was a good test of
          resilience; sometimes you just have to accept, erase, and do it again.
        </div>
        <img className="mt-8 img-proyect rounded" src={project[0].path4} />
      </div>

      <section className="min-h-screen">
        <div className="grid justify-center pt-[5%] pb-[5%] bg-black">
          <h2 className="proyectos-h2 text-white font-medium sm:tracking-[-2px] md:tracking-[-2px] leading-[1]">
            More than a project, an experience
          </h2>
          <p className="parrafo-resaltado font-medium pt-[7%] text-white ">
            For me, this particular project was not only about proving myself,
            but it was also a good opportunity to take on the burden of building
            a whole application, researching to learn new features and skills,
            organizing my time and setting priorities, and enhancing the joy of
            playing.
          </p>
          <div className="grid justify-center pt-[5%]  pb-[5%] bg-black">
            <img
              className="mt-8 grid justify-center  img-proyect rounded"
              src={project[0].path3}
            />
          </div>
        </div>
      </section>

      <div className=" min-h-full align-middle  bg-black flex flex-col text-white text-xl font-medium ">
        <div className="flex flex-row justify-evenly py-[3%] max-[450px]:flex-col max-[450px]:grid justify-items-center  ">
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
