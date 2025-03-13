// Home.jsx
import { useState, useEffect } from "react";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Update state on media query change
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
};

export default HomePage;
