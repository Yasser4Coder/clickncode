import React, { useState } from "react";
import TestimonialsCard from "./components/TestimonialsCard";
import { testimonialsData } from "./testimonialsData";
import testimonialCardBg from "../../assets/TestimonialsCardBG.svg";
import testimonialCardAdd from "../../assets/add.svg";
import testimonialsIconBg from "../../assets/bgicom.svg";
import heroBg2 from "../../assets/hero-section-bg-effect2.png";
import perbg from "../../assets/perbg.png";

const Testimonials = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    avatar: "",
  });

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setNewTestimonial({
      name: "",
      role: "",
      company: "",
      content: "",
      rating: 5,
      avatar: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("New testimonial:", newTestimonial);
    // For now, just close the form
    handleCloseForm();
  };

  return (
    <section id="about" className=" relative  min-w-[100vw]">
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
        <div className="testimonials-cards relative z-20 flex justify-center gap-4 flex-wrap">
          {/* Render testimonial cards dynamically */}
          {testimonialsData.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          ))}

          {/* Add Feedback Card */}
          <div
            onClick={handleAddClick}
            className="w-[384px] h-[236px] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
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

      {/* Add Testimonial Popup Form */}
      {showAddForm && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleCloseForm}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Add New Testimonial
              </h3>
              <button
                onClick={handleCloseForm}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newTestimonial.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Role Field */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Title *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={newTestimonial.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent"
                  placeholder="e.g., CEO, Developer, Manager"
                />
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={newTestimonial.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>

              {/* Rating Field */}
              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Rating *
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={newTestimonial.rating}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                  <option value={3}>⭐⭐⭐ (3 stars)</option>
                  <option value={2}>⭐⭐ (2 stars)</option>
                  <option value={1}>⭐ (1 star)</option>
                </select>
              </div>

              {/* Content Field */}
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Testimonial *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={newTestimonial.content}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent resize-none"
                  placeholder="Share your experience with our services..."
                />
              </div>

              {/* Avatar URL Field */}
              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Profile Picture URL (Optional)
                </label>
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  value={newTestimonial.avatar}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#4A3AFF] to-[#897FFF] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#3A2AEF] hover:to-[#796FEF] transition-all duration-300 transform hover:scale-105"
                >
                  Submit Testimonial
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
