import FadeIn from "../common/FadeIn";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="px-4 py-16 bg-gradient-to-b from-[#0f0f0f] to-black"
      >
        {/* Heading */}
        <FadeIn>
          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src="/src/assets/images/logo.webp"
              alt="Logo"
              className="w-25 h-25"
              loading="lazy"
              decoding="async"
            />
            <h2 className="text-2xl md:text-4xl font-serif tracking-wide text-white text-center mb-10">
              The Story Behind Kcraftify
            </h2>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.1}>
          <div className="mx-auto text-center space-y-5 text-gray-300 text-sm leading-relaxed">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Kcraftify Art Studio is not just about resin art — it's about
              transforming emotions into timeless pieces.
            </p>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Founded by{" "}
              <span className="text-[#D4AF37] font-medium">
                Kinjal Rupala✨
              </span>
              , a software engineer by profession and an artist by heart, every
              creation begins as a passion-driven expression.
            </p>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              What started as a simple hobby soon became a journey of crafting
              meaningful, elegant designs that carry a personal touch.
            </p>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Each piece is carefully handmade, ensuring no two designs are ever
              the same — because true art is never replicated, only felt.
            </p>

            <p className="text-[#D4AF37]">Every creation holds a story.</p>
          </div>
        </FadeIn>
      </section>
      <section className="px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed space-y-4">
          <h2 className="text-2xl md:text-4xl font-serif tracking-wide text-white text-center mb-10">
            Handmade Resin Art <br /> in Ahmedabad, Gujarat
          </h2>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Kcraftify Art Studio specializes in handcrafted resin art products
            including coasters, wall decor, and jewelry. Based in Ahmedabad,
            Gujarat, we create/delivers custom resin designs for homes, gifting,
            and interior styling across India.
          </p>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Each piece is uniquely crafted with attention to detail, ensuring a
            premium and artistic finish. We accept custom orders across India.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
