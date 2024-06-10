import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nabvar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(0);
  const [hovered, setHovered] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const opacity = Math.max(1 - scrolled / 200, 0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`navbar fixed w-screen transition-all duration-300 ${
        scrolled ? "h-16" : "h-32"
      } z-50`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="text-white absolute font-medium text-2xl  md:hidden"
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
            scrolled && !hovered ? "transform  opacity" : "opacity-100"
          }`}
          style={{ opacity: hovered ? 1 : opacity }}
        >
          <li className="mr-6 ">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-black cursor-pointer"
            >
              <a className="text-white font-medium hover:underline text-xl">
                About Me
              </a>
            </ScrollLink>
          </li>
          <li className="mr-6">
            <ScrollLink
              to="technologies"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              <a className="text-white font-medium hover:underline text-xl">
                Technologies
              </a>
            </ScrollLink>
          </li>
          <li className="mr-6">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              <a
                className="text-white font-medium hover:underline text-xl"
                href="#"
              >
                Projects
              </a>
            </ScrollLink>
          </li>
          <li className="mr-6">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              <a
                className="text-white font-medium hover:underline  text-xl"
                href="#"
              >
                Contact
              </a>
            </ScrollLink>
          </li>
        </ul>
      </div>
      {scrolled > 50 && (
        <ScrollLink
          to="head"
          smooth={true}
          duration={500}
          className="  cursor-pointer "
        >
          {/* <div className="absolute left-44 top-7">
            <div className="max-sm:hidden bg-black w-8 h-8 rounded-full transition-all duration-1000"></div>
          </div> */}
          <div
            className={` absolute max-[1199px]:hidden  left-12 top-[31px] `}
            onClick={scrollToTop}
          >
            <div className="logo font-medium  text-xl pb-0  ">
              Hernán Duarte
            </div>
          </div>
        </ScrollLink>
      )}
    </div>
  );
};

export default Nabvar;
