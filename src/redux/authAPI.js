import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://lonardo17.github.io/Pro-test/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      const res = localStorage.getItem('user');
      if (!res) {
        return headers;
      }
      const token = JSON.parse(res).token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts', 'Users'],
  endpoints: builder => ({
    
    addUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
      transformResponse: result => {
        localStorage.setItem('user', JSON.stringify(result));
      },
    }),
    authorizeUser: builder.mutation({
      query(user) {
        return {
          url: `users/login`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Users'],
      transformResponse: result => {
        localStorage.setItem('user', JSON.stringify(result));
      },
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: `users/logout`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Users'],
      transformResponse: () => {
        localStorage.setItem('user', '');
      },
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
} = authApi;