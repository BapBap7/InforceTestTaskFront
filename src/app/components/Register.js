import React, { useState } from 'react';
import { register } from '../api/auth';

function RegistrationForm() {
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            // Redirect or update the UI upon successful registration
        } catch (error) {
            // Handle registration errors (e.g., display error messages)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={handleChange}
            />
            <input
                name="surname"
                type="text"
                placeholder="Surname"
                value={userData.surname}
                onChange={handleChange}
            />
            <input
                name="username"
                type="text"
                placeholder="Username"
                value={userData.username}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
            />
            <input
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                value={userData.passwordConfirmation}
                onChange={handleChange}
            />
            <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                value={userData.phoneNumber}
                onChange={handleChange}
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
