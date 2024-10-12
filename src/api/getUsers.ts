import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types/UserInterface";

const base_url = 'https://jsonplaceholder.typicode.com/';

export const getUsers = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',   
        }),
    }),
});

export const { useGetUsersQuery } = getUsers
