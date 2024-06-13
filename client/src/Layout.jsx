import GuestNav from "./views/nav/GuestNav.jsx";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";

export default function Layout () {
    return (
        <>
            <GuestNav/>
            <Container className={"mt-3"}>
              <Outlet/>
            </Container>
        </>
    )
}