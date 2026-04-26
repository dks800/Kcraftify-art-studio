import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLogo = () => {
    return (
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/src/assets/images/logo.webp"
          alt="Logo"
          className="w-8 h-8"
          loading="lazy"
        />
        <h1 className="text-lg md:text-xl font-serif tracking-wide text-white">
          Kcraftify<span className="text-[#D4AF37]">.</span>
        </h1>
      </div>
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-[#d4af37]/40 py-2"
            : "bg-black/30 backdrop-blur-lg py-3"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-10">
          {renderLogo()}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#gallery" className="hover:text-white transition">
              Gallery
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="open-menu"
            name="open-menu"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
          >
            <BiMenuAltLeft size={22} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center px-4 py-4 border-b border-white/10 bg-[#025B3A]/90 border-b-[#025B3A]/90">
              {renderLogo()}

              <button
                aria-label="close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition"
                name="close-menu"
              >
                <CgClose size={22} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-lg text-gray-300 bg-gradient-to-t from-black/80 via-black/20 to-[#025B3A]/90">
              <a
                href="#gallery"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Gallery
              </a>

              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
