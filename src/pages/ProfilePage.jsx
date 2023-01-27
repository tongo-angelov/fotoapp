import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUser, logout } from "../redux/user/userSlice";

export default function ProfilePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const processLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
            <button onClick={processLogout}>Logout</button>
        </div>
    );
}

