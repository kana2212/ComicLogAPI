import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { LogPage } from './components/pages/LogPage';
import Login from './components/pages/Login';
import Top from './components/pages/Top';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logpage" element={<LogPage />} />
      </Routes>
    </Router>
  );
}

export default App;