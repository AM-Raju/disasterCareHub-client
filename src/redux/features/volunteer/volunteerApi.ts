import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create volunteer
    createVolunteer: builder.mutation({
      query: (volunteerInfo) => {
        return {
          url: "/create-volunteer",
          method: "POST",
          body: volunteerInfo,
        };
      },
      invalidatesTags: ["volunteer"],
    }),

    // Get volunteers
    getVolunteers: builder.query({
      query: () => {
        return {
          url: "/volunteers",
          method: "GET",
        };
      },
      providesTags: ["volunteer"],
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetVolunteersQuery } =
  volunteerApi;
