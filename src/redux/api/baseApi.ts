import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

// https://bike-rental-reservation-system-backend-coral.vercel.app/api

const baseQuery = fetchBaseQuery({
  baseUrl:
    'https://bike-rental-service-backend-red.vercel.app/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['user', 'bike', 'rental'],
  endpoints: () => ({}),
});
