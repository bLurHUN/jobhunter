import {Button, Card, Col, Row, Spinner} from "react-bootstrap";
import {useGetAllJobsQuery} from "../state/jobApiSlice.js";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "../state/authSlice.js";
import Filter from "./Filter.jsx";

export default function Home() {
    const {data, isLoading, isError, isSuccess} = useGetAllJobsQuery();
    const navigate = useNavigate()
    const auth = useSelector(selectIsAuthenticated)

    if (isError) {
        return <div>Nincsenek megjelenítendő munkák</div>
    }

    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />
    }

    if (isSuccess) {
        return (
            <>
                <Filter/>
                <Row>
                    {data.map((item, index) => (
                        <Col key={index} xs={3}>
                            <Card style={{width: '18rem'}}>
                                <Card.Body>
                                    <Card.Title>{item.position}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Button variant="primary" disabled={!auth} onClick={() => navigate(`/jobs/${item.id}`)}>Részletek</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}
