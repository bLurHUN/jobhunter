import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Layout from "./Layout.jsx";
import {Provider} from "react-redux";
import {store} from "./state/store.js";
import JobDetails from "./views/JobDetails.jsx";
import Profile from "./views/Profile.jsx";
import Register from "./views/Register.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <Navigate to="/" />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/jobs/:jobId",
                element: <JobDetails />,
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
