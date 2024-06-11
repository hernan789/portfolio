import { Link } from "react-router-dom";
import { projectsInfo } from "../assets/Proyects/Info";
import { useEffect } from "react";
function FastDelivery() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const project = projectsInfo.filter((project) => {
    return "fast" == project.displayName;
  });

  return (
    <section className="bg-black min-h-full  text-white ">
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
      <div className="proyectos-x pt-[5%]   grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-items-center gap-10">
        <img className="mt-8 img-proyect rounded" src={project[0].path6} />
        <div className="font-medium italic pt-[50%]">
          A last-mile logistics company has hundreds of delivery drivers who
          each receive parcels at the start of the day and must deliver them
          throughout the day. Thanks to this APP, a company can monitor delivery
          drivers, assign or reassign packages, and intervene to edit shipments.
        </div>
      </div>
      <div className="proyectos-x pt-[5%] pl-[10%]  grid min-[120px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pb-[10%] justify-items-center">
        <div className="pt-[50%] font-medium italic ">
          The app has two different roles: the delivery driver role, where
          drivers can freely register and log in to select the packages they
          will deliver that day; and the administrator role, where the company
          can see the list of registered delivery drivers, track the number of
          active drivers with ongoing deliveries, monitor the number of packages
          assigned to each driver, and create, view, and edit packages to be
          sent.
        </div>
        <img className="mt-8 img-proyect rounded " src={project[0].path5} />
      </div>

      <section className="min-h-full bg-yellow-100 pt-[5%] ">
        <p className="parrafo-resaltado  font-medium italic justify pt-[5%] text-black ">
          Throughout this project, I honed my expertise in full-stack
          development, delving deeply into TypeScript and Next.js. Challenges
          arose in fine-tuning database queries using Sequelize, leading to
          significant enhancements in my problem-solving prowess and
          comprehension of scalable solutions. Immersed in the intricacies of
          front-end and back-end development, I gained valuable insights into
          crafting efficient, user-friendly interfaces and optimizing
          server-side functionality. This experience fortified my foundation in
          software engineering and fueled my passion for tackling complex
          technical challenges head-on.
        </p>
        <div className="grid justify-center pt-[5%]  pb-[5%] bg-yellow-100 ">
          <img className="mt-8 img-proyect rounded" src={project[0].path4} />
        </div>
      </section>

      <div className=" min-h-full align-middle  bg-black flex flex-col text-white text-xl font-medium ">
        <div className="flex flex-row justify-evenly py-[3%] max-[450px]:flex-col max-[450px]:grid justify-items-center">
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

export default FastDelivery;
