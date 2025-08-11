import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { testimonialsAPI } from "../services/api.js";

// Get all testimonials
export const useTestimonials = (params = {}) => {
  return useQuery({
    queryKey: ["testimonials", params],
    queryFn: () => testimonialsAPI.getAll(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Get featured testimonials
export const useFeaturedTestimonials = (limit = 6) => {
  return useQuery({
    queryKey: ["testimonials", "featured", limit],
    queryFn: () => testimonialsAPI.getFeatured(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Get testimonials by service
export const useTestimonialsByService = (service, params = {}) => {
  return useQuery({
    queryKey: ["testimonials", "service", service, params],
    queryFn: () => testimonialsAPI.getByService(service, params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!service,
  });
};

// Submit new testimonial
export const useTestimonialSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: testimonialsAPI.submit,
    onSuccess: (data) => {
      console.log("Testimonial submitted successfully:", data);
      // Invalidate and refetch testimonials
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
    onError: (error) => {
      console.error("Testimonial submission failed:", error);
      // Only log the error, don't show popup here
      // The component will handle error display
    },
  });
};
