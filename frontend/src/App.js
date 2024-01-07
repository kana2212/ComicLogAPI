import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ComicInputProvider } from './hooks/provider/ComicInputProvider';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
    <ComicInputProvider>
    <Router />
    </ComicInputProvider>
  </BrowserRouter>
  );
}

export default App;