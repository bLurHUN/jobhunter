import {Button, Form} from "react-bootstrap";
import {useLoginMutation} from "../state/authApiSlice.js";
import {Navigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [apiLogin, {isSuccess}] = useLoginMutation();

    if (isSuccess) {
        console.log()
        return <Navigate to="/"/>;
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email cím</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" onClick={() => {
                apiLogin({
                    body: {
                        email,
                        password
                    }
                })
            }}>
                Bejelentkezés
            </Button>
        </Form>
    )
}
