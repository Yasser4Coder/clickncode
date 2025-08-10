import heroBg from "../assets/hero-section-bg-effect.png";
import Button from "../components/ui/Button";
import ScrollIndicator from "../components/ScrollIndicator";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Herosection = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center pt-16 mt-[35px] sm:mt-[55.2px] pb-4 sm:pb-8 px-4 justify-center relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center z-10 gap-[65px] sm:gap-[65px] md:gap-[35px] max-w-4xl mx-auto text-center w-full">
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] text-white hover:text-[#504CFF] transition-colors duration-300 cursor-pointer" />
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] text-white hover:text-[#504CFF] transition-colors duration-300 cursor-pointer" />
          <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] text-white hover:text-[#504CFF] transition-colors duration-300 cursor-pointer" />
          <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] text-white hover:text-[#504CFF] transition-colors duration-300 cursor-pointer" />
        </div>
        <h1 className="gradient-text text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] text-center font-bold leading-tight px-4">
          Build <br className="block sm:hidden" /> your smart digital{" "}
          <br className="hidden sm:block" /> product with just one click
        </h1>
        <p className="text-white text-[16px] text-center font-normal">
          No tech knowledge needed just bring your idea, we’ll handle the rest
        </p>
        <Button color="white">Start your journey with us</Button>
        <ScrollIndicator />
      </div>
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center absolute top-0 left-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
    </section>
  );
};

export default Herosection;
