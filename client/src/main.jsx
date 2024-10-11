import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Only import createRoot from react-dom/client
import App from './App.jsx';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root container and render the App component
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
