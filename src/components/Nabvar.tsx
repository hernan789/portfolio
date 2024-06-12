import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nabvar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  console.log("es open", isOpen);
  return (
    <>
      <div
        className={`navbar fixed w-screen transition-all duration-300 ${
          scrolled ? "h-16" : "h-32"
        } z-50 `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={` absolute max-[767px]:hidden md:flex md:relative ${
            scrolled ? "mt-8" : "mt-16"
          } transition-all duration-300 w-screen`}
        >
          <ul
            className={`min-[767px]:hidden md:flex md:relative md:mt-0 lg:flex transition-transform duration-500 ${
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

      <div
        className={` min-[767px]:hidden fixed w-screen transition-all duration-300 h-16 z-50 `}
      >
        <button
          className={`mt-[4%] ml-[20px] smNav ${
            isOpen && "hidden"
          } font-medium text-2xl  md:hidden`}
          onClick={toggleMenu}
        >
          Menu
        </button>
        {isOpen && (
          <nav className="bg-white pt-[4%] pl-[20px] min-h-full  ">
            <button
              className="text-black   font-medium text-2xl  md:hidden"
              onClick={toggleMenu}
            >
              Menu
            </button>
            <div className="text-black pt-16%] ">
              <ul>
                <li className="pb-2 pt-2">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className=" cursor-pointer"
                  >
                    <a className="text-black font-medium hover:text-zinc-500 text-2xl">
                      About Me
                    </a>
                  </ScrollLink>
                </li>
                <li className="pb-2 pt-2">
                  <ScrollLink
                    to="technologies"
                    smooth={true}
                    duration={500}
                    className=" cursor-pointer"
                  >
                    <a className="pt-2  border-t-2 border-black text-black font-medium hover:text-zinc-500 text-2xl">
                      Technologies
                    </a>
                  </ScrollLink>
                </li>
                <li className="pb-2 pt-2">
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    className=" cursor-pointer"
                  >
                    <a
                      className=" pt-2 border-t-2 border-black text-black font-medium hover:text-zinc-500 text-2xl"
                      href="#"
                    >
                      Projects
                    </a>
                  </ScrollLink>
                </li>
                <li className="pb-2 pt-2">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className=" cursor-pointer"
                  >
                    <a
                      className="pt-2 border-t-2  border-black text-black font-medium hover:text-zinc-500 text-2xl"
                      href="#"
                    >
                      Contact
                    </a>
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Nabvar;
