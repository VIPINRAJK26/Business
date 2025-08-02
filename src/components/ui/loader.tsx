import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="w-24 h-24"
      >
        <img
          src="/logo.png"
          alt="Fleeby Logo"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
