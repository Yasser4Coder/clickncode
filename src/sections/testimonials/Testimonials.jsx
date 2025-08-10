import React from "react";
import TestimonialsCard from "./components/TestimonialsCard";
import { testimonialsData } from "./TestimonialsData";
import testimonialCardBg from "../../assets/TestimonialsCardBG.svg";
import testimonialCardAdd from "../../assets/add.svg";
import testimonialsIconBg from "../../assets/bgicom.svg";
import heroBg2 from "../../assets/hero-section-bg-effect2.png";
import perbg from "../../assets/perbg.png";

const Testimonials = () => {
  return (
    <div className=" relative  min-w-[100vw]">
      <div className="container mx-auto text-white flex flex-col gap-[40px] mb-[100px]">
        <div>
          <div className="flex flex-col gap-4  mb-8">
            <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
              What they say about us
            </h1>
            <p className="text-white text-[16px] font-normal">
              Work in the IT field includes Web Design, UI/UX Design, ai &{" "}
              <br />
              automation
            </p>
          </div>
        </div>
        <div className="testimonials-cards flex justify-center gap-4 flex-wrap">
          {/* Render testimonial cards dynamically */}
          {testimonialsData.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          ))}

          {/* Add Feedback Card */}
          <div className="w-[384px] h-[236px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={testimonialCardBg}
              className="w-full h-full absolute top-0 left-0 z-0 object-cover"
              alt=""
            />
            <div className="w-full h-full flex flex-col gap-[20px] items-center justify-center relative z-10 p-[30px] text-white">
              <img src={testimonialCardAdd} alt="" />
              <div className="text-[16px] font-medium text-center">
                add your feedback about <br /> our services
              </div>
            </div>
          </div>
        </div>
        <img
          src={testimonialsIconBg}
          alt=""
          className=" absolute top-[10%] right-[-5%] z-[-2]"
        />
        <img
          src={heroBg2}
          alt=""
          className="absolute top-[-20%] left-[-10%] z-[-2]"
        />
        <img
          src={perbg}
          alt=""
          className="absolute top-[15%] right-[-10%] z-[-2]"
        />
      </div>
    </div>
  );
};

export default Testimonials;
