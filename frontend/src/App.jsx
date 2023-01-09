import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import Login from './pages/Login';
import MainUserScreen from './pages/MainUserScreen';
import RegisterScreen from './pages/RegisterScreen';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/user" element={<MainUserScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
