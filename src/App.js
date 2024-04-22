import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './app/components/Login';
import Dashboard from './app/components/Dashboard';
import RegistrationForm from "./app/components/Register";
import ShortUrls from "./app/components/ShortUrls";
import AboutPage from "./app/components/AboutPage";
import './App.css'

function App() {
  return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
                <Route path="/shorturls" element={<ShortUrls />} />
                <Route path="/aboutpage" element={<AboutPage />} />
                {/* <Route path="/shorturlsinfo" element={<ShortUrls />} /> */}
            </Routes>
        </div>
  );
}

export default App;
