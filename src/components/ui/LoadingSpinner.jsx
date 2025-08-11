import React from "react";

const LoadingSpinner = ({ size = "md", color = "blue", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colorClasses = {
    blue: "border-blue-500",
    green: "border-green-500",
    red: "border-red-500",
    yellow: "border-yellow-500",
    white: "border-white",
    gray: "border-gray-500",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div
        className={`w-full h-full border-4 border-t-transparent rounded-full animate-spin ${colorClasses[color]}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
