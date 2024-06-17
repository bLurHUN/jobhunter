import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Layout from "./Layout.jsx";
import {Provider} from "react-redux";
import {store} from "./state/store.js";

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
