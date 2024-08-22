import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

// Find the root element in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(<App />);