import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useGetAllJobsQuery} from "../state/jobApiSlice.js";

export default function Home() {
    const {data, isLoading, isError, isSuccess} = useGetAllJobsQuery();

    if (isError) {
        return <div>Nincsenek megjelenítendő munkák</div>
    }

    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />
    }

    if (isSuccess) {
        return (
            <Container className={"mt-3"}>
                <Row>
                    {data.map((item, index) => (
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
            </Container>
        )
    }
}
