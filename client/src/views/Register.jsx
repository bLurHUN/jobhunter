import {Button, Form} from "react-bootstrap";
import {useLoginMutation, useRegisterMutation} from "../state/authApiSlice.js";
import {Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Register () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [role, setRole] = useState("jobseeker")
    const navigate = useNavigate()

    const [apiRegister] = useRegisterMutation()

    console.log(role)

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

            <Form.Group className="mb-3">
                <Form.Check
                    type={"radio"}
                    id={`1`}
                    label="Munkavállaló"
                    name="role"
                    value={"jobseeker"}
                    onChange={e => setRole(e.target.value)}
                    defaultChecked={true}
                />
                <Form.Check
                    type={"radio"}
                    id={`2`}
                    label="Munkáltató"
                    name="role"
                    value={"company"}
                    onChange={e => setRole(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={() => {
                apiRegister({
                    body: {
                        email,
                        password,
                        fullname,
                        role
                    }
                }).then(navigate("/login"))
            }}>
                Regisztráció
            </Button>
        </Form>
    )
}
