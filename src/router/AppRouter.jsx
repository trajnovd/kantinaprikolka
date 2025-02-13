import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";
import Navbar from "../ui/NavBar";
import Footer from "../ui/Footer";

function AppRouter() {
  return (
    <Router>
      <Wrapper />
    </Router>
  );
}

function Wrapper() {
  // Access the current location (path) to conditionally render the footer
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      {/* Only render footer if NOT on /contact */}
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
}

export default AppRouter;
