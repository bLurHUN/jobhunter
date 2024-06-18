import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

export default function Filter() {
    const [position, setPosition] = useState("")

    return (
        <>
            <Row>
                <Col>
                    <Form className="mb-3">

                        <Form.Group className="mb-3">
                            <Form.Label>Pozíció neve</Form.Label>
                            <Form.Control placeholder={"Front-end fejlesztő"} onChange={e => setPosition(e.target.value)}
                                          value={position}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Fizetési sáv alja</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Fizetési sáv teteje</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Foglalkozás típusa</Form.Label>
                                <Form.Select>
                                    <option>full-time</option>
                                    <option>part-time</option>
                                    <option>internship</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Település</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Row>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{span: 10}}>
                                <Form.Check label="Home Office lehetőség"/>
                            </Col>
                        </Form.Group>

                        <Button variant="primary" onClick={undefined}>
                            Keresés
                        </Button>

                    </Form>
                </Col>
            </Row>
            <hr/>
        </>
    )
}