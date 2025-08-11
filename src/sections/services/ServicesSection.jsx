import React from "react";
import Button from "../../components/ui/Button";
import ServiceCard from "./components/ServiceCard";
import heroBg2 from "../../assets/hero-section-bg-effect2.png";
import perbg from "../../assets/perbg.png";
import LineServicesSection from "../../components/LineServicesSection";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="text-white relative container mt-[100px] flex flex-col gap-[50px] mb-[126px]"
    >
      <div className="flex flex-col gap-4 pt-[60px] relative z-20">
        <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          We don’t just offer services <br /> we build tailored solutions to
          match your vision and budget
        </h1>
        <p className="text-white text-[16px] font-normal">
          Websites, mobile apps, AI systems, and stunning visuals <br /> we’re a
          full-stack team crafting digital solutions from idea to launch
        </p>
      </div>
      <LineServicesSection />
      <div className="flex flex-col gap-4 relative z-20">
        <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Let’s work together <br /> with our us
        </h1>
        <div className="flex flex-col gap-[30px] sm:gap-0 items-start sm:flex-row justify-between sm:items-center w-full">
          <p className="text-white text-[16px] font-normal">
            help you to build website company that is modern, user friendly,{" "}
            <br /> good CEO, and Clean design
          </p>
          <Button color="white">Get Started</Button>
        </div>
      </div>
      <div className="cards flex justify-center relative z-20 flex-wrap gap-[40px]">
        <ServiceCard
          icon={"web"}
          title={"Website Dev"}
          desc={
            "From sleek landing pages to complex multi-page websites fast, responsive, and built to drive results"
          }
          bg="web"
        />
        <ServiceCard
          icon={"mobile"}
          title={"Mobile Apps"}
          desc={
            "We build scalable Android & iOS apps with Flutter, ensuring smooth UX and a modern look"
          }
          bg="mobile"
        />
        <ServiceCard
          icon={"ai"}
          title={"AI & Automation"}
          desc={
            "We automate company  from task routing to data syncing, Save time, cut errors, and scale smarter"
          }
          bg="ai"
        />
        <ServiceCard
          icon={"uiux"}
          title={"UI/UX Design"}
          desc={
            "help you to build website company that is modern, user friendly, good CEO, and Clean design"
          }
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
