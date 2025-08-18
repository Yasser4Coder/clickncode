import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/ui/Button";
import ServiceCard from "./components/ServiceCard";
import heroBg2 from "../../assets/hero-section-bg-effect2.png";
import perbg from "../../assets/perbg.png";
import LineServicesSection from "../../components/LineServicesSection";

const ServicesSection = () => {
  const { t } = useTranslation();
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    description:
      "We offer tailored web development solutions to meet your business needs.",
    provider: {
      "@type": "Organization",
      name: "ClicknCod",
      url: "https://www.clickncod.com",
    },
  };

  return (
    <section
      id="services"
      className="text-white relative container mt-[100px] flex flex-col gap-[50px] mb-[126px]"
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="flex flex-col gap-4 pt-[60px] relative z-20">
        <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight whitespace-pre-line">
          {t("services.title")}
        </h1>
        <p className="text-white text-[16px] font-normal whitespace-pre-line">
          {t("services.subtitle")}
        </p>
      </div>
      <LineServicesSection />
      <div className="flex flex-col gap-4 relative z-20">
        <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight whitespace-pre-line">
          {t("services.title2")}
        </h1>
        <div className="flex flex-col gap-[30px] sm:gap-0 items-start sm:flex-row justify-between sm:items-center w-full">
          <p className="text-white text-[16px] font-normal whitespace-pre-line">
            {t("services.subtitle2")}
          </p>
          <Button color="white" onClick={scrollToContact}>
            {t("hero.cta")}
          </Button>
        </div>
      </div>
      <div className="cards flex justify-center relative z-20 flex-wrap gap-[40px]">
        <ServiceCard
          icon={"web"}
          title={t("services.webDevelopment.title")}
          desc={t("services.webDevelopment.description")}
          bg="web"
        />
        <ServiceCard
          icon={"mobile"}
          title={t("services.mobileDevelopment.title")}
          desc={t("services.mobileDevelopment.description")}
          bg="mobile"
        />
        <ServiceCard
          icon={"ai"}
          title={t("services.aiSolutions.title")}
          desc={t("services.aiSolutions.description")}
          bg="ai"
        />
        <ServiceCard
          icon={"uiux"}
          title={t("services.uiUxDesign.title")}
          desc={t("services.uiUxDesign.description")}
          bg="uiux"
        />
      </div>
      <img
        src={heroBg2}
        alt=""
        className="absolute top-[70%] left-[-10%] z-[-2]"
      />
      <img
        src={perbg}
        alt=""
        className="absolute top-[50%] right-[-10%] z-[-2]"
      />
    </section>
  );
};

export default ServicesSection;
