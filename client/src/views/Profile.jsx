import {useSelector} from "react-redux";
import {selectIsAuthenticated, selectUser} from "../state/authSlice.js";
import {Navigate} from "react-router-dom";
import {Spinner, Table} from "react-bootstrap";
import {useGetAllExperiencesQuery} from "../state/experienceApiSlice.js";

export default function Profile () {
    const userData = useSelector(selectUser)
    const auth = useSelector(selectIsAuthenticated)
    const {data, isLoading, isError, isSuccess} = useGetAllExperiencesQuery();

    if (isError) {
        return <div>Nincsenek megjelenítendő munkák</div>
    }

    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />
    }

    if (!auth) {
        return <Navigate to={"/"} />
    }

    if (isSuccess) {
        console.log(data)

        return (
            <>
                <h1>Profilom</h1>
                <Table striped>
                    <thead>
                    <tr>
                        <td colSpan={2}><h3>Személyes adatok</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Név</td>
                        <td>{userData.fullname}</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>{userData.email}</td>
                    </tr>
                    <tr>
                        <td>Státusz</td>
                        <td>{ userData.role === "jobseeker" ? "Munkakereső" : "Fejvadász" }</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><h5>Korábbi tapasztalatok</h5></td>
                    </tr>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.company}</td>
                            <td>{item.interval} {item.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </>
        )
    }
}