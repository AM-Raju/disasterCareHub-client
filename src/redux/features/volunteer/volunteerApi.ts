import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create volunteer
    createVolunteer: builder.mutation({
      query: ({ volunteerInfo }) => {
        
        
        console.log("raju",volunteerInfo);
        
        return {
          url: "/create-volunteer",
          method: "POST",
          body: volunteerInfo,
        };
      },
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useCreateVolunteerMutation } = volunteerApi;
