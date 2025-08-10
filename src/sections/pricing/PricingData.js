import ai from "../../assets/pricingAI.svg";
import mobile from "../../assets/pricingMobile.svg";
import ui from "../../assets/pricingUIUX.svg";
import website from "../../assets/pricingWeb.svg";

export const pricingData = [
  {
    id: 1,
    title: "AI Solutions",
    price: "80,000",
    currency: "DA",
    icon: ai,
    features: [
      "Custom AI logic",
      "App & tool integrations",
      "Documentation & support",
    ],
    isHighlighted: false,
    buttonText: "Get started →",
  },
  {
    id: 2,
    title: "Mobile App Development",
    price: "90,000",
    currency: "DA",
    icon: mobile,
    features: [
      "Cross-platform Flutter development",
      "Clean, scalable code following industry best practices",
      "Backend integration + API",
    ],
    isHighlighted: false,
    buttonText: "Get started →",
  },
  {
    id: 3,
    title: "UI/UX Design",
    price: "35,000",
    currency: "DA",
    icon: ui,
    features: [
      "Wireframes & high-fidelity UI",
      "Figma source file",
      "Design system",
    ],
    isHighlighted: false,
    buttonText: "Get started →",
  },
  {
    id: 4,
    title: "Website Development",
    price: "60,000",
    currency: "DA",
    icon: website,
    features: [
      "Custom responsive website",
      "Hosting setup support",
      "Speed optimization",
    ],
    isHighlighted: false,
    buttonText: "Get started →",
  },
];
