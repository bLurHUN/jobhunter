import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./views/Home.jsx";
import Layout from "./Layout.jsx";
import {Provider} from "react-redux";
import {store} from "./state/store.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
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
