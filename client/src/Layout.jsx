import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectIsAuthenticated, selectUser} from "./state/authSlice.js";
import NavManager from "./views/nav/NavManager.jsx";

export default function Layout() {
    const user = useSelector(selectUser)
    const isAuth = useSelector(selectIsAuthenticated)

    if (isAuth) console.log(user.fullname)

    return (
        <>
            <NavManager/>
            <Container className={"mt-3"}>
                <Outlet/>
            </Container>
        </>
    )
}