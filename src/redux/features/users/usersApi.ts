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
    }),
    /* Get single user */
    getUser: builder.query({
      query: (email) => {
        return {
          url: `/api/v1/users/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = usersApi;
