import WhatsAppFloat from "../components/common/WhatsAppFloat";
import About from "../components/home/About";
import ContactUs from "../components/home/ContactUs";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <ContactUs />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
