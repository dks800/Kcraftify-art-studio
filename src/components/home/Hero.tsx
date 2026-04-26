import { motion } from "framer-motion";
import { openWhatsApp } from "../../utils/whatsapp";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoadVideo(true), 1000);
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-white">
      {/* Desktop Video */}
      {loadVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/logo.webp"
          className="hidden md:block absolute inset-0 w-full h-full object-contain transition"
        >
          <source src="/src/assets/videos/hero-web.mp4" type="video/mp4" />
        </video>
      ) : null}

      {/* Mobile Video */}
      {loadVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/logo.webp"
          className="block md:hidden absolute inset-0 w-full h-full object-cover transition"
        >
          <source src="/src/assets/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <motion.h1
          className="text-3xl md:text-6xl font-serif leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Luxury Resin Art <br /> Crafted to Perfection
        </motion.h1>

        <motion.p
          className="text-gray-300 max-w-md mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Handmade designs that elevate your space with elegance
        </motion.p>

        <div className="flex gap-4 justify-center">
          <a
            href="#gallery"
            className="hover:text-white transition bg-[#025B3A] text-white px-6 py-3 rounded-full cursor-pointer hover:bg-[#013618] transition duration-300"
          >
            Explore Collection
          </a>

          <button
            aria-label="Chat on WhatsApp"
            name="chat-on-whatsapp"
            className="border border-[#D4AF37] px-6 py-3 rounded-full text-white bg-[#D4AF37] cursor-pointer hover:bg-[#bd9b2e] transition duration-300"
            onClick={() =>
              openWhatsApp("Hello, I want to place a custom order")
            }
          >
            Custom Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
