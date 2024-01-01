import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
      // transformResponse: (response, meta) => {
      //   return {
      //     admin: response,
      //     meta,
      //   };
      // },

      providesTags: [tagTypes.admin],
    }),

    createAdmin: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-admin`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    createHomeOwner: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-homeOwner`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    createRentUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-rentUser`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (paylod) => ({
        url: `${USER_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useCreateHomeOwnerMutation,
  useCreateRentUserMutation,
  useUpdateUserMutation,
  useGetUsersQuery,
} = userApi;
