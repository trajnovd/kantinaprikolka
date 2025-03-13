import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#77846E] text-[#EFE8DB] py-8">
      {/* Use a full-width container */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left
            space-y-4 ml-6"
        >
          <img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="h-16 w-16"
          />
          <h1 className="text-2xl font-bold">Kantina Trailer Bar</h1>
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <p>
              Емаил: <br /> trailerbar@kantina.com
            </p>
            <p>
              Телефон: <br /> +389 79 255 905
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="flex flex-col items-center md:items-end text-center md:text-right
            space-y-9 mt-4 md:mt-0 mr-6"
        >
          <p className="text-4xl font-bold">
            Закажи го твојот <br /> настан со нас
          </p>
          <Link
            to="/booking"
            className="bg-[#93A387] text-[#EFE8DB] px-6 py-2 rounded-full font-semibold
              text-3xl hover:bg-opacity-90 transition-transform transform
              hover:scale-105"
          >
            РЕЗЕРВИРАЈ
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
