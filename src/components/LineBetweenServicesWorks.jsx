import React from "react";

const LineBetweenServicesWorks = () => {
  return (
    <div className="relative h-[141px] container z-10 w-full">
      <div className="absolute top-1/2 left-1/2 w-[98.5%] xl:w-[103%] h-[280%] -translate-x-1/2 -translate-y-1/2">
        {/* Desktop SVG */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1287 524"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M1232 521.5H1238C1263.41 521.5 1284 500.905 1284 475.5V355C1284 329.595 1263.41 309 1238 309H49C23.5949 309 3 288.405 3 263V108C3 82.5949 23.5949 62 49 62H894C919.405 62 940 41.4051 940 16V0"
            stroke="url(#paint0_linear_3_879)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_879"
              x1="1246"
              y1="-13"
              x2="1246"
              y2="522"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.104167" stopColor="#854CFF" />
              <stop offset="0.965816" stopColor="#504CFF" />
              <stop offset="1" stopColor="#01002B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mobile SVG */}
        <svg
          className="absolute inset-0 w-full h-full block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 524"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M390 520H395C398 520 399 500 399 480V350C399 330 380 310 350 310H50C25 310 5 290 5 260V120C5 90 25 70 50 70H300C330 70 350 50 350 20V0"
            stroke="url(#paint0_linear_mobile)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_mobile"
              x1="200"
              y1="-10"
              x2="200"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.104167" stopColor="#854CFF" />
              <stop offset="0.965816" stopColor="#504CFF" />
              <stop offset="1" stopColor="#01002B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LineBetweenServicesWorks;
