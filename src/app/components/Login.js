import React, { useState } from 'react';
import {authLogin} from '../api/auth';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        await authLogin({ login, password });
        console.log({ login, password })
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
