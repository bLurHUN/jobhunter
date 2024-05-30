import {Button, Container, Nav, Navbar} from "react-bootstrap";

export default function GuestNav () {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Jobhunter</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Főoldal</Nav.Link>
                    </Nav>
                    <Button variant={"outline-light"} className={"me-2"}>Bejelentkezés</Button>
                    <Button variant={"outline-light"}>Regisztráció</Button>
                </Container>
            </Navbar>
        </>
    )
}