import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import LoginForm from "../components/LoginForm/LoginForm";
import { login, saveLogin, getUser } from "../redux/user/userSlice";
import { getAllUsers } from "../redux/users/usersSlice";

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const user = useSelector(getUser);
    const users = useSelector(getAllUsers);

    let from = location.state?.from?.pathname || "/";

    const processLogin = (email, pass, save) => {
        const _user = users.find(usr => usr.email === email);
        if (_user && pass === 'Par0la123!') {
            save ? dispatch(saveLogin(_user)) : dispatch(login(_user));
            navigate('/', { replace: true });
        }
        else {
            alert('Wrong credentials');
        }
    };

    useEffect(() => {
        if (user)
            navigate('/', { replace: true });
    }, []);

    return (
        <div>
            <h1>Please login</h1>
            <LoginForm onLogin={processLogin} />
        </div>
    );
}

