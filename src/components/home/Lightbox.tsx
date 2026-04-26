import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { openWhatsApp } from "../../utils/whatsapp";
import type { Product } from "../../data/products";

interface Props {
  products: Product[];
  currentIndex: number;
  onClose: () => void;
}

const Lightbox = ({ products, currentIndex, onClose }: Props) => {
  const [index, setIndex] = useState(currentIndex);

  const next = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const product = products[index];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}
        <button
          aria-label="Close"
          name="close"
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        {/* Image Swipe Area */}
        <motion.div
          key={product.id}
          className="backdrop-blur-xl bg-white/5 p-2 rounded-2xl border border-white/10"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-300">{product.name}</p>

          <button
            name="enquire-whatsapp"
            aria-label="enquire-whatsapp"
            onClick={() => openWhatsApp(product.name, true)}
            className="mt-3 bg-[#D4AF37] text-black px-5 py-2 rounded-full text-sm"
          >
            Enquire on WhatsApp
          </button>
        </div>

        {/* Navigation Buttons (optional for desktop) */}
        <div className="hidden md:flex justify-between w-full max-w-md mt-4">
          <button onClick={prev} className="text-white" name="previous" aria-label="previous" >
            ←
          </button>
          <button onClick={next} className="text-white" name="next" aria-label="next">
            →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
