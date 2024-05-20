import { tecnologias } from "../assets/logos";

const Technologies: React.FC = () => {
  return (
    <section className="min-h-screen bg-lime-400">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">Technologies</h2>
      <div className="w-[70%] grid  mt-[5%] gap-y-6 items-center justify-items-center mx-auto duration-1000 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xs:w-[90%] sm:[80%] lg:w-[70%]">
        {tecnologias.map((tec) => {
          return (
            <div className="logos items-center text-center pr-20px">
              {tec.svg}
              <p className="text-[1.3rem] text-center font-semibold ">
                {tec.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
