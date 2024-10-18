import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/users/allUsers',
        };
      },
      providesTags: ['user'],
    }),
    getUserProfile: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/users/me',
        };
      },
      providesTags: ['user'],
    }),
    updateProfile: builder.mutation({
      query: (updatedUserInfo) => {
        return {
          method: 'PUT',
          url: '/users/me',
          body: updatedUserInfo,
        };
      },
      invalidatesTags: ['user'],
    }),
    updateUserRole: builder.mutation({
      query: (updatedUserRole) => {
        return {
          method: 'PATCH',
          url: `/users/updateRole/${updatedUserRole.id}`,
          body: { role: updatedUserRole.role },
        };
      },
      invalidatesTags: ['user'],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          method: 'DELETE',
          url: `/users/${id}`,
        };
      },
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = userApi;
