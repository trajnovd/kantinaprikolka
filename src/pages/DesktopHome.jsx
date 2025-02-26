import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DesktopHome = () => {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); // Start drive-off animation

    // Delay navigation until the animation completes
    setTimeout(() => {
      navigate("/booking");
    }, 550); // Match this delay to the animation duration
  };

  return (
    <div className="bg-[#EFE8D8] pt-16 overflow-x-hidden">
      {/* First Section */}
      <section className="relative flex flex-wrap md:flex-nowrap">
        {/* Left Section */}
        <div className="w-full flex flex-col justify-center">
          {/* Image Section */}
          <div className="overflow-hidden -mr-52 relative z-10 h-full">
            <motion.img
              src="Photos/cela prikolka so lugje od daleku.webp" // Replace with your left-side image path
              alt="Cocktail Bar"
              className="w-full h-auto object-cover rounded-br-[100px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          {/* Text Section */}
          <p className="text-[240px] opacity-15 text-end mr-10 -mb-56 -mt-14">
            {" "}
            “
          </p>
          <div className="mt-6 bg-[#EFE8D8] p-6 rounded-lg md:pb-20">
            <motion.blockquote
              className="text-5xl text-[#77846E]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              “Одлична услуга, многу сум <br /> задоволен од
              организацијата <br /> и посветеноста на тимот за <br />{" "}
              целиот настан!”
            </motion.blockquote>
            <motion.p
              className="block text-lg text-[#77846E] mt-2 uppercase"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Филип и Софија / Млад брачен пар
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full bg-[#77846E] rounded-bl-[100px] p-6 relative flex flex-col
            items-center lg:items-start"
        >
          {/* Logo */}
          <img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="w-32 h-36 mx-auto md:ml-[230px] lg:mx-0 lg:ml-[350px] xl:ml-[450px]"
          />

          {/* Headline */}
          <motion.h1
            className="text-[#EFE8D8] text-4xl md:text-5xl lg:text-7xl font-bold mb-4
              relative z-20 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Тајната Состојка За Твојот Настан
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-[#EFE8D8] text-base md:text-xl font-medium mb-6 relative z-20
              text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Квалитетни состојки, Врвен Талент, Задоволни Клиенти
          </motion.p>

          {/* Booking Button */}
          <motion.div
            className="w-48 mx-auto mt-10 md:mt-28 lg:ml-[300px] xl:ml-[400px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="Icons/prikolka rezerviraj kopce ikona-12.svg"
              alt="Booking Button"
              className="object-cover cursor-pointer relative z-20"
              onClick={handleClick}
              animate={
                isClicked
                  ? { x: 500, opacity: 0 }
                  : { x: 0, opacity: 1 }
              } // Drive off to the right
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth drive-off
            />
          </motion.div>

          {/* Stats */}
          <div
            className="flex flex-col md:flex-row items-center justify-center md:justify-start
              gap-8 md:gap-16 mt-10 md:mt-24 mb-10 relative z-20 lg:ml-30 xl:ml-48"
          >
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-9xl text-[#EFE8D8] font-bold">
                8+
              </p>
              <p className="text-base md:text-lg text-[#EFE8D8]">
                года искуство
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-9xl text-[#EFE8D8] font-bold">
                50+
              </p>
              <p className="text-base md:text-lg text-[#EFE8D8]">
                настани секоја година
              </p>
            </div>
          </div>
        </div>
      </section>

      <motion.img
        src="/Icons/prikolki zeleni-20.svg"
        alt="Logo"
        className="w-full h-auto scale-x-[-1] rotate-8 mt-44 mb-20"
        initial={{ opacity: 0, x: 1500 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Animate to original position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth and slow
      />

      {/* Second Section */}

      <section className="py-20 px-6 bg-[#EFE8D8] max-w-screen-lg mx-auto">
        <p className="text-[#77846E] text-center xl:text-3xl">
          ШТО ПРАВИМЕ
        </p>
        <motion.h2
          className="text-center text-5xl font-bold text-[#77846E] mb-12 uppercase
            xl:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Какви Настани Работиме?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 pt-0">
          {/* Приватни */}
          <div
            className="relative overflow-hidden rounded-4xl cursor-pointer hover:scale-105
              transition-transform aspect-[4/3]"
            onClick={() => navigate("/events#privatni")}
          >
            <img
              src="Photos/kantina-vodno-56.webp"
              alt="Приватни"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center
                transition-transform"
            >
              <p className="text-white text-2xl xl:text-4xl font-semibold">
                Приватни
              </p>
            </div>
          </div>

          {/* Прослави */}
          <div
            className="relative overflow-hidden rounded-4xl cursor-pointer hover:scale-105
              transition-transform aspect-[4/3]"
            onClick={() => navigate("/events#proslavi")}
          >
            <img
              src="Photos/kantina-vodno-72.JPG"
              alt="Прослави"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl xl:text-4xl font-semibold">
                Прослави
              </p>
            </div>
          </div>

          {/* Свадби */}
          <div
            className="relative overflow-hidden rounded-4xl cursor-pointer hover:scale-105
              transition-transform aspect-[4/3]"
            onClick={() => navigate("/events#svadbi")}
          >
            <img
              src="Photos/cela prikolka so lugje od daleku.webp"
              alt="Свадби"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl xl:text-4xl font-semibold">
                Свадби
              </p>
            </div>
          </div>

          {/* Корпоративни */}
          <div
            className="relative overflow-hidden rounded-4xl cursor-pointer hover:scale-105
              transition-transform aspect-[4/3]"
            onClick={() => navigate("/events#korporativni")}
          >
            <img
              src="Photos/kantina-vodno-44.webp"
              alt="Корпоративни"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl xl:text-4xl font-semibold">
                Корпоративни
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopHome;
