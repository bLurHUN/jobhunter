import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logout} from "../../state/authSlice.js";

export default function GuestNav () {
    const dispatch = useDispatch()

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Jobhunter</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Főoldal</Nav.Link>
                        <Nav.Link href="/">Profilom</Nav.Link>
                        <Nav.Link href="/">Álláshírdetés</Nav.Link>
                    </Nav>
                    <Button variant={"outline-light"} className={"me-2"} onClick={() => dispatch(logout())}>Kijelentkezés</Button>
                </Container>
            </Navbar>
        </>
    )
}