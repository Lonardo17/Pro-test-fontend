import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://app-protest.herokuapp.com/';

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
    // prepareHeaders: headers => {
    //   const res = localStorage.getItem('user');
    //   if (!res) {
    //     return headers;
    //   }
    //   const token = JSON.parse(res).token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //     return headers;
    //   }
    //   return headers;
    // },
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
      // transformResponse: result => {
      //   // localStorage.setItem('user', JSON.stringify(result));
      // },
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
      // transformResponse: result => {
      //   // localStorage.setItem('user', JSON.stringify(result));
      // },
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: `users/logout`,
        };
      },
      invalidatesTags: ['Users'],
      // transformResponse: () => {
      //   // localStorage.setItem('user', '');
      // },
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
