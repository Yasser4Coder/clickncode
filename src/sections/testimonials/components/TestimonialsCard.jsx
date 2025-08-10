import React from "react";
import testimonialCardBg from "../../../assets/TestimonialsCardBG.svg";
import testimonialCardIcon from "../../../assets/TestimonialsIcon.svg";
import testimonialCardImage from "../../../assets/TestimonialsCardImage.png";

const TestimonialsCard = ({ testimonial }) => {
  // Default testimonial data if none provided
  const defaultTestimonial = {
    name: "Sarah Mekkawi",
    title: "Marketing Manager",
    company: "GreenRoots",
    testimonial:
      "Working with ClicknCod was a breath of fresh air they understood our vision and turned it into a beautiful, functional product",
    image: "/placeholder-avatar.png",
  };

  const testimonialData = testimonial || defaultTestimonial;

  return (
    <div className="w-[384px] h-[236px] relative transition-all rounded-3xl duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={testimonialCardBg}
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
        alt=""
      />
      <div className="w-full h-full flex flex-col gap-[20px] relative z-10 p-[30px] text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[15px] max-w-[60%]">
            <div className="min-w-[48px] min-h-[48px] rounded-full bg-[#504CFF]">
              <img
                src={testimonialCardImage}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-[16px] font-semibold">
                {testimonialData.name}
              </h1>
              <p className="text-[12px] text-gray-400">
                {testimonialData.title}
                {testimonialData.company && `, ${testimonialData.company}`}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[43px] h-[31px]">
            <img
              src={testimonialCardIcon}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-[16px] font-medium leading-relaxed">
          {testimonialData.testimonial}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
