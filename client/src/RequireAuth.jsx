import {useSelector} from "react-redux";
import {useLoginMutation} from "./state/authApiSlice.js";
import {Navigate} from "react-router-dom";

export default function RequireAuth({children}) {
  const isAuthenticated = useSelector(useLoginMutation);

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to={`/`}></Navigate>

}
