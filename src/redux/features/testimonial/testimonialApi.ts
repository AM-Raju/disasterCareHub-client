import { baseApi } from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create testimonials
    createTestimonial: builder.mutation({
      query: (testimonialData) => {
        return {
          url: "/create-testimonial",
          method: "POST",
          body: testimonialData,
        };
      },
      invalidatesTags: ["testimonial"],
    }),

    // get testimonials
    getTestimonials: builder.query({
      query: () => {
        return {
          url: "/testimonials",
          method: "GET",
        };
      },
      providesTags: ["testimonial"],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetTestimonialsQuery } =
  testimonialApi;
