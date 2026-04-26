import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "../../utils/whatsapp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-black border-t border-white/10">
      <div className="max-w-md mx-auto text-center">
        {/* Brand */}
        <motion.h2
          className="text-xl font-serif text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Kcraftify<span className="text-[#D4AF37]">.</span>
        </motion.h2>

        {/* Tagline */}
        <p className="text-sm text-gray-400 mb-6">
          Handmade resin art crafted with passion and elegance.
        </p>

        {/* CTA */}

        <div className="flex justify-center gap-6 mb-6">
          {/* WhatsApp */}
          <button
            name="connect-whatsapp"
            aria-label="connect whatsapp"
            onClick={() => openWhatsApp("Hello, I want to place an order")}
            className="cursor-pointer text-gray-400 hover:text-[#25D366] transition duration-300"
          >
            <FaWhatsapp size={30} />
          </button>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kcraftify"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-400 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={30} />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaFacebookF size={30} />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-400 hover:text-red-500 transition duration-300"
          >
            <FaYoutube size={30} />
          </a>
        </div>
        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Note */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Kcraftify Art Studio. All rights
          reserved.
        </p>
        <p className="text-sm text-gray-500 p-4">Made with ❤️ by <a href="https://murly.netlify.app/" target="_" className="font-bold text-orange-500 italic hover:text-orange-600 transition">Murly</a></p>
      </div>
    </footer>
  );
};

export default Footer;
