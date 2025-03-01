import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (!isMenuOpen) {
        // Only handle scroll when menu is closed
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setVisible(window.scrollY < lastScrollY);
          setLastScrollY(window.scrollY);
        }, 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed top-0 left-0 z-50 w-full bg-[#93A387] bg-opacity-80 p-4
          text-white shadow-md backdrop-blur-md"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" onClick={handleNavigation}>
            <img
              src="/Icons/prikolce kopce ikona-09.svg"
              alt="Logo"
              className="md:h-10 md:w-auto h-12 w-14"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-36">
            {["/about-us", "/events", "/contact"].map(
              (path, index) => (
                <Link
                  key={path}
                  to={path}
                  className="font-semibold text-[#E7DED0] transition-transform hover:scale-105"
                >
                  {["ЗА НАС", "НАСТАНИ", "КОНТАКТ"][index]}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              className="absolute top-2 left-1 block h-[2px] w-6 bg-white"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
            />
            <motion.span
              className="absolute top-3.5 left-1 block h-[2px] w-6 bg-white"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className="absolute top-5 left-1 block h-[2px] w-6 bg-white"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
            />
          </button>

          {/* Desktop Button */}
          <Link
            to="/booking"
            className="hidden lg:block rounded-full bg-[#E7DED0] px-6 py-2 font-semibold
              text-[#556B2F] transition-transform hover:scale-105"
          >
            РЕЗЕРВИРАЈ
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="flex h-full flex-col items-center justify-center space-y-8 text-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {["/about-us", "/events", "/contact"].map(
                (path, index) => (
                  <Link
                    key={path}
                    to={path}
                    className="text-white hover:text-gray-200"
                    onClick={handleNavigation}
                  >
                    {["ЗА НАС", "НАСТАНИ", "КОНТАКТ"][index]}
                  </Link>
                ),
              )}
              <Link
                to="/booking"
                className="mt-8 rounded-full bg-[#E7DED0] px-8 py-3 font-semibold text-[#556B2F]"
                onClick={handleNavigation}
              >
                РЕЗЕРВИРАЈ
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
