import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { BrowserRouter } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { useAppSelector } from './hooks/reduxHooks';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <BrowserRouter>
      <CustomNavbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
