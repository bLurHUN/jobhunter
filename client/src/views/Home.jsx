import {Card, Col, Form, Row, Spinner} from "react-bootstrap";
import {useGetAllJobsQuery} from "../state/jobApiSlice.js";
import {useState} from "react";

export default function Home() {
    const [position, setPosition] = useState("")
    const {data, isLoading, isError, isSuccess} = useGetAllJobsQuery();

    if (isError) {
        return <div>Nincsenek megjelenítendő munkák</div>
    }

    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />
    }

    function filterJobs(items, query) {
        query = query.toLowerCase();
        return items.filter(item =>
            item.position.split(' ').some(word =>
                word.toLowerCase().startsWith(query)
            )
        );
    }

    if (isSuccess) {
        return (
                <>
                    <Row>
                        <Col>
                            <Form.Control className="mb-3" type="email" placeholder="Keresés név alapján" onChange={e => setPosition(e.target.value)} value={position} />
                        </Col>
                    </Row>
                    <Row>
                        {filterJobs(data, position).map((item, index) => (
                            <Col key={index} xs={3}>
                                <Card style={{width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>{item.position}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
        )
    }
}
