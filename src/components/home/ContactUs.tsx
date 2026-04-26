import { openWhatsApp } from "../../utils/whatsapp";
import FadeIn from "../common/FadeIn";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      className="px-4 py-16 bg-gradient-to-b from-black to-[#0f0f0f] text-center"
      id="contact"
    >
      <FadeIn>
        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src="/src/assets/images/connect.webp"
            alt="Logo"
            className="w-28 h-28"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-2xl md:text-4xl font-serif tracking-wide text-white text-center mb-10">
            Let’s Create Something Beautiful
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
          Have a custom idea or want to order a design? Let’s connect and bring
          your vision to life.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <button
          aria-label="Chat on WhatsApp"
          name="chat-on-whatsapp"
          onClick={() => openWhatsApp("Hello, I want to place an order")}
          className="flex items-center gap-2 mx-auto bg-[#25D366] text-black px-6 py-3 rounded-full gold-glow"
        >
          <FaWhatsapp size={30} />
          Chat on WhatsApp
        </button>
      </FadeIn>
    </section>
  );
};

export default ContactUs;
