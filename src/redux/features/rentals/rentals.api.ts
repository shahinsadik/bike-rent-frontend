import { baseApi } from '@/redux/api/baseApi';

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      query: (rentalInfo) => {
        return {
          method: 'POST',
          url: '/rentals',
          body: rentalInfo,
        };
      },
      invalidatesTags: ['rental', 'bike'],
    }),
    myRentals: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/rentals',
        };
      },
      providesTags: ['rental'],
    }),
    getAllRentals: builder.query({
      query: () => {
        return {
          method: 'GET',
          url: '/rentals/allRentals',
        };
      },
      providesTags: ['rental'],
    }),
    returnBike: builder.mutation({
      query: (id) => {
        return {
          method: 'PUT',
          url: `/rentals/${id}/return`,
        };
      },
      invalidatesTags: ['rental', 'bike'],
    }),
  }),
});

export const {
  useCreateRentalMutation,
  useMyRentalsQuery,
  useGetAllRentalsQuery,
  useReturnBikeMutation,
} = rentalApi;
