import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/userSlice";


export default function RequireAuth({ children }) {
    const user = useSelector(getUser);

    let location = useLocation();
    if (user)
        return children;

    return <Navigate to='/login' state={{ from: location }} replace />;
}

