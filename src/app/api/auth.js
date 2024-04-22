import axios from 'axios';

import {API_URL} from "../constants/const";

// Function to log in and save the JWT
export const authLogin = async (credentials) => {
    try {
        // Sending a POST request to the server with the credentials
        const response = await axios.post(`${API_URL}auth/login`, credentials);
        // If the response includes an access token, we store it


        if (response.data.token) {
            localStorage.setItem('token', response.data.token); // Save the token
            localStorage.setItem('user', response.data.user.userName);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        }

        return response.data;
    } catch (error) {
        console.error('Login error:', error.response);
        throw error;
    }
};

// Function to log out
export const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Remove the token from the default axios header
    delete axios.defaults.headers.common['Authorization'];
};


export const register = async (userData) => {
    try {
        // Sending a POST request to the server with the user data
        const response = await axios.post(`${API_URL}auth/register`, userData);

        console.log(response)

        return response.data; // This might include user details and the token
    } catch (error) {
        console.error('Registration error:', error.response);
        throw error; // Rethrow the error so the UI can handle it
    }
};