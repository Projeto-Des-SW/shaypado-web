import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'

import './index.css';
import LadingPage from './pages/index.jsx';
import ForgotPassword from './pages/ForgotPassword/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<LadingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
