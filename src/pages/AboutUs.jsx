import { useState, useEffect } from "react";
import MobileAboutUs from "./MobileAboutUs";
import DesktopAboutUs from "./DesktopAboutUs";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileAboutUs /> : <DesktopAboutUs />}</>;
};

export default AboutUs;
