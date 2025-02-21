import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const MobileHome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#EFE8D8] pt-12 overflow-x-hidden">
      {/* Image Section with Overlayed Title and Booking Button */}
      <section className="relative">
        <motion.img
          src="Photos/cela prikolka so lugje od daleku.jpg" // Mobile top image
          alt="Cocktail Bar"
          className="w-full h-80 object-cover blur-[1px] brightness-90"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="w-14 h-16 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-[#EFE8D8] text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Тајната Состојка <br /> За Твојот Настан
          </motion.h1>
          <motion.p
            className="text-[#EFE8D8] text-md mb-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Квалитетни состојки, Врвен Талент, Задоволни Клиенти
          </motion.p>
          <motion.div
            className="inline-block bg-[#EFE8D8] text-[#77846E] px-6 py-2 rounded-full
              shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/booking">ВИДИ ПОНУДИ &rarr;</Link>
          </motion.div>
        </div>
      </section>

      {/* Quote and Stats Section */}
      <section className="flex flex-row w-full">
        {/* Quote Section (Left - 70%) */}
        <div
          className="basis-7/12 bg-[#EFE8D8] text-[#77846E] p-6 flex flex-col
            justify-center mr-5"
        >
          <motion.blockquote
            className="italic text-2xl text-[#77846E] leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            “Одлична услуга, многу сум задоволен од организацијата и
            посветеноста на тимот за целиот настан!”
          </motion.blockquote>
          <p className="mt-2 uppercase text-sm mb-10">
            Филип и Софија / Млад брачен пар
          </p>
        </div>

        {/* Stats Section (Right - 30%) */}
        <div
          className="basis-5/12 bg-[#77846E] text-[#EFE8D8] p-6 rounded-bl-[50px] flex
            items-center justify-center mb-20 pb-16"
        >
          <div className="flex flex-col space-y-6 w-full items-center">
            <div className="text-center">
              <p className="text-7xl font-bold mb-1">50+</p>
              <p className="text-sm">настани секоја година</p>
            </div>
            <div className="text-center">
              <p className="text-7xl font-bold">8+</p>
              <p className="text-sm">години искуство</p>
            </div>
          </div>
        </div>
      </section>
      <motion.img
        src="/Icons/prikolki zeleni-20.svg"
        alt="Logo"
        className="w-full h-auto mb-4 scale-x-[-1] rotate-8"
        initial={{ opacity: 0, x: 600 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Animate to original position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth and slow
      />

      {/* Events Section */}
      <section className="py-12 px-6">
        <p className="text-[#77846E] text-center text-lg">
          ШТО ПРАВИМЕ
        </p>
        <motion.h2
          className="text-center text-3xl font-bold text-[#77846E] my-6 uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Какви Настани Работиме?
        </motion.h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Приватни */}
          <div
            className="relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => navigate("/events#privatni")}
          >
            <img
              src="Photos/kantina-vodno-56.JPG"
              alt="Приватни"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">
                Приватни
              </p>
            </div>
          </div>

          {/* Прослави */}
          <div
            className="relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => navigate("/events#proslavi")}
          >
            <img
              src="Photos/kantina-vodno-72.JPG"
              alt="Прослави"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">
                Прослави
              </p>
            </div>
          </div>

          {/* Свадби */}
          <div
            className="relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => navigate("/events#svadbi")}
          >
            <img
              src="Photos/cela prikolka so lugje od daleku.jpg"
              alt="Свадби"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">
                Свадби
              </p>
            </div>
          </div>

          {/* Корпоративни */}
          <div
            className="relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => navigate("/events#korporativni")}
          >
            <img
              src="Photos/kantina-vodno-44.JPG"
              alt="Корпоративни"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">
                Корпоративни
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileHome;
