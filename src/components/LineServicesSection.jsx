import React from "react";

const LineServicesSection = () => {
  return (
    <div className=" relative h-[1px] container z-10 w-full">
      <div className="absolute top-1/2 left-1/2 w-[108.5%] xl:w-[110%] h-[70000%] -translate-x-1/2 -translate-y-1/3">
        {/* Desktop SVG */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1287 735"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M57.502 732H48.502C23.0969 732 2.50195 711.405 2.50195 686V315C2.50195 289.595 23.0969 269 48.502 269H1238C1263.41 269 1284 248.405 1284 223V49C1284 23.5949 1263.41 3 1238 3H1221.5"
            stroke="url(#paint0_linear_3_997)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_997"
              x1="30.0019"
              y1="3"
              x2="30.0019"
              y2="732"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.0314417" stopColor="#854CFF" />
              <stop offset="0.959393" stopColor="#504CFF" />
              <stop offset="1" stopColor="#01002B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mobile SVG */}
        <svg
          className="absolute inset-0 w-full h-full block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 735"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M50 732H40C15 732 5 710 5 680V330C5 300 25 270 50 270H350C375 270 395 250 395 220V50C395 20 375 0 350 0H330"
            stroke="url(#paint0_linear_mobile)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_mobile"
              x1="30"
              y1="0"
              x2="30"
              y2="732"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.0314417" stopColor="#854CFF" />
              <stop offset="0.959393" stopColor="#504CFF" />
              <stop offset="1" stopColor="#01002B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LineServicesSection;
