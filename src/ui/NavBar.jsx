import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (to) => {
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
      setTimeout(() => navigate(to), 300); // Match animation duration
    },
    [navigate],
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const scrollThreshold = 100;

    const handleScroll = () => {
      if (!ticking && !isMenuOpen) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < lastScrollY) setVisible(true);
          else if (
            currentScrollY > lastScrollY &&
            currentScrollY > scrollThreshold
          )
            setVisible(false);
          if (currentScrollY < 50) setVisible(true);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 z-50 w-full bg-[#93A387] bg-opacity-80 p-4
          text-white shadow-md backdrop-blur-md"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
          >
            <img
              src="/Icons/prikolce kopce ikona-09.svg"
              alt="Logo"
              className="md:h-10 md:w-auto h-12 w-14"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-36">
            {["/about-us", "/events", "/contact"].map(
              (path, index) => (
                <Link
                  key={path}
                  to={path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(path);
                  }}
                  className="font-semibold text-[#E7DED0] transition-transform hover:scale-105"
                >
                  {["ЗА НАС", "НАСТАНИ", "КОНТАКТ"][index]}
                </Link>
              ),
            )}
          </div>

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
              transition={{ type: "tween", duration: 0.2 }}
            />
            <motion.span
              className="absolute top-3.5 left-1 block h-[2px] w-6 bg-white"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.span
              className="absolute top-5 left-1 block h-[2px] w-6 bg-white"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              transition={{ type: "tween", duration: 0.2 }}
            />
          </button>

          <Link
            to="/booking"
            className="hidden lg:block rounded-full bg-[#E7DED0] px-6 py-2 font-semibold
              text-[#556B2F] transition-transform hover:scale-105"
          >
            РЕЗЕРВИРАЈ
          </Link>
        </div>
      </motion.nav>

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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(path);
                    }}
                  >
                    {["ЗА НАС", "НАСТАНИ", "КОНТАКТ"][index]}
                  </Link>
                ),
              )}
              <Link
                to="/booking"
                className="mt-8 rounded-full bg-[#E7DED0] px-8 py-3 font-semibold text-[#556B2F]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/booking");
                }}
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
