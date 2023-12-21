import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


  ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
     <StyledEngineProvider injectFirst>
    <App />
    <customThema />
    </StyledEngineProvider>
  </React.StrictMode>
);