import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
