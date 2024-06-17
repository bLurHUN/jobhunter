import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logout} from "../../state/authSlice.js";
import {useNavigate} from "react-router-dom";

export default function JobseekerNav() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand  onClick={() => navigate("/")}>Jobhunter</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Főoldal</Nav.Link>
                        <Nav.Link onClick={() => navigate("/profile")}>Profilom</Nav.Link>
                    </Nav>
                    <Button variant={"outline-light"} className={"me-2"} onClick={() => dispatch(logout())}>Kijelentkezés</Button>
                </Container>
            </Navbar>
        </>
    )
}