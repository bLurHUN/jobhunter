import GuestNav from "./GuestNav.jsx";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "../../state/authSlice.js";
import JobseekerNav from "./JobseekerNav.jsx";

export default function NavManager() {
    const auth = useSelector(selectIsAuthenticated)

    console.log(auth)

    if (auth) return <JobseekerNav />

    return <GuestNav />
}