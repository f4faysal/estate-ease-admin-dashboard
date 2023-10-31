import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Admin_URL = "/admin";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Admins
    admins: build.query({
      query: () => ({
        url: `${Admin_URL}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          admin: response,
          meta,
        };
      },

      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAdminsQuery } = adminApi;
