import React, { useState } from "react";
import Button from "./ui/Button";
import arrow from "../assets/uil_arrow-up.png";
import logo from "../assets/logo-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a
            href="#about"
            className="relative transition-all duration-300 hover:text-[#504CFF] group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#504CFF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="relative transition-all duration-300 hover:text-[#504CFF] group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#504CFF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            className="relative transition-all duration-300 hover:text-[#504CFF] group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#504CFF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#pricing"
            className="relative transition-all duration-300 hover:text-[#504CFF] group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#504CFF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative transition-all duration-300 hover:text-[#504CFF] group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#504CFF] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Desktop Button */}
        <Button color="transparent" hidden={true}>
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white hover:text-[#504CFF] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 space-y-4 border-t border-white/10">
          <a
            href="#about"
            className="block text-white text-[18px] font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:text-[#504CFF] hover:bg-white/5 hover:pl-6"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block text-white text-[18px] font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:text-[#504CFF] hover:bg-white/5 hover:pl-6"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#pricing"
            className="block text-white text-[18px] font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:text-[#504CFF] hover:bg-white/5 hover:pl-6"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-white/10">
            <div
              onClick={scrollToContact}
              className="button cursor-pointer text-white border-2 flex gap-[10px] text-[16px] px-[25px] py-[15px] rounded-3xl font-medium border-[#504CFF] transition-all duration-300 hover:bg-[#504CFF] hover:shadow-lg hover:shadow-[#504CFF]/25 active:scale-95"
            >
              <span>Get Started</span>
              <img
                src={arrow}
                alt=""
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
