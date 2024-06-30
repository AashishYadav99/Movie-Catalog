import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {AppProvider} from './Components/Context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
reportWebVitals();
