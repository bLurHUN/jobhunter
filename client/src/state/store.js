import {configureStore} from '@reduxjs/toolkit'
import {jobApiSlice} from "./jobApiSlice.js";

export const store = configureStore({
    reducer: {
        [jobApiSlice.reducerPath]: jobApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(jobApiSlice.middleware)
    )
})