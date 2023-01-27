import { useState } from "react";
import './LoginForm.css';

export default function LoginForm(props) {
    const [email, setEmail] = useState('Sincere@april.biz');
    const [pass, setPass] = useState('Par0la123!');
    const [save, setSave] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePass = (e) => {
        setPass(e.target.value);
    };
    const handleSave = (e) => {
        setSave(e.target.checked);
    };

    const handleLogin = () => {
        // TODO - validate email & pass using RegEx
        props.onLogin(email, pass, save);
    };

    return (
        <div className="form">
            <input type='text' placeholder='email@example.com' onChange={handleEmail} defaultValue={email}></input>
            <input type='password' placeholder='type password' onChange={handlePass} defaultValue={pass}></input>
            <div className="remember">
                <input type='checkbox' onChange={handleSave} ></input>
                <p>Remember me</p>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}