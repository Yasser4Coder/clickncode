import ai from "../../assets/pricingAI.svg";
import mobile from "../../assets/pricingMobile.svg";
import ui from "../../assets/pricingUIUX.svg";
import website from "../../assets/pricingWeb.svg";

export const pricingData = [
  {
    id: 1,
    titleEn: "AI Solutions",
    titleFr: "Solutions IA",
    price: "80,000",
    currency: "DA",
    icon: ai,
    featuresEn: [
      "Custom AI logic",
      "App & tool integrations",
      "Documentation & support",
    ],
    featuresFr: [
      "Logique IA personnalisée",
      "Intégrations d'applications et d'outils",
      "Documentation et support",
    ],
    isHighlighted: false,
    buttonTextEn: "Get started →",
    buttonTextFr: "Commencer →",
  },
  {
    id: 2,
    titleEn: "Mobile App Development",
    titleFr: "Développement d'Applications Mobiles",
    price: "90,000",
    currency: "DA",
    icon: mobile,
    featuresEn: [
      "Cross-platform Flutter development",
      "Clean, scalable code following industry best practices",
      "Backend integration + API",
    ],
    featuresFr: [
      "Développement Flutter multiplateforme",
      "Code propre et évolutif suivant les meilleures pratiques",
      "Intégration backend + API",
    ],
    isHighlighted: false,
    buttonTextEn: "Get started →",
    buttonTextFr: "Commencer →",
  },
  {
    id: 3,
    titleEn: "UI/UX Design",
    titleFr: "Design UI/UX",
    price: "35,000",
    currency: "DA",
    icon: ui,
    featuresEn: [
      "Wireframes & high-fidelity UI",
      "Figma source file",
      "Design system",
    ],
    featuresFr: [
      "Maquettes et UI haute fidélité",
      "Fichier source Figma",
      "Système de design",
    ],
    isHighlighted: false,
    buttonTextEn: "Get started →",
    buttonTextFr: "Commencer →",
  },
  {
    id: 4,
    titleEn: "Website Development",
    titleFr: "Développement de Sites Web",
    price: "60,000",
    currency: "DA",
    icon: website,
    featuresEn: [
      "Custom responsive website",
      "Hosting setup support",
      "Speed optimization",
    ],
    featuresFr: [
      "Site web responsive personnalisé",
      "Support de configuration d'hébergement",
      "Optimisation de la vitesse",
    ],
    isHighlighted: false,
    buttonTextEn: "Get started →",
    buttonTextFr: "Commencer →",
  },
];

// Helper function to get pricing data for a specific language
export const getPricingDataForLanguage = (language = "en") => {
  return pricingData.map((plan) => ({
    ...plan,
    title: language === "fr" ? plan.titleFr : plan.titleEn,
    features: language === "fr" ? plan.featuresFr : plan.featuresEn,
    buttonText: language === "fr" ? plan.buttonTextFr : plan.buttonTextEn,
  }));
};
