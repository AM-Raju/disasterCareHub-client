import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /* Get all users */

    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/api/v1/users",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    /* Get single user */
    getUser: builder.query({
      query: (email) => {
        return {
          url: `/api/v1/users/${email}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    /* Delete user */
    deleteUser: builder.mutation({
      query: (id) => {
        console.log("redux id", id);

        return {
          url: `/api/v1/delete-user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery, useDeleteUserMutation } =
  usersApi;
