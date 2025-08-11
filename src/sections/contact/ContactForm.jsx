/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { useContactSubmission } from "../../hooks/useContact.js";
import toast from "react-hot-toast";
import {
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // React Query mutation
  const contactMutation = useContactSubmission();

  // Input validation patterns
  const validationPatterns = {
    fullName: {
      pattern: /^[a-zA-Z\s]{2,50}$/,
      message: "Full name must be 2-50 characters, letters and spaces only",
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
    phone: {
      pattern: /^[\+]?[0-9\s\-\(\)]{10,20}$/,
      message: "Please enter a valid phone number (10-20 digits)",
    },
    projectDescription: {
      pattern: /^[\w\s\.,!?\-()]{10,1000}$/,
      message: "Project description must be 10-1000 characters",
    },
  };

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    return input
      .replace(/[<>]/g, "") // Remove < and > characters
      .trim();
  };

  // Validate single field
  const validateField = (name, value) => {
    const pattern = validationPatterns[name];
    if (!pattern) return "";

    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (!pattern.pattern.test(value)) {
      return pattern.message;
    }

    return "";
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    // Sanitize data before sending
    const sanitizedData = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      projectDescription: sanitizeInput(formData.projectDescription),
    };

    try {
      await contactMutation.mutateAsync(sanitizedData);

      // Success - reset form and show success state
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectDescription: "",
      });
      setErrors({});
      setIsSuccess(true);

      // Show success toast
      toast.success("Thank you! Your message has been sent successfully.");

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Contact form submission error:", error);

      // Handle specific error types
      if (error.response?.status === 429) {
        toast.error("Too many submissions. Please wait before trying again.");
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    }
  };

  // Auto-resize textarea
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [formData.projectDescription]);

  // Success state UI
  if (isSuccess) {
    return (
      <section
        id="contact"
        className="relative min-w-[100vw] bg-gradient-to-b from-black to-gray-900 py-20"
      >
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-300 text-lg">
                Thank you for reaching out! We'll get back to you within 24-48
                hours.
              </p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative min-w-[100vw] bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-start mb-16">
          <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
            Let's Build Something
            <br />
            <span className="text-white">Amazing Together</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl">
            Ready to turn your vision into reality? Fill out the form below and
            let's discuss how we can bring your project to life.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.fullName ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number *
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.phone ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Project Description */}
            <div className="relative">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Project Description *
              </label>
              <div className="relative">
                <FiFileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  ref={textareaRef}
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                    errors.projectDescription
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
                  placeholder="Tell us about your project. What are you looking to build? What are your goals and requirements?"
                />
              </div>
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.projectDescription}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-400">
                {formData.projectDescription.length}/1000 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className={`w-full flex items-center justify-center gap-2 py-4 px-8 rounded-lg font-medium text-lg transition-all duration-200 ${
                  contactMutation.isPending
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
                } text-white shadow-lg hover:shadow-xl`}
              >
                {contactMutation.isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {/* Form Info */}
            <div className="text-center text-sm text-gray-400">
              <p>We'll get back to you within 24-48 hours</p>
              <p className="mt-1">All fields marked with * are required</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
