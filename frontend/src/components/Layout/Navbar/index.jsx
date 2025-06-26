import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Button";
import commonData from "../../../assets/data/commonData";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeNavLink = commonData.navLinks.find(
      (link) => link.path === currentPath
    );
    setActiveLink(activeNavLink ? activeNavLink.name : "Home");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <div className="z-50 flex items-center justify-center fixed w-full bg-black">
      <nav className="w-full max-w-7xl py-4 flex items-center justify-between">
        <h1 className="ml-6 sm:ml-6 md:ml-0 lg:ml-0 xl:ml-0 primary-font text-sm md:text-sm font-normal text-textGray">
          Book Your Musician
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="w-6 h-6 relative right-4 text-textGray" />
            ) : (
              <Menu className="w-6 h-6 relative right-4 text-textGray" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-12"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {commonData.navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  className={`primary-font text-sm md:text-sm font-normal flex items-center space-x-1 transition-colors duration-200 
                    ${activeLink === link.name ? "text-textBlack" : "text-textBlack"} 
                    hover:text-textOrange cursor-pointer md:text-textGray/70 md:hover:text-textOrange`}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    to={link.path}
                    className="flex items-center space-x-1 w-full"
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    {activeLink === link.name && (
                      <span className="bg-textOrange w-2 h-2 rounded-full"></span>
                    )}
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <ul className="hidden md:flex md:flex-row md:static md:w-auto md:bg-transparent md:p-0 md:space-y-0 md:space-x-20">
          {commonData.navLinks.map((link) => (
            <li
              key={link.name}
              className={`primary-font text-sm md:text-sm font-normal flex items-center space-x-2 transition-colors duration-200 
                ${activeLink === link.name ? "text-textGray" : "text-textGray/70"} 
                hover:text-textOrange cursor-pointer`}
            >
              <Link
                to={link.path}
                className="flex items-center space-x-2"
                onClick={() => {
                  setActiveLink(link.name);
                }}
              >
                {activeLink === link.name && (
                  <span className="bg-textOrange w-2 h-2 rounded-full"></span>
                )}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button
            name="Contact Us"
            className="text-textBlack text-sm font-normal bg-textGray px-6 py-2"
            onClick={() => alert("Contact Us clicked!")}
            dotColor="bg-textOrange"
            gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
          />
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden w-full flex justify-center py-4 bg-white -mr-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Button
              name="Contact Us"
              className="text-textBlack text-sm md:text-sm font-normal bg-textGray px-4 md:px-6 py-2"
              onClick={() => alert("Button clicked!")}
              dotColor="bg-textOrange"
              gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;