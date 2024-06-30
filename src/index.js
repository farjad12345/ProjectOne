import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./fonts/ttf/IRANSansWeb(FaNum)Bold.ttf"
import "./fonts/ttf/IRANSansWeb(FaNum)Light.ttf"
import "./fonts/ttf/IRANSansWeb(FaNum)Medium.ttf"
import "./fonts/ttf/IRANSansWeb(FaNum)UltraLight.ttf"
import "./fonts/ttf/IRANSansWeb(FaNum).ttf"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

);


