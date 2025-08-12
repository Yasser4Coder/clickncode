import React, { useState } from "react";
import PricingCard from "./components/PricingCard";
import { pricingData } from "./PricingData";
import heroBg2 from "../../assets/hero-section-bg-effect2.png";
import perbg from "../../assets/perbg.png";

const PricingSection = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardSelect = (cardId) => {
    setSelectedCardId(cardId);
  };

  return (
    <div className="relative min-w-[100vw] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-start mb-16">
          <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
            Pricing Sneak Peek
          </h1>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid relative z-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isSelected={selectedCardId === plan.id}
              onSelect={() => handleCardSelect(plan.id)}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#3939392c] border-t-[1px] border-[#635189] absolute top-0 left-0 w-full h-full z-[-1]"></div>
      <img
        src={heroBg2}
        alt=""
        className="absolute top-0 right-[-10%] z-[-2] rotate-180"
      />
      <img
        src={perbg}
        alt=""
        className="absolute top-[-20%] left-[-10%] z-[-1] rotate-180"
      />
    </div>
  );
};

export default PricingSection;
