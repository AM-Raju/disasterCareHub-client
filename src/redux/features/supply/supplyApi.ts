import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create supply
    createSupply: builder.mutation({
      query: (supply) => {
        return {
          url: "/create-supply",
          method: "POST",
          body: supply,
        };
      },
      invalidatesTags: ["supply"],
    }),

    // get all supplies
    getSupplies: builder.query({
      query: (limit) => {
        let url;
        if (limit) {
          url = `/supplies?limit=${limit}`;
        } else {
          url = `/supplies`;
        }

        return {
          url: url,
          method: "GET",
        };
      },
      providesTags: ["supply"],
    }),

    // get single supply
    getSupply: builder.query({
      query: (id) => {
        return {
          url: `/supply/${id}`,
          method: "GET",
        };
      },
      providesTags: ["supply"],
    }),

    // update post into supply
    updatePost: builder.mutation({
      query: (postInfo) => {
        const { id, newPost } = postInfo;
        return {
          url: `/supply/${id}`,
          method: "PATCH",
          body: newPost,
        };
      },
      invalidatesTags: ["supply"],
    }),

    // Leaderboard data
    leaderBoard: builder.query({
      query: () => {
        return {
          url: "/leaderboard",
          method: "GET",
        };
      },
    }),

    // Delete supply
    deleteSupply: builder.mutation({
      query: (id) => {
        return {
          url: `/delete-supply/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  useGetSupplyQuery,
  useGetSuppliesQuery,
  useUpdatePostMutation,
  useCreateSupplyMutation,
  useLeaderBoardQuery,
  useDeleteSupplyMutation,
} = supplyApi;
