import React, { useState } from "react";

const PricingCard = ({ plan, isSelected, onSelect }) => {
  const { title, price, currency, icon, features, buttonText, isHighlighted } =
    plan;
  const [isHovered, setIsHovered] = useState(false);

  // Handle both hover and selection states
  const isActive = isHovered || isSelected;

  const handleCardClick = () => {
    onSelect();
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent card selection when clicking button
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`w-full max-w-[320px] rounded-2xl shadow-lg p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden ${
        isHighlighted
          ? "bg-[#4A3AFF] text-white"
          : isActive
          ? "bg-[#4A3AFF] text-white"
          : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Icon */}
      <div className="flex mb-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHighlighted
              ? "bg-white/20"
              : isActive
              ? "bg-white/20"
              : "bg-[#897FFF]"
          }`}
        >
          <span
            className={`font-bold text-lg transition-all duration-300 ${
              isHighlighted ? "text-white" : "text-white"
            }`}
          >
            <img src={icon} alt="" />
          </span>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-semibold text-start mb-10 transition-all duration-300 ${
          isHighlighted
            ? "text-white"
            : isActive
            ? "text-white"
            : "text-[#0C123B]"
        }`}
      >
        {title}
      </h3>

      {/* Price */}
      <div className="text-start mb-10">
        <p
          className={`text-[16px] font-semibold mb-1 transition-all duration-300 ${
            isHighlighted
              ? "text-white/80"
              : isActive
              ? "text-white/80"
              : "text-[#170F49]"
          }`}
        >
          starting at
        </p>
        <p
          className={`text-4xl font-bold transition-all duration-300 ${
            isHighlighted
              ? "text-white"
              : isActive
              ? "text-white"
              : "text-[#0C123B]"
          }`}
        >
          {price} {currency}
        </p>
      </div>

      {/* Get Started Button */}
      <button
        onClick={handleButtonClick}
        className={`w-full py-3 px-6 rounded-xl font-medium mb-6 hover:shadow-md transition-all duration-300 ${
          isHighlighted
            ? "bg-white text-[#854CFF] hover:bg-gray-100"
            : isActive
            ? "bg-white text-[#854CFF]"
            : "bg-white border border-gray-300 text-gray-700"
        }`}
      >
        {buttonText}
      </button>

      {/* Separator Line */}
      <div
        className={`w-full h-px mb-6 transition-all duration-300 ${
          isHighlighted
            ? "bg-white/20"
            : isActive
            ? "bg-white/20"
            : "bg-gray-300"
        }`}
      ></div>

      {/* Features Section */}
      <div className="relative">
        <p
          className={`font-medium mb-6 transition-all duration-300 ${
            isHighlighted
              ? "text-white"
              : isActive
              ? "text-white"
              : "text-[#170F49]"
          }`}
        >
          Features included:
        </p>

        {/* Fixed Height Container */}
        <div
          className={`h-[120px] overflow-hidden transition-all duration-500 ${
            isActive ? "h-auto overflow-visible" : ""
          }`}
        >
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                    isHighlighted
                      ? "bg-white"
                      : isActive
                      ? "bg-white"
                      : "bg-[#4A3AFF]"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-all duration-300 ${
                      isHighlighted
                        ? "text-white"
                        : isActive
                        ? "text-[#4A3AFF]"
                        : "text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className={`text-sm leading-relaxed transition-all duration-300 ${
                    isHighlighted
                      ? "text-white/90"
                      : isActive
                      ? "text-white/90"
                      : "text-gray-700"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Separator Line */}
      <div
        className={`w-full h-px mb-2 mt-8 transition-all duration-300 ${
          isHighlighted
            ? "bg-white/20"
            : isActive
            ? "bg-white/20"
            : "bg-gray-300"
        }`}
      ></div>
    </div>
  );
};

export default PricingCard;
