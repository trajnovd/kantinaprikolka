import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#EFE8D8] pt-16 overflow-x-hidden">
      {/* First Section */}
      <section className="relative flex flex-wrap md:flex-nowrap">
        {/* Left Section */}
        <div className="w-full flex flex-col justify-center">
          {/* Image Section */}
          <div className="overflow-hidden -mr-52 relative z-10 h-full">
            <motion.img
              src="Photos/cela prikolka so lugje od daleku.jpg" // Replace with your left-side image path
              alt="Cocktail Bar"
              className="w-full h-auto object-cover rounded-br-[100px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          {/* Text Section */}
          <div className="mt-6 bg-[#EFE8D8] p-6 rounded-lg md:pb-20">
            <motion.blockquote
              className="text-5xl text-[#77846E] font-bold"
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
          className="w-full bg-[#77846E] rounded-bl-[100px] items-start justify-center p-6
            relative"
        >
          <img
            src="/Icons/logo-11.svg"
            alt="Logo"
            className="w-32 h-36 ml-[430px] xl:ml-[500px]"
          />
          <motion.h1
            className="text-[#EFE8D8] text-7xl font-bold mb-4 relative z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Тајната Состојка За Твојот Настан
          </motion.h1>
          <motion.p
            className="text-[#EFE8D8] text-xl font-medium mb-6 relative z-20 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Квалитетни состојки, Врвен Талент, Задоволни Клиенти
          </motion.p>
          <motion.div
            className="w-48 ml-96 mt-28"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/booking">
              <img
                src="Icons/prikolka rezerviraj kopce ikona-12.svg" // Replace with your image path
                alt="Booking Button"
                className="object-cover cursor-pointer relative z-20"
              />
            </Link>
          </motion.div>

          {/* Stats */}
          <div
            className="flex space-x-8 mt-24 mb-10 relative z-20 items-center grid-cols-2
              gap-16 ml-28"
          >
            <div>
              <p className="text-9xl text-[#EFE8D8] font-bold">8+</p>
              <p className="text-[#EFE8D8] text-lg">
                години искуство
              </p>
            </div>
            <div>
              <p className="text-9xl text-[#EFE8D8] font-bold">50+</p>
              <p className="text-[#EFE8D8] text-lg">
                настани секоја година
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src="Photos/kantina-vodno-56.JPG"
              alt="Приватни"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl xl:text-4xl font-semibold">
                Приватни
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src="Photos/kantina-vodno-72.JPG"
              alt="Прослави"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold xl:text-4xl">
                Прослави
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src="Photos/cela prikolka so lugje od daleku.jpg"
              alt="Свадби"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold xl:text-4xl">
                Свадби
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src="Photos/kantina-vodno-44.JPG"
              alt="Корпоративни"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold xl:text-4xl">
                Корпоративни
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
