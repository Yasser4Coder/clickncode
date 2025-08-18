import React from "react";

const LineProductsTest = () => {
  return (
    <div className="relative h-[200px] container z-10 w-full">
      <div className="absolute top-1/2 left-1/2 w-[98.5%] xl:w-[103%] h-[390%] -translate-x-1/2 -translate-y-1/2">
        {/* Desktop SVG */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1287 686"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M52.5 683H49C23.5949 683 3 662.405 3 637V431V326.5C3 301.095 23.5949 280.5 49 280.5H1238C1263.41 280.5 1284 259.905 1284 234.5V47.5C1284 22.9233 1264.08 3 1239.5 3V3"
            stroke="url(#paint0_linear_desktop)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_desktop"
              x1="63.5001"
              y1="3"
              x2="63.5001"
              y2="683"
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
          width="385"
          height="665"
          viewBox="0 0 396 665"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M2.99998 664.5C2.99996 619 2.99997 663 2.99997 633V423V333C2.99997 303 22.9999 283 47.9999 283H348C373 283 393 263 393 233V53C393 23 373 3 348 3H328"
            stroke="url(#paint0_linear_2044_453)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2044_453"
              x1="28"
              y1="3"
              x2="28"
              y2="686"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01002B" />
              <stop offset="0.1" stopColor="#853CFF" />
              <stop offset="0.789708" stopColor="#504CFF" />
              <stop offset="0.940358" stopColor="#01002B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LineProductsTest;
