import { useState, useEffect } from "react";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileHome /> // Your mobile design component
      ) : (
        <DesktopHome /> // Your desktop/tablet design component
      )}
    </>
  );
};

export default HomePage;
