import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Button = ({ children, color = "blue", hidden = false }) => {
  if (color === "white") {
    return (
      <a
        href="#contact"
        className="flex button items-center hover:text-white cursor-pointer text-black bg-white gap-2 sm:gap-[10px] text-sm sm:text-base md:text-[16px] px-4 sm:px-6 md:px-[25px] py-3 sm:py-4 md:py-[15px] rounded-3xl font-medium transition-all duration-300 hover:bg-[#504CFF] hover:shadow-lg hover:shadow-[#504CFF]/25 hover:scale-105 active:scale-95"
      >
        <span>{children}</span>
        <BsArrowUpRightCircle className="transition-transform w-[20px] h-[20px] object-contain duration-300 group-hover:translate-x-1" />
      </a>
    );
  } else if (color === "transparent") {
    return (
      <a
        href="#contact"
        className={`hidden md:flex button ${
          hidden ? "hidden" : ""
        } items-center text-white cursor-pointer bg-transparent border-2 border-[#504CFF] gap-2 sm:gap-[10px] text-sm sm:text-base md:text-[16px] px-4 sm:px-6 md:px-[25px] py-3 sm:py-4 md:py-[15px] rounded-3xl font-medium transition-all duration-300 hover:bg-[#504CFF] hover:shadow-lg hover:shadow-[#504CFF]/25 hover:scale-105 active:scale-95`}
      >
        <span>{children}</span>
        <BsArrowUpRightCircle className="transition-transform w-[20px] h-[20px] object-contain duration-300 group-hover:translate-x-1" />
      </a>
    );
  }
};

export default Button;
