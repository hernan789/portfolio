import { useState, useEffect } from "react";

const Nabvar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed w-screen transition-all duration-300 ${
        scrolled ? "h-16" : "h-32"
      } z-50`}
    >
      <button
        className="text-black font-medium text-2xl md:hidden"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div
        className={`${
          isOpen ? "hidden" : "block"
        } absolute md:flex md:relative ${
          scrolled ? "mt-8" : "mt-16"
        } transition-all duration-300 w-screen`}
      >
        <ul
          className={`md:flex md:relative md:mt-0 lg:flex sm:columns-1 transition-transform duration-500 ${
            scrolled ? "transform  opacity-0" : "opacity-100"
          }`}
        >
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
      {scrolled && (
        <div className="bg-black w-8 h-8 rounded-full transition-all duration-1000 pl-0"></div>
      )}
    </div>
  );
};

export default Nabvar;
