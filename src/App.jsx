import "./App.css";
import Header from "./components/Header";
import Herosection from "./sections/Herosection";
import ServicesSection from "./sections/services/ServicesSection";
import heroBg2 from "./assets/hero-section-bg-effect2.png";
import ProductsSection from "./sections/products/ProductsSection";
import Testimonials from "./sections/testimonials/Testimonials";
import PricingSection from "./sections/pricing/PricingSection";
import ContactForm from "./sections/contact/ContactForm";
import Footer from "./components/Footer";
import LineBtweenPricingConatct from "./components/LineBtweenPricingConatct";
import LineBetweenServicesWorks from "./components/LineBetweenServicesWorks";
import LineProductsTest from "./components/LineProductsTest";
import HomePage from "./components/HomePage";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-XXXXXXXXX-X");
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <HomePage lang={currentLang} />
      <Herosection />
      <img
        src={heroBg2}
        alt=""
        className="absolute bottom-[-350px] sm:bottom-[-430px] sm:left-0 left-[-100px] z-0"
      />
      <ServicesSection />
      <LineBetweenServicesWorks />
      <ProductsSection />
      <LineProductsTest />
      <Testimonials />
      <PricingSection />
      <LineBtweenPricingConatct />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
