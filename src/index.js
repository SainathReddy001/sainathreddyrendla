import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Family from './Family';
import Resume from './Resume';
import Project0 from './Project0';
import Project1 from './Project1';
import Project2 from './Project2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
