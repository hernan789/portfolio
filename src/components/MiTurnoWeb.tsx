import { projectsInfo } from "../assets/Proyects/Info";
import { useEffect } from "react";

function MiTurnoWeb() {
  const project = projectsInfo.filter((project) => {
    return "turno" == project.displayName;
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  console.log(project);
  return (
    <section className="bg-[#ff0] min-h-full  text-black ">
      <h2 className="proyectos-h2 font-[550] pt-[30%] leading-none sm:tracking-[-2px] md:tracking-[-4px] text-black">
        {project[0].name}
      </h2>
      <div className="proyectos-x font-medium grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-20">
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
      <div className="grid justify-items-center">
        <div className="proyectos-g pt-[10%] font-medium italic">
          The challenge was to identify the appropriate Schema Design and
          seamlessly integrate the resulting flow into the app by selecting the
          right tools and technologies.
        </div>
      </div>
      <div className="proyectos-x pt-[5%] pl-[10%] flex flex-col 2xl:flex-row gap-14 pb-[10%]">
        <div className="proyectos-texto-derecha font-medium  justify pt-[20%]">
          Every day, we merged all the updates we made using a dedicated branch
          in accordance with an accurate git flow. I researched available online
          documentation and utilized creativity to find solutions to the
          problems we encountered.
        </div>
        <img className="mt-8 img-proyect rounded" src={project[0].path6} />
      </div>

      <section className="min-h-full">
        <div className="grid justify-center pt-[5%]  pb-[5%] bg-black">
          <h2 className="proyectos-h2 text-white font-medium sm:tracking-[-2px] md:tracking-[-2px]">
            Communication is the key
          </h2>
          <p className="parrafo-resaltado text-justify font-medium italic justify pt-[5%] text-white ">
            {" "}
            Communication is essential for creating a positive and dynamic work
            environment. We used Discord as our meeting platform and held daily
            meetings every day at 9 am. Additionally, we had planning sessions
            with a SCRUM master every Monday and demos every Friday, during
            which we showcased our progress to a jury.
          </p>
          <div className="grid justify-center pt-[5%]  pb-[5%] bg-black ">
            <img
              className="mt-8 grid justify-center img-proyect rounded "
              src={project[0].path7}
            />
          </div>
          <div className="grid justify-items-end"> </div>
        </div>
      </section>
      <section className="min-h-full">
        <div className="grid justify-center pt-[5%] pb-[5%] bg-yellow-100 ">
          <p className="parrafo-resaltado font-medium pt-[7%] ">
            Over the course of nearly two months, we dedicated ourselves to the
            project, mastering new technologies and refining our soft skills.
            Our hard work culminated in a final product that received high
            praise from the jury, leaving us with a profound sense of
            accomplishment and boosted confidence.
          </p>
          <div className="grid justify-center pt-[5%]">
            <img className="mt-8 img-proyect rounded" src={project[0].path5} />
          </div>
        </div>
      </section>

      <div className=" min-h-full align-middle justify-items-center bg-black flex flex-col text-white text-xl font-medium ">
        <div className="flex flex-row justify-evenly py-[3%] max-[450px]:flex-col max-[450px]:grid justify-items-center">
          <a href={project[0].link1}>
            <button className="w-[200px] h-[50px] text-black mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border ">
              Frontend
            </button>
          </a>

          <a href={project[0].link2}>
            <button className="w-[200px] h-[50px] text-black mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
              Backend
            </button>
          </a>
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

export default MiTurnoWeb;
