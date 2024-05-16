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
    <div className="mb-[32px] head min-h-svh">
      <h1
        className="position:fixed mt-[440px] xl:mt-[420px] text-black leading-none tracking-[-8px] font-[550] text-[120px] xl: lg:text-[135px] xl:text-[180px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {firstLine}
        <br />
        {secondLine}
      </h1>
    </div>
  );
};

export default Head;
