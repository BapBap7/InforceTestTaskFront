import React, {useEffect, useState} from 'react';
import {createShortUrl, deleteShortUrl, fetchData, fetchInfo} from "../api/shorten";
import '../styles/ShortUrls.css'
import trash from '../img/trash.svg'
import info from '../img/info.svg'

function ShortUrls() {
    const [data, setData] = useState([])
    const [infoUrl, setInfoUrl] = useState()
    const [longUrl, setLongUrl] = useState('')
    const user = localStorage.getItem('token')

    useEffect(() => {
        fetchUrls()
    }, [])

    async function fetchUrls() {
        const newData = await fetchData();
        setData(newData);
        console.log(newData)
    }

    async function deleteUrl(id) {
        await deleteShortUrl(id)
        fetchUrls()
    }

    async function showInfo(id) {
        const urlInfo = await fetchInfo(id)
        setInfoUrl(urlInfo)
    }

    async function createUrl(event) {
        event.preventDefault(); // This will prevent the default form submission behavior
        const urlExists = data.some(item => item.longUrl === longUrl);
        if (urlExists) {
            alert("The URL must be unique. The entered URL already exists.");
            return;
        }
        try {
            // If the URL is unique, attempt to create a new short URL
            await createShortUrl(longUrl);
            fetchUrls(); // Refresh the list of URLs
        } catch (error) {
            // Handle any errors that occur during URL creation
            console.error("Error creating a short URL:", error);
            alert("There was a problem creating the short URL.");
        }
    }

    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Short URL</th>
                        <th>Long URL</th>
                        <th>Info/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td><a href={item.shortUrl} target="_blank" rel="noopener noreferrer">{item.shortUrl}</a>
                            </td>
                            <td><a href={item.longUrl} target="_blank" rel="noopener noreferrer">{item.longUrl}</a></td>
                            <td>
                                <button onClick={() => {
                                    deleteUrl(item.id)
                                }}><img src={trash} alt="delete button"/></button>
                                <button onClick={() => {
                                    showInfo(item.id)
                                }}><img src={info} alt="info button"/></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {infoUrl && <div>
                <h1>UrlInfo</h1>
                <ul>
                    <li>id: {infoUrl.id}</li>
                    <li>longUrl: {infoUrl.longUrl}</li>
                    <li>shortUrl: {infoUrl.shortUrl}</li>
                    <li>code: {infoUrl.code}</li>
                    <li>createdOnUtc: {infoUrl.createdOnUtc}</li>
                </ul>
            </div>}
            {user && <div>
                <h1>create url</h1>
                <form onSubmit={createUrl}>
                    <label>
                        Your url:
                        <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
                    </label>
                    <button type="submit">Create new short url</button>
                </form>
            </div>}
        </>
    );
}

export default ShortUrls;
