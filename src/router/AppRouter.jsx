import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "../ui/NavBar";
import Footer from "../ui/Footer";
import Loader from "../ui/Loader";

// Lazy loading pages
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Events = lazy(() => import("../pages/Events"));
const Contact = lazy(() => import("../pages/Contact"));
const Booking = lazy(() => import("../pages/Booking"));

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

      {/* Suspense wrapper to show a fallback while loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      {/* Only render footer if NOT on /contact */}
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
}

export default AppRouter;
