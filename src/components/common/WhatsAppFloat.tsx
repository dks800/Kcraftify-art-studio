import { openWhatsApp } from "../../utils/whatsapp";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">

      {/* Pulse Ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 cursor-pointer"
        animate={{
          scale: [1, 1.6],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Button */}
      <motion.button
        onClick={() => openWhatsApp("Hello, I want to know more")}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bb5a] text-black shadow-lg cursor-pointer transition"
      >
        <FaWhatsapp size={26} />
      </motion.button>

    </div>
  );
};

export default WhatsAppFloat;