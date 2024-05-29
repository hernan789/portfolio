import { Link } from "react-router-dom";
import { projectsInfo } from "../assets/Proyects/Info";
function ProjectDetail() {
  // const { fast } = useParams<{ fast: string }>();

  // const project = projectsInfo.filter((project) => {
  //   return projectName == project.displayName;
  // });
  const project = projectsInfo.filter((project) => {
    return "fast" == project.displayName;
  });

  // console.log(fast);
  return (
    <section className="bg-black min-h-full  text-white ">
      {/* <div className="bg-black  h-[100px] pb-[10%]">
        <Link to="/">
          <div className="absolute top-7 min-[120px]:left-4 sm:left-14 md:left-[180px]">
            <div className=" bg-white w-8 h-8 rounded-full transition-all duration-1000"></div>
            <h6 className="absolute left-20 top-1 text-white text-xl font-medium hover:underline">
              Volver
            </h6>
          </div>
        </Link>
      </div> */}
      <h2 className="proyectos-h2 font-[550] pt-[30%] leading-none sm:tracking-[-2px] md:tracking-[-4px] text-white">
        {project[0].name}
      </h2>
      <div className="proyectos-x grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-16">
        <p className="">{project[0].description} </p>
        <div className="">
          <h2 className="text-white border-b-1 border-white pb-2">
            {project[0].detail1}
          </h2>
          <h2 className="text-white border-t-2 border-white py-2">
            {project[0].detail2}
          </h2>
          <h2 className="text-white border-t-2 border-white py-2">
            {project[0].detail3}
          </h2>
        </div>
      </div>
      <div className="proyectos-x pt-[5%] pl-[10%] flex flex-col sm:flex-row gap-14">
        <img className="mt-8 img-proyect rounded" src={project[0].path6} />
        <div className="proyectos-texto-derecha font-medium italic pt-[20%]">
          {project[0].description}{" "}
        </div>
      </div>
      <div className="proyectos-x pt-[5%] pl-[10%] flex flex-col sm:flex-row gap-14 pb-[10%]">
        <div className="proyectos-texto-derecha font-medium italic justify pt-[20%]">
          {project[0].description}{" "}
        </div>
        <img className="mt-8 img-proyect rounded" src={project[0].path5} />
      </div>

      {/* <div className="max-w-screen flex flex-col items-center justify-center min-h-screen pb-[8%]">
          <img className="mt-8 img-proyect rounded" src={project[0].path} />
        </div> */}
      {/* Aquí puedes agregar más detalles del proyecto */}
      <section className="min-h-full">
        <div className="grid justify-center pt-[5%]  pb-[5%] bg-yellow-100 ">
          <img className="mt-8 img-proyect rounded" src={project[0].path6} />
        </div>
        {/* <div className="grid justify-items-end pt-[5%]  pr-[10%]  bg-yellow-100  pb-[5%]">
          <img className="mt-8 img-proyect rounded" src={project[0].path5} />
        </div> */}
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

export default ProjectDetail;

// import { useParams } from "react-router-dom";

// function ProjectDetail() {
//   const { projectName } = useParams<{ projectName: string }>();
//   console.log(projectName);
//   return (
//     <section className="bg-black min-h-full text-white pb-10">
//       <h2 className="proyectos-h2 font-[550] leading-none sm:tracking-[-2px] md:tracking-[-4px]  text-white">
//         {projectName}
//       </h2>

//       {/* Aquí puedes agregar más detalles del proyecto */}
//     </section>
//   );
// }

// export default ProjectDetail;
