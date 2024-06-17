import GuestNav from "./GuestNav.jsx";
import {useSelector} from "react-redux";
import {selectIsAuthenticated, selectUser} from "../../state/authSlice.js";
import JobseekerNav from "./JobseekerNav.jsx";
import CompanyNav from "./CompanyNav.jsx";

export default function NavManager() {
    const auth = useSelector(selectIsAuthenticated)
    const user = useSelector(selectUser)

    if (auth) {
        if (user.role === "company") return <CompanyNav />
        else if (user.role === "jobseeker") return <JobseekerNav />
    }

    return <GuestNav />
}