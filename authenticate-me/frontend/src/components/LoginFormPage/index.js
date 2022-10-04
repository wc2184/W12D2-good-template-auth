import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/session";

const LoginFormPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({credential: username, password: password}));
    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button>Sign In</button>
           </form>
        </div>
    )
}

export default LoginFormPage;