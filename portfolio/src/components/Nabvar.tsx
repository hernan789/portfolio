import { useState } from "react";

const Nabvar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  {
    return (
      <div className="ml-2 mt-0 fixed head hover:bg-white w-screen ">
        <button
          className="text-black font-medium text-2xl md:hidden"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <div
          className={`${
            isOpen ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex lg:flex sm:columns-1">
            <li className="mr-6 ">
              <a
                className="text-black font-medium hover:underline text-xl"
                href="#"
              >
                About Me
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-black font-medium hover:underline text-xl"
                href="#"
              >
                Technologies
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-black font-medium hover:underline text-xl"
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-black font-medium hover:underline  text-xl"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Nabvar;
