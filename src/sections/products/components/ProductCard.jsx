import React from "react";

const ProductCard = ({ product }) => {
  // Default product data if none provided
  const defaultProduct = {
    name: "AquaTrack",
    shortDescription:
      "AquaTrack helps fish farmers monitor water quality in real-time.",
    detailedDescription:
      "A real-time monitoring and alert system for fish pond management. AquaTrack empowers aquaculture owners to track water quality metrics and respond with guided solutions, all from an intuitive dashboard interface.",
    category: "Development Project",
    image: "/placeholder-dashboard.png", // You can replace this with your actual image
  };

  const productData = product || defaultProduct;

  return (
    <div className="w-full mb-3 relative z-20 lg:mb-0 h-[500px]">
      {/* Top Card Section - Light Background */}
      <div className="relative product-card rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 h-[280px]">
        {/* Development Project Tag - Pill-shaped */}
        <div className="flex justify-between gap-4 h-full">
          <div className="min-w-[50%]">
            <div className="inline-block bg-transparent border-[#854CFF] border-2 text-gray-800 text-normal font-normal px-4 py-2 rounded-full mb-4 md:mb-6">
              {productData.category}
            </div>

            {/* Product Name */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-gray-900 mb-3 md:mb-4">
              {productData.name}
            </h2>

            {/* Short Description */}
            <p className="text-gray-700 text-base leading-relaxed mb-6 md:mb-8 max-w-full">
              {productData.shortDescription}
            </p>
          </div>
          <div className="w-full h-full rounded-2xl flex items-center justify-center">
            <img
              src={productData.image}
              alt="Product Image"
              className="w-full h-full object-contain object-center rounded-2xl"
            />
          </div>
        </div>

        {/* Expand Icon - Small arrow in top right */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <button className="w-6 h-6 md:w-8 md:h-8 bg-white cursor-pointer hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors shadow-md group">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-700 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Section - Dark Purple to Black Gradient */}
      <div className="relative mb-2 pb-3 pt-4 md:pt-6 lg:pt-8 shadow-xl">
        {/* Content */}
        <div className="text-start">
          {/* Product Name (Repeated) */}
          <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-white mb-4 md:mb-6">
            {productData.name}
          </h3>

          {/* Detailed Description */}
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl lg:max-w-3xl">
            {productData.detailedDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
