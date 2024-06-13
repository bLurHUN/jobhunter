import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030",
        prepareHeaders: (headers, { getState }) => {
            console.log(getState())
            const token = getState().auth.token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (args) => ({
                url: "/authentication",
                method: "POST",
                body: {
                    ...args.body, strategy: "local",
                }
            })
        })
    })
})

export const {useLoginMutation} = authApiSlice;
