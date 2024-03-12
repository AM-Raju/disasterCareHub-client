import { baseApi } from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (testimonialData) => {
        return {
          url: "/create-testimonial",
          method: "POST",
          body: testimonialData,
        };
      },
    }),
  }),
});

export const { useCreateTestimonialMutation } = testimonialApi;
