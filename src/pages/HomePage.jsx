import { useSelector } from "react-redux";
import { getUser } from "../redux/user/userSlice";

export default function HomePage() {
    const user = useSelector(getUser);

    if (user)
        return (
            <div>
                <h1>Hello, {user.name}</h1>
                <p>Enjoy the experience</p>
            </div>

        );

    return (
        <div>
            <h1>Hello, there!</h1>
            <p>Click login to access the website</p>
        </div>
    );
}

