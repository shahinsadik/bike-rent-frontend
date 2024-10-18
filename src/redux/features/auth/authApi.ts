import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: userInfo,
        };
      },
      invalidatesTags: ['user', 'bike'],
    }),
    signUp: builder.mutation({
      query: (userInfo) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          body: userInfo,
        };
      },
      invalidatesTags: ['user', 'bike'],
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
