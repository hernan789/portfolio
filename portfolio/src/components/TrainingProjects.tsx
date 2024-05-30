import { projectsInfo } from "../assets/Proyects/Info";
import { useEffect } from "react";
function TrainingProjects() {
  const project = projectsInfo.filter((project) => {
    return "training" == project.displayName;
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  console.log(project);
  return (
    <>
      <section className="bg-gradient-to-b from-purple-900 to-black min-h-full  text-white ">
        <h2 className="proyectos-h2 font-[550] pt-[30%] leading-none sm:tracking-[-2px] md:tracking-[-4px] text-white pb-[5%]">
          {project[0].name} VER EL CODIGO EN SPARTA 2
        </h2>

        <p className="parrafo-resaltado text-justify font-medium italic justify pt-[2%] text-white  ">
          {" "}
          {project[0].detail1}
        </p>

        <div className="pl-[15%] pt-[10%]">
          <div className="w-[80%] pl-10 border-t-2 border-white"></div>
        </div>
        <h2 className="proyectos-h2 text-white font-medium leading-none sm:tracking-[-2px] md:tracking-[-4px] pb-[5%] pt-[10%]">
          Color Game{" "}
        </h2>
        <div className="proyectos-x font-medium  grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-20 pb-[10%]">
          <img src={project[0].path2} />
          <div className="">
            <h2 className="text-white border-b-1 border-white pb-2 pt-4">
              This excercise is very useful to learn and memorize the rgb name
              for colors.
            </h2>
            <h2 className="text-white border-t-2 border-white py-2">
              HTML, CSS, JAVASCRIPT
            </h2>
            <h2 className="text-white border-t-2 border-white py-2">
              <button className="w-[200px] h-[50px] mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
                <a
                  className="text-black"
                  href="https://precious-creponne-4c13f5.netlify.app"
                >
                  Try
                </a>{" "}
              </button>
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-black min-h-full  text-white ">
        <h2 className="proyectos-h2 text-white font-medium leading-none sm:tracking-[-2px] md:tracking-[-4px] pb-[5%]">
          To do list{" "}
        </h2>
        <div className="proyectos-x font-medium  grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-20 pb-[10%]">
          <img src={project[0].path4} />
          <div className="">
            <h2 className="text-white border-b-1 border-white pb-2 pt-4">
              Yes. The classic To Do List. The begginners excersice par
              excellence. Why incorporate it in here? Well, It was one of my
              first indicio of me being able to code. At that time I did not
              know React; it was made using pure HTML, CSS and JavaScript
              Vanilla.
            </h2>
            <h2 className="text-white border-t-2 border-white py-2">
              HTML, CSS, JAVASCRIPT
            </h2>
            <h2 className="text-white border-t-2 border-white py-2">
              <button className="w-[200px] h-[50px] mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
                <a
                  className="text-black"
                  href="https://lambent-naiad-a56406.netlify.app"
                >
                  Try
                </a>{" "}
              </button>
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-black to-white min-h-full  text-white ">
        <h2 className="proyectos-h2 text-white font-medium leading-none sm:tracking-[-2px] md:tracking-[-4px] pb-[5%]">
          Weather Channel{" "}
        </h2>
        <div className="proyectos-x font-medium  grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-20 pb-[10%]">
          <img src={project[0].path3} />
          <div className="">
            <h2 className="text-white border-b-1 border-white pb-2 pt-4">
              {project[0].detail1}
            </h2>
            <h2 className="text-white border-t-2 border-white py-2">
              HTML, CSS, JAVASCRIPT, AXIOS
            </h2>
            <h2 className="text-white border-t-2 border-white py-2">
              <button className="w-[200px] h-[50px] mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
                <a
                  className="text-black"
                  href="https://vermillion-scone-dad33e.netlify.app"
                >
                  Try
                </a>{" "}
              </button>
            </h2>
          </div>
        </div>
      </section>
      <footer className="flex flex-col justify-between mt-4 text-medium text-xl border-t-[1px] border-t-black pb-[5%]">
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
    </>
  );
}

export default TrainingProjects;
