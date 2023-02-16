import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import MainNavigation from './components/MainNavigation';
import Login from './pages/Login';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Expenses from './pages/Expenses';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const themeMode = useSelector((state) => state.theme.theme);

  return (
    <div className={themeMode === 'dark' ? 'dark' : ''}>
      <MainNavigation />
      <Routes>
        <Route path='/' exact element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Home />} />

        <Route
          path='/expenses'
          element={isLoggedIn ? <Expenses /> : <Navigate to='/login' replace />}
        />

        <Route path='/about' element={<About />} />

        <Route
          path='/profile'
          element={
            isLoggedIn ? <UserProfile /> : <Navigate to='/login' replace />
          }
        />

        <Route path='/login' element={<Login />} />
        <Route path='/resetpassword' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
