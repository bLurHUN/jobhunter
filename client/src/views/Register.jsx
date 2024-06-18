import {Button, Form} from "react-bootstrap";
import {useLoginMutation, useRegisterMutation} from "../state/authApiSlice.js";
import {Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Register () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const navigate = useNavigate()

    const [apiRegister] = useRegisterMutation()

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Teljes név</Form.Label>
                <Form.Control type="email" value={fullname} onChange={e => setFullname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email cím</Form.Label>
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" onClick={() => {
                apiRegister({
                    body: {
                        email,
                        password,
                        fullname,
                        role: "jobseeker"
                    }
                }).then(navigate("/login"))
            }}>
                Regisztráció
            </Button>
        </Form>
    )
}
