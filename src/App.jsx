import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ServiciosPage from './pages/ServiciesPage/ServiciosPage';
import GuiaPage from './pages/GuiaPage/GuiaPage';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/guia" element={<GuiaPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
