import {configureStore} from '@reduxjs/toolkit'
import {jobApiSlice} from "./jobApiSlice.js";
import {authApiSlice} from "./authApiSlice.js";
import {authSlice} from "./authSlice.js";
import {experienceApiSlice} from "./experienceApiSlice.js";

export const store = configureStore({
    reducer: {
        [jobApiSlice.reducerPath]: jobApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [experienceApiSlice.reducerPath]: experienceApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(jobApiSlice.middleware).concat(authApiSlice.middleware).concat(experienceApiSlice.middleware)
    )
})