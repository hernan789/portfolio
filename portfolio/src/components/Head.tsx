import { useState } from "react";

const Head: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const firstLine = hover ? "Full-stack" : "Hernán";
  const secondLine = hover ? "developer." : "Duarte";

  return (
    <section className="flex head min-h-screen h-auto ">
      <h1
        className=" min-[60px]:mt-[90%] sm:mt-[50%] lg:mt-[50%] xl:mt-[30%] text-black leading-none sm:tracking-[-2px] md:tracking-[-8px]  font-[550] xl: lg:text-[135px] xl:text-[180px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {firstLine}
        <br />
        {secondLine}
      </h1>
    </section>
  );
};

export default Head;
