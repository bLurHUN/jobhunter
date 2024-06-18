import {Navigate, useParams} from "react-router-dom";
import {useGetJobByIdQuery} from "../state/jobApiSlice.js";
import {Spinner, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "../state/authSlice.js";

export default function JobDetails () {
    const params = useParams()
    const {data, isLoading, isError, isSuccess} = useGetJobByIdQuery(params.jobId);
    const auth = useSelector(selectIsAuthenticated)

    if (!auth) {
        return <Navigate to={"/"}></Navigate>
    }

    if (isError) {
        return <div>Nincs elérhető munka ezzel az azonosítóval</div>
    }

    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />
    }

    if (isSuccess) {
        console.log(data)

        return (
            <>
                <h1>{data.company} - {data.position}</h1>
                <Table striped>
                    <thead>
                    <tr>
                        <td colSpan={2}><h3>Részletek</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Név</td>
                        <td>{data.company}</td>
                    </tr>
                    <tr>
                        <td>Pozíció</td>
                        <td>{data.position}</td>
                    </tr>
                    <tr>
                        <td>Leírás</td>
                        <td>{data.description}</td>
                    </tr>
                    <tr>
                        <td>Fizetési sáv</td>
                        <td>Bruttó {data.salaryFrom} - {data.salaryTo}</td>
                    </tr>
                    <tr>
                        <td>Foglalkozás típusa</td>
                        <td>{data.type}</td>
                    </tr>
                    <tr>
                        <td>Település</td>
                        <td>{data.city}</td>
                    </tr>
                    <tr>
                        <td>Home Office</td>
                        <td>{data.homeOffice === 0 ? "Nincs" : "Van"}</td>
                    </tr>
                    </tbody>
                </Table>
            </>
        )
    }

}