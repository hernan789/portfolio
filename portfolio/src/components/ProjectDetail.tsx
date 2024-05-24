import { useParams, Link } from "react-router-dom";
import { projectsInfo } from "../assets/Proyects/Info";
function ProjectDetail() {
  const { projectName } = useParams<{ projectName: string }>();

  const project = projectsInfo.filter((project) => {
    return projectName == project.displayName;
  });
  console.log(project);
  return (
    <section className="bg-black min-h-screen text-white pb-10">
      <Link to="/">
        <div className="absolute top-7 min-[120px]:left-4 sm:left-14 md:left-[180px]">
          <div className=" bg-white w-8 h-8 rounded-full transition-all duration-1000"></div>
          <h6 className="absolute left-20 top-1 text-white text-xl font-medium hover:underline">
            Volver
          </h6>
        </div>
      </Link>
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
      <div className="proyectos-x flex-col justify-items-center ">
        <img className="mt-8 img-proyect" src={project[0].path} />
      </div>
      {/* Aquí puedes agregar más detalles del proyecto */}
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
