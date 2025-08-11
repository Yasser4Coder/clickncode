import api from "../config/api.js";

// Contact API services
export const contactAPI = {
  // Submit contact form
  submit: async (contactData) => {
    const response = await api.post("/contact", contactData);
    return response.data;
  },

  // Get all contacts (for admin use)
  getAll: async (params = {}) => {
    const response = await api.get("/contact", { params });
    return response.data;
  },

  // Get specific contact
  getById: async (id) => {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  },
};

// Testimonials API services
export const testimonialsAPI = {
  // Get all testimonials
  getAll: async (params = {}) => {
    const response = await api.get("/testimonials", { params });
    return response.data;
  },

  // Get featured testimonials
  getFeatured: async (limit = 6) => {
    const response = await api.get("/testimonials/featured", {
      params: { limit },
    });
    return response.data;
  },

  // Get testimonials by service
  getByService: async (service, params = {}) => {
    const response = await api.get(`/testimonials/services/${service}`, {
      params,
    });
    return response.data;
  },

  // Submit new testimonial
  submit: async (testimonialData) => {
    const response = await api.post("/testimonials", testimonialData);
    // Check if the response indicates success
    if (response.data && response.data.status === "success") {
      return response.data;
    } else {
      // If the response doesn't indicate success, throw an error
      throw new Error(response.data?.message || "Failed to submit testimonial");
    }
  },

  // Get specific testimonial
  getById: async (id) => {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  },
};
