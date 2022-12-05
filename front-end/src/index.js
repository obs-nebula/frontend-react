import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TraceProvider from './tracing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <TraceProvider>
      <App />
    </TraceProvider>
  </>
);


