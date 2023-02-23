import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MYNAVBAR from './components/navbar';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MYNAVBAR />
    <App />
  </React.StrictMode>
);


