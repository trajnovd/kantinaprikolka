// Contact.jsx
import { motion } from "framer-motion";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#77846E] text-[#EFE8D8] flex flex-col items-center
        justify-center px-4 py-8 md:px-6 md:py-10 lg:py-12 mt-10"
    >
      <motion.img
        variants={itemVariants}
        src="/Icons/logo-11.svg"
        alt="Contact"
        className="mb-6 h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
      />

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8"
      >
        Контакт
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="text-center space-y-2 md:space-y-3 mb-6 lg:mb-8"
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Kantina Trailer Bar
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Email: trailerbar@kantina.com
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl">
          Телефон: +389 79 255 905
        </p>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-xs md:max-w-sm lg:max-w-lg text-center text-base md:text-xl
          lg:text-2xl px-2 md:px-0"
      >
        За било какви дополнителни прашања обратете ни се на нашиот
        емаил или телефонски број, би ни било задоволство да го
        испланираме вашиот настан заедно.
      </motion.p>
    </motion.div>
  );
}

export default Contact;
