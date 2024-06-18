import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function GuestNav () {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>Jobhunter</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Főoldal</Nav.Link>
                    </Nav>
                    <Button onClick={() => navigate("/login")} variant={"outline-light"} className={"me-2"}>Bejelentkezés</Button>
                    <Button onClick={() => navigate("/register")} variant={"outline-light"}>Regisztráció</Button>
                </Container>
            </Navbar>
        </>
    )
}