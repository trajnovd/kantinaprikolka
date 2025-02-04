import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide when scrolling down
      } else {
        setVisible(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{
        y: 0,
        opacity: 1,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="bg-opacity-80 fixed top-0 left-0 z-50 w-full bg-[#93A387] p-4
        text-white shadow-md backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Icons/prikolce kopce ikona-09.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-36">
          <li>
            <Link
              to="/about-us"
              className="hover:text-opacity-80 transform font-semibold text-[#E7DED0]
                transition-transform hover:scale-105"
            >
              ЗА НАС
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="hover:text-opacity-80 transform font-semibold text-[#E7DED0]
                transition-transform hover:scale-105"
            >
              НАСТАНИ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-opacity-80 transform font-semibold text-[#E7DED0]
                transition-transform hover:scale-105"
            >
              КОНТАКТ
            </Link>
          </li>
        </ul>

        {/* Rezerviraj Button */}
        <Link
          to="/booking"
          className="hover:bg-opacity-90 transform rounded-full bg-[#E7DED0] px-6 py-2
            font-semibold text-[#556B2F] transition-transform hover:scale-105"
        >
          РЕЗЕРВИРАЈ
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
