import { motion } from "framer-motion";
import type { Product } from "../../data/products";

interface Props {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: Props) => {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="relative rounded-xl overflow-hidden bg-[#121212]"
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.alt ?? product.name}
        className="w-full h-44 object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Glow Border */}
      <div className="absolute inset-0 border border-white/10 rounded-xl" />

      {/* Content */}
      <div className="absolute bottom-2 left-2 right-2">
        <p className="text-xs text-white/90">{product.name}</p>

        <span className="text-[10px] text-[#D4AF37]">Limited Handmade</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
