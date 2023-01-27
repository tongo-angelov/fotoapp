import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUser } from "../../redux/user/userSlice";

import './NavBar.css';

export default function NavBar() {
    const user = useSelector(getUser);

    return (
        <div className="navbar">

            <Link className="navitem" style={{ justifyContent: 'start' }} to={`/`}>Home</Link>

            {user &&
                <>
                    <Link className="navitem" style={{ justifyContent: 'end' }} to={`/posts`}>Posts</Link>
                    <Link className="navitem" style={{ justifyContent: 'start' }} to={`/albums`}>Albums</Link>
                </>
            }

            {user ?
                <Link className="navitem" style={{ justifyContent: 'end' }} to={`/profile`}>{user.name}</Link> :
                <Link className="navitem" style={{ justifyContent: 'end' }} to={`/login`}>Login</Link>
            }

            <Outlet />
        </div>
    );
}