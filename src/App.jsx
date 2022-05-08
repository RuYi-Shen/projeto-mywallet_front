import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";

import Login from "./routecomponents/Login.jsx";
import Register from "./routecomponents/Register";
/* import Income from "./routecomponents/Income";
import Outlay from "./routecomponents/Outlay"; */
import History from "./routecomponents/History"; 
import NotFound from "./routecomponents/NotFound";

import './css/reset.css';
import './css/style.css';

export default function App() {

    const [userData, setUserData] = useState({});
    const [progress, setProgress] = useState(0);

    return (
        <UserContext.Provider value={{userData:{userData, setUserData}, progress:{progress, setProgress}}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* <Route path="/income" element={<Income />} />
                    <Route path="/outlay" element={<Outlay />} /> */}
                    <Route path="/history" element={<History />} />  
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
