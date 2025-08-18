import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import webbg from "../../../assets/webdevbg.png";
import mobbg from "../../../assets/mobileappbg.png";
import aibg from "../../../assets/aibg.png";
import uiuxbg from "../../../assets/uiuxbg.png";

// icons import
import webicon from "../../../assets/webdev.png";
import mobicon from "../../../assets/mobiledev.png";
import aiicon from "../../../assets/ai.png";
import uiuxicon from "../../../assets/uiux.png";

const ServiceCard = ({ title, desc, bg = "web", icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80; // Maximum characters before showing "see more"
  const shouldShowSeeMore = desc.length > maxLength;
  const displayText = isExpanded ? desc : desc.slice(0, maxLength) + "...";

  return (
    <div
      style={{
        backgroundImage: `url(${
          bg === "web"
            ? webbg
            : bg === "mobile"
            ? mobbg
            : bg === "ai"
            ? aibg
            : uiuxbg
        })`,
      }}
      className="w-full xl:max-w-[588px] lg:max-w-[450px] max-w-[388px] rounded-3xl bg-cover bg-center p-6 sm:p-8 md:p-[40px] bg-blue-500 min-h-[370px] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 group cursor-pointer"
    >
      <div className="w-full max-w-[252px] flex flex-col gap-4 sm:gap-5 md:gap-[20px] h-full">
        <div className="icon w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] rounded-full bg-[#737376] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
          <img
            src={
              icon === "web"
                ? webicon
                : icon === "mobile"
                ? mobicon
                : icon === "ai"
                ? aiicon
                : uiuxicon
            }
            alt="Service Icon"
            className="object-cover w-full h-full rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h1 className="text-white text-2xl sm:text-3xl md:text-[32px] font-medium">
          {title}
        </h1>

        <div className="flex-1 flex flex-col">
          <p className="leading-6 sm:leading-7 md:leading-[28px] text-sm sm:text-base text-white/90 mb-2 overflow-hidden">
            {displayText}
          </p>

          {shouldShowSeeMore && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-white text-sm font-medium hover:text-[#504CFF] transition-colors duration-300 self-start mb-4 bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 sm:gap-[10px] text-sm sm:text-base text-white transition-all duration-300 group/link mt-auto"
        >
          <span className="border-b border-white transition-colors duration-300">
            Start With us
          </span>
          <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
