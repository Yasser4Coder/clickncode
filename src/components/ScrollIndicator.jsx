import { FaMouse } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-white">
      {/* Circular Scroll Indicator */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center animate-pulse">
        {/* Inner Circle with Text */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center">
          {/* Center Content */}
          <div className="flex items-center justify-center text-white animate-bounce">
            <FaMouse className="text-2xl sm:text-3xl text-white/80 hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Curved Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="curve1"
                  d="M 50,10 A 40,40 0 1,1 49.9,10"
                  fill="none"
                />
              </defs>
              <text
                fill="white"
                className="font-mono text-[10px] sm:text-[12px]"
                style={{ letterSpacing: "0.15em" }}
              >
                <textPath href="#curve1" startOffset="0%">
                  scroll down for work together
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0">
          <div
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
            style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
            style={{
              top: "50%",
              right: "10%",
              transform: "translateY(-50%)",
              animationDelay: "0.5s",
            }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
            style={{
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              animationDelay: "1s",
            }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
            style={{
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              animationDelay: "1.5s",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
