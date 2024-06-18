import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const jobApiSlice = createApi({
    reducerPath: "job",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/jobs",
    }),
    tagTypes: ["Job"],
    endpoints: (build) => ({
        getAllJobs: build.query({
            query: () => "",
            transformResponse: ({data}) => data,
            providesTags: ["Job"]
        }),
        getJobById: build.query({
            query: (id) => `${id}`,
            providesTags: (result) => ([
                "Job",
                {type: "Job", id: result.id}
            ])
        }),
    })
})

export const { useGetAllJobsQuery, useGetJobByIdQuery } = jobApiSlice;