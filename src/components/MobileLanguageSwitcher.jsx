import React from "react";
import { useTranslation } from "react-i18next";

const MobileLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "🇺🇸",
    },
    {
      code: "fr",
      name: "French",
      flag: "🇫🇷",
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            i18n.language === language.code
              ? "bg-[#504CFF] text-white shadow-lg"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <span className="text-lg">{language.flag}</span>
          <span className="text-sm font-medium">
            {language.code.toUpperCase()}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MobileLanguageSwitcher;
