import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const experienceApiSlice = createApi({
    reducerPath: "experience",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/experiences",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ["Experience"],
    endpoints: (build) => ({
        getAllExperiences: build.query({
            query: () => "",
            transformResponse: ({data}) => data,
            providesTags: ["Experience"]
        }),
    })
})

export const { useGetAllExperiencesQuery } = experienceApiSlice;