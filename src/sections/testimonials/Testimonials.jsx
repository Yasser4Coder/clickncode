import React, { useState } from "react";
import TestimonialsCard from "./components/TestimonialsCard";
import {
  useTestimonials,
  useTestimonialSubmission,
} from "../../hooks/useTestimonials.js";
import toast from "react-hot-toast";
import {
  FiPlus,
  FiX,
  FiStar,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiMail,
} from "react-icons/fi";
import testimonialCardBg from "../../assets/TestimonialsCardBG.svg";
import testimonialCardAdd from "../../assets/add.svg";
import testimonialsIconBg from "../../assets/bgicom.svg";
import heroBg2 from "../../assets/hero-section-bg-effect2.png";
import perbg from "../../assets/perbg.png";

const Testimonials = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    testimonial: "",
    rating: 5,
    service: "Web Development",
  });

  // React Query hooks
  const {
    data: testimonialsData,
    isLoading,
    error,
  } = useTestimonials({ limit: 6, status: "approved" }); // Show all approved testimonials, not just featured
  const testimonialMutation = useTestimonialSubmission();

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setNewTestimonial({
      name: "",
      title: "",
      company: "",
      email: "",
      testimonial: "",
      rating: 5,
      service: "Web Development",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewTestimonial((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if mutation is already in progress
    if (testimonialMutation.isPending) {
      return;
    }

    try {
      const result = await testimonialMutation.mutateAsync(newTestimonial);

      // Check if the submission was successful
      if (result && result.status === "success") {
        toast.success(
          "Thank you for your testimonial! It has been submitted for review and will be published once approved."
        );
        handleCloseForm();
      } else {
        // Handle unexpected response format
        toast.error("Unexpected response from server. Please try again.");
      }
    } catch (error) {
      console.error("Testimonial submission failed:", error);

      // Show more specific error messages
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to submit testimonial. Please try again later.");
      }
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <section id="about" className="relative min-w-[100vw]">
        <div className="container mx-auto text-white flex flex-col gap-[40px] mb-[100px]">
          <div className="text-center">
            <h1 className="gradient-text bg-amber-100 sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
              What they say about us
            </h1>
            <p className="text-white text-[16px] font-normal">
              Work in the IT field includes Web Design, UI/UX Design, ai &
              automation
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="about" className="relative min-w-[100vw]">
        <div className="container mx-auto text-white flex flex-col gap-[40px] mb-[100px]">
          <div className="text-center">
            <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
              What they say about us
            </h1>
            <p className="text-white text-[16px] font-normal">
              Work in the IT field includes Web Design, UI/UX Design, ai &
              automation
            </p>
          </div>
          <div className="text-center text-red-400">
            <p>Failed to load testimonials. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative min-w-[100vw]">
      <div className="container mx-auto text-white flex flex-col gap-[40px] mb-[100px]">
        <div>
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
              What they say about us
            </h1>
            <p className="text-white text-[16px] font-normal">
              Work in the IT field includes Web Design, UI/UX Design, ai &
              automation
            </p>
            {/* Show count of approved testimonials */}
            {!isLoading && testimonialsData?.data && (
              <p className="text-gray-400 text-sm">
                {(() => {
                  const approvedCount = (
                    testimonialsData.data.docs || testimonialsData.data
                  ).filter((t) => t.status === "approved").length;
                  return `${approvedCount} approved testimonial${
                    approvedCount !== 1 ? "s" : ""
                  } displayed`;
                })()}
              </p>
            )}
          </div>
        </div>

        <div className="testimonials-cards relative z-20 flex justify-center gap-4 flex-wrap">
          {/* Loading state */}
          {isLoading && (
            <div className="w-full text-center text-gray-400 py-8">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p>Loading testimonials...</p>
            </div>
          )}

          {/* Render testimonial cards dynamically - Only show approved testimonials */}
          {(!isLoading &&
            testimonialsData?.data?.docs
              ?.filter((testimonial) => testimonial.status === "approved")
              ?.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial._id}
                  testimonial={testimonial}
                />
              ))) ||
            (!isLoading &&
              testimonialsData?.data
                ?.filter((testimonial) => testimonial.status === "approved")
                ?.map((testimonial) => (
                  <TestimonialsCard
                    key={testimonial._id || testimonial.id}
                    testimonial={testimonial}
                  />
                )))}

          {/* Show message if no approved testimonials */}
          {!isLoading &&
            testimonialsData?.data &&
            (testimonialsData.data.docs || testimonialsData.data).filter(
              (t) => t.status === "approved"
            ).length === 0 && (
              <div className="w-full text-center text-gray-400 py-8">
                <p>No testimonials available at the moment.</p>
                <p className="text-sm mt-2">
                  Be the first to share your experience!
                </p>
              </div>
            )}

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

        {/* Background Images */}
        <img
          src={testimonialsIconBg}
          alt=""
          className="absolute top-[10%] right-[-5%] z-[-2]"
        />
        <img
          src={heroBg2}
          alt=""
          className="absolute top-[-20%] left-[-10%] z-[-2]"
        />
        <img
          src={perbg}
          alt=""
          className="absolute bottom-[-10%] right-[-5%] z-[-2]"
        />

        {/* Add Testimonial Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-[#3434348b] bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Share Your Experience
                  </h3>
                  <button
                    onClick={handleCloseForm}
                    className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        value={newTestimonial.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={newTestimonial.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., CEO, Developer, Designer"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="company"
                        value={newTestimonial.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter company name (optional)"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        value={newTestimonial.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email (optional, for newsletter)"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-400">
                      We'll add you to our newsletter for updates and insights
                    </p>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Used
                    </label>
                    <select
                      name="service"
                      value={newTestimonial.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className={`p-2 rounded-lg transition-colors ${
                            star <= newTestimonial.rating
                              ? "text-yellow-400 bg-yellow-400 bg-opacity-20"
                              : "text-gray-400 hover:text-yellow-400"
                          }`}
                        >
                          <FiStar className="w-5 h-5" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Experience *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                      <textarea
                        name="testimonial"
                        value={newTestimonial.testimonial}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your experience with our services..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={testimonialMutation.isPending}
                      className={`w-full flex cursor-pointer items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                        testimonialMutation.isPending
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
                      } text-white`}
                    >
                      {testimonialMutation.isPending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <FiPlus className="w-4 h-4" />
                          Submit Testimonial
                        </>
                      )}
                    </button>

                    {/* Approval Note */}
                    <p className="mt-3 text-xs text-gray-400 text-center">
                      Your testimonial will be reviewed and published within
                      24-48 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
