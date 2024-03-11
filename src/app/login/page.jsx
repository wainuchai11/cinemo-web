'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();

        if (username != '' && password != '') {
            alert('Login successful!');
            sessionStorage.setItem('username', username);
            router.push('/');
        } else {
            setError('Invalid username or password');
        }
    };

    useEffect(() => {
        const alreadyLoggedIn = sessionStorage.getItem('username');
        if (alreadyLoggedIn) {
            router.push('/');
        }
    })


    return (
        <div className="loginForm">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="inputContainer">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="inputField"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputField"
                    />
                </div>
                <button type="submit" className="submitButton">Login</button>
            </form>
        </div>
    );
}

export default Page;