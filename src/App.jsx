import "./App.css";
import Header from "./components/Header";
import Herosection from "./sections/Herosection";
import ServicesSection from "./sections/services/ServicesSection";
import heroBg2 from "./assets/hero-section-bg-effect2.png";
import ProductsSection from "./sections/products/ProductsSection";
import productsLine from "./assets/lineProduct.svg";
import lineTest from "./assets/lineTest.svg";
import Testimonials from "./sections/testimonials/Testimonials";
import PricingSection from "./sections/pricing/PricingSection";
import ContactForm from "./sections/contact/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Herosection />
      <img
        src={heroBg2}
        alt=""
        className="absolute bottom-[-350px] sm:bottom-[-430px] sm:left-0 left-[-100px] z-0"
      />
      ;
      <ServicesSection />
      <div className=" relative h-[420.5px] w-full container z-[-1]">
        <div className=" absolute top-[-23%] left-0 h-[170%] w-full flex items-center justify-center">
          <img
            src={productsLine}
            className="w-[100%] h-[100%] object-contain object-center"
            alt=""
          />
        </div>
      </div>
      <ProductsSection />
      <div className=" relative h-[190.5px] w-full container z-[-1]">
        <div className=" absolute top-[-23%] left-0 h-[170%] w-full flex items-center justify-center">
          <img src={lineTest} className="" alt="" />
        </div>
      </div>
      <Testimonials />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
