import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe, FiChevronDown, FiCheck } from "react-icons/fi";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "🇺🇸",
      nativeName: "English",
    },
    {
      code: "fr",
      name: "French",
      flag: "🇫🇷",
      nativeName: "Français",
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = async (lng) => {
    setIsChanging(true);
    setIsOpen(false);

    try {
      await i18n.changeLanguage(lng);

      // Add a subtle animation feedback
      const button = document.querySelector('[aria-label="Select language"]');
      if (button) {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
          button.style.transform = "scale(1)";
        }, 150);
      }
    } catch (error) {
      console.error("Error changing language:", error);
    } finally {
      setIsChanging(false);
    }
  };

  // Close dropdown when clicking outside and handle keyboard navigation
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowDown":
          event.preventDefault();
          const currentIndex = languages.findIndex(
            (lang) => lang.code === i18n.language
          );
          const nextIndex = (currentIndex + 1) % languages.length;
          changeLanguage(languages[nextIndex].code);
          break;
        case "ArrowUp":
          event.preventDefault();
          const prevIndex =
            (currentIndex - 1 + languages.length) % languages.length;
          changeLanguage(languages[prevIndex].code);
          break;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, i18n.language, languages]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isChanging}
        className="flex items-center cursor-pointer space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FiGlobe
          className={`w-4 h-4 transition-transform duration-300 ${
            isChanging ? "animate-spin" : "group-hover:rotate-12"
          }`}
        />
        {/* <span className="text-sm font-medium">{currentLanguage.flag}</span> */}
        <span className="text-sm font-medium hidden sm:block">
          {currentLanguage.code.toUpperCase()}
        </span>
        <FiChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        role="listbox"
        aria-label="Language options"
        className={`absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              disabled={isChanging}
              role="option"
              aria-selected={i18n.language === language.code}
              className={`w-full flex items-center cursor-pointer justify-between px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed ${
                i18n.language === language.code ? "bg-white/10" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg text-blue-400">{language.flag}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    {language.name}
                  </span>
                </div>
              </div>
              {i18n.language === language.code && (
                <FiCheck className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
