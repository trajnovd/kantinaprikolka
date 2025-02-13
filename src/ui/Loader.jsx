import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="w-16 h-16 border-4 border-[##93A387] border-t-transparent rounded-full
        items-center justify-center flex text-center"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  );
};

export default Loader;
