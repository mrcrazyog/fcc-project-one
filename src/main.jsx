import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuoteBox from './QuoteBox';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <QuoteBox />
  </React.StrictMode>
);
