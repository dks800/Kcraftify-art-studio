import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import { useEffect, useState } from "react";
import FadeIn from "../common/FadeIn";
import { FaQuoteLeft } from "react-icons/fa";
import StarRating from "../common/StarRating";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const renderTestimonials = () => {
    return testimonials.map((item) => (
      <div
        key={item.id}
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 min-w-[300px] flex gap-2 flex-col justify-between"
      >
        <div>
          <FaQuoteLeft className="text-[#D4AF37] mb-3" size={20} />

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {item.text}
          </p>
        </div>
        <div className="flex gap-2 justify-between">
          <p className="text-xs text-white italic">{item.name}</p>
          <StarRating rating={item.ratings} />
        </div>
      </div>
    ));
  };

  return (
    <section className="px-4 py-16 bg-black overflow-hidden">
      {/* Heading */}
      <FadeIn>
        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src="/src/assets/images/feedback.webp"
            alt="Logo"
            className="w-30 h-25"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-2xl md:text-4xl font-serif tracking-wide text-white text-center mb-10">
            What People Say
          </h2>
        </div>
      </FadeIn>

      {/* MOBILE → Manual Scroll */}
      {isMobile ? (
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {renderTestimonials()}
        </div>
      ) : (
        /* DESKTOP → Auto Scroll */
        <div className="relative">
          <motion.div
            className="flex gap-4"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: ["0%", "-50%"],
                transition: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                },
              })
            }
          >
            {renderTestimonials()}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
