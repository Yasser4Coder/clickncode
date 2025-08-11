import React from "react";

const LineBtweenPricingConatct = () => {
  return (
    <div className="relative h-[141px] container z-10 w-full">
      <div className="absolute top-1/2 left-1/2 w-full xl:w-[103%] h-[320%] -translate-x-1/2 -translate-y-1/2">
        {/* Desktop SVG */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1356 341"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M55.1663 338H49C23.5949 338 3 317.405 3 292V213.853V185.71C3 160.304 23.5949 139.71 49 139.71H1307C1332.41 139.71 1353 119.115 1353 93.7096V49C1353 23.5949 1332.41 3 1307 3H1306.1"
            stroke="url(#paint0_linear_59_251)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_59_251"
              x1="66.7588"
              y1="3"
              x2="66.7588"
              y2="338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.019868" stopColor="#854CFF" />
              <stop offset="0.983867" stopColor="#504CFF" />
              <stop offset="1" stopColor="#1F1D61" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mobile SVG */}
        <svg
          className="absolute inset-0 w-full h-full block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 341" // Smaller viewBox for mobile
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M10 340H5C3 340 1 320 1 300V200C1 150 20 130 50 130H350C380 130 399 110 399 80V40C399 20 380 0 350 0H345"
            stroke="url(#paint0_linear_mobile)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_mobile"
              x1="66"
              y1="3"
              x2="66"
              y2="338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.019868" stopColor="#854CFF" />
              <stop offset="0.983867" stopColor="#504CFF" />
              <stop offset="1" stopColor="#1F1D61" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LineBtweenPricingConatct;
