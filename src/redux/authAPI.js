import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://pro-test-ni4n.onrender.com/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      let token = getState().currentUser.token;
      if (endpoint === 'refreshUser') {
        token = getState().currentUser.refreshToken;
      }
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts', 'Users'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: user => ({
        url: '/users/registration',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    authorizeUser: builder.mutation({
      query(user) {
        return {
          url: `users/authorization`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Users'],
    }),
    authorizeUserByGoogle: builder.mutation({
      query(code) {
        return {
          url: `users/googlelogin`,
          method: 'POST',
          body: code,
        };
      },
      invalidatesTags: ['Users'],
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: `users/logout`,
        };
      },
      invalidatesTags: ['Users'],
    }),
    getUser: builder.query({
      query() {
        return {
          url: `users/current`,
        };
      },
      providesTags: ['Users'],
    }),
  }),
});
export const {
  useAddUserMutation,
  useAuthorizeUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
  useAuthorizeUserByGoogleMutation,
} = authApi;
