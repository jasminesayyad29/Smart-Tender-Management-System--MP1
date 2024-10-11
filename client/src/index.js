import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root container
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Use createRoot to create a root

// Render the App component using createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
