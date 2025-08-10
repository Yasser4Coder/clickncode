import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import { productsData } from "./productsData";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from products data
  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 text-white">
      <div className="flex flex-col gap-4  mb-8">
        <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Our Products
        </h1>
        <p className="text-white text-[16px] font-normal">
          help you to build website company that is modern, user friendly,{" "}
          <br className="hidden md:block" /> good CEO, and Clean design
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#854CFF] text-white shadow-lg scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid - Responsive Layout */}
      <div className="products">
        {/* Mobile: Single column, Desktop: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">
              No products found in the "{selectedCategory}" category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
