import {API_URL} from "../constants/const";
import axios from "axios";

export const fetchData = async () => {
    try {
        // Sending a POST request to the server with the credentials
        const response = await axios.get(`${API_URL}Shortener/GetAll`);
        // If the response includes an access token, we store it

        return response.data;
    } catch (error) {
        console.error('Login error:', error.response);
        throw error;
    }
};

export const deleteShortUrl = async (id) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        // Sending a DELETE request to the server with the credentials
        const response = await axios.delete(`${API_URL}Shortener/Delete/${id}`, config);

        return response.data;
    } catch (error) {
        console.error('Delete error:', error.response);
        throw error;
    }
};

export const fetchInfo = async (id) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        // Sending a DELETE request to the server with the credentials
        const response = await axios.get(`${API_URL}Shortener/GetById/${id}`, config);

        return response.data;
    } catch (error) {
        console.error('Delete error:', error.response);
        throw error;
    }
};

export const createShortUrl = async (longUrl) => {
    try {
        console.log(longUrl)
        const response = await axios.post(`${API_URL}Shortener/Create`, { longUrl: longUrl });
        return response.data;
    } catch (error) {
        console.error('Shortening URL error:', error.response);
        throw error;
    }
};


