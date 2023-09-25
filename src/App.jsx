import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPAge';
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
