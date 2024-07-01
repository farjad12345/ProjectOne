import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./fonts/webfonts/Vazirmatn-Thin.woff2"
import "./fonts/webfonts/Vazirmatn-ExtraLight.woff2"
import "./fonts/webfonts/Vazirmatn-Light.woff2"
import "./fonts/webfonts/Vazirmatn-Regular.woff2"
import "./fonts/webfonts/Vazirmatn-Medium.woff2"
import "./fonts/webfonts/Vazirmatn-SemiBold.woff2"
import "./fonts/webfonts/Vazirmatn-Bold.woff2"
import "./fonts/webfonts/Vazirmatn-ExtraBold.woff2"
import "./fonts/webfonts/Vazirmatn-Black.woff2"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

);


