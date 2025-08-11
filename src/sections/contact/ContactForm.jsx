/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // CSRF token simulation (in real app, this would come from your backend)
  const csrfToken = useRef(Math.random().toString(36).substring(2));

  // Rate limiting: max 3 submissions per minute
  const RATE_LIMIT = 3;
  const RATE_LIMIT_WINDOW = 60000; // 1 minute in milliseconds

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

  // Handle input changes without sanitization (sanitize only on submit)
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

  // Check rate limiting
  const checkRateLimit = () => {
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_WINDOW) {
      if (submitCount >= RATE_LIMIT) {
        return false;
      }
    } else {
      // Reset counter if window has passed
      setSubmitCount(0);
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    // Check rate limiting
    if (!checkRateLimit()) {
      setErrors({
        form: "Too many submissions. Please wait before trying again.",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize data before sending
      const sanitizedData = {
        fullName: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        projectDescription: sanitizeInput(formData.projectDescription),
      };

      // Simulate API call with security headers
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken.current,
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(sanitizedData),
        credentials: "same-origin", // Include cookies for session validation
      });

      if (response.ok) {
        // Success - reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          projectDescription: "",
        });
        setErrors({});
        setSubmitCount((prev) => prev + 1);
        setLastSubmitTime(Date.now());

        // Show success message (in real app, use a toast notification)
        alert("Thank you! Your message has been sent successfully.");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setErrors({ form: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
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

  return (
    <section
      id="contact"
      className="relative min-w-[100vw] bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-start mb-16">
          <h1 className="gradient-text text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-6">
            Let’s work with Us
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            Got an idea or an ongoing project? Let’s discuss how we can bring it
            to life starting with a free consultation
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="rounded-3xl p-8 md:p-12">
            {/* CSRF Token (hidden) */}
            <input type="hidden" name="csrf_token" value={csrfToken.current} />

            {/* Form Error Display */}
            {errors.form && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
                {errors.form}
              </div>
            )}

            {/* Full Name Field */}
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block text-[#4A3AFF] font-semibold mb-3 text-lg"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="example: taha laib"
                className={`w-full px-4 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-500 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent ${
                  errors.fullName ? "border-red-500" : "border-gray-200"
                }`}
                maxLength={50}
                autoComplete="name"
                required
              />
              {errors.fullName && (
                <p className="mt-2 text-red-400 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-[#4A3AFF] font-semibold mb-3 text-lg"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example:taha.laib2@gmail.com"
                className={`w-full px-4 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-500 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                maxLength={100}
                autoComplete="email"
                required
              />
              {errors.email && (
                <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-[#4A3AFF] font-semibold mb-3 text-lg"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g: +231 770 000 000"
                className={`w-full px-4 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-500 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                }`}
                maxLength={20}
                autoComplete="tel"
                required
              />
              {errors.phone && (
                <p className="mt-2 text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Project Description Field */}
            <div className="mb-8">
              <label
                htmlFor="projectDescription"
                className="block text-[#4A3AFF] font-semibold mb-3 text-lg"
              >
                Tell Us About Your Project
              </label>
              <textarea
                ref={textareaRef}
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="what do you need ? website , app , automation? share any ideas, goals, or feature you have in mind"
                rows={4}
                className={`w-full px-4 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-500 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:border-transparent resize-none ${
                  errors.projectDescription
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                maxLength={1000}
                required
              />
              {errors.projectDescription && (
                <p className="mt-2 text-red-400 text-sm">
                  {errors.projectDescription}
                </p>
              )}
              <div className="mt-2 text-right text-sm text-gray-400">
                {formData.projectDescription.length}/1000
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 cursor-pointer rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:ring-offset-2 ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#4A3AFF] to-[#897FFF] hover:from-[#3A2AEF] hover:to-[#796FEF] text-white shadow-lg hover:shadow-xl"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Request"
              )}
            </button>

            {/* Rate Limit Indicator */}
            <div className="mt-4 text-center text-sm text-gray-400">
              {submitCount > 0 && (
                <p>
                  Submissions this minute: {submitCount}/{RATE_LIMIT}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
