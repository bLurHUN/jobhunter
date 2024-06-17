import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectUser} from "./state/authSlice.js";
import NavManager from "./views/nav/NavManager.jsx";

export default function Layout() {
    const username = useSelector(selectUser)

    console.log(username)

    return (
        <>
            <NavManager/>
            <Container className={"mt-3"}>
                <Outlet/>
            </Container>
        </>
    )
}