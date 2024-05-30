import GuestNav from "./views/nav/GuestNav.jsx";
import {Outlet} from "react-router-dom";

export default function Layout () {
    return (
        <>
            <GuestNav/>
            <Outlet/>
        </>
    )
}