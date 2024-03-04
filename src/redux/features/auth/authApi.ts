import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (userInfo) => {
        // console.log("register", userInfo);

        return {
          url: "/api/v1/register",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    /* Login */
    login: builder.mutation({
      query: (loginInfo) => {
        // console.log("login", loginInfo);

        return {
          url: "/api/v1/login",
          method: "POST",
          body: loginInfo,
        };
      },
    }),

    /* Get user */
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

export const { useLoginMutation, useRegistrationMutation, useGetUserQuery } = authApi;
