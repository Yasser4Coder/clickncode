import { useMutation } from "@tanstack/react-query";
import { contactAPI } from "../services/api.js";

export const useContactSubmission = () => {
  return useMutation({
    mutationFn: contactAPI.submit,
    onSuccess: (data) => {
      console.log("Contact form submitted successfully:", data);
    },
    onError: (error) => {
      console.error("Contact form submission failed:", error);
    },
  });
};
