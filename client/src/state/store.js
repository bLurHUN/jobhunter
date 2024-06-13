import {configureStore} from '@reduxjs/toolkit'
import {jobApiSlice} from "./jobApiSlice.js";
import {authApiSlice} from "./authApiSlice.js";

export const store = configureStore({
    reducer: {
        [jobApiSlice.reducerPath]: jobApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(jobApiSlice.middleware).concat(authApiSlice.middleware)
    )
})