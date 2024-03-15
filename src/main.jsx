import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useAuth from "./hooks/useAuth.jsx";
import App from './App.jsx';
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import LadingPage from './pages/index.jsx';
import ForgotPassword from './pages/ForgotPassword/index.jsx';
import ListStudents from './pages/ListStudents/index.jsx';
import ListTraining from './pages/ListTraining/index.jsx';
import ListClass from './pages/ListClass/index.jsx';
import ListHistoric from './pages/ListHistoric/index.jsx';
import ManageTraining from './pages/ManageTraining/index.jsx';
import ManageStudent from './pages/ManageStudent/index.jsx'

import './global.css';
import ManageClass from './pages/ManageClass/index.jsx';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Home />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/shaypado-web/' element={<LadingPage />} />
          <Route path='/shaypado-web/login' element={<Login />} />
          <Route path='/shaypado-web/home' element={<Private Item={Home} />} />
          <Route path='/shaypado-web/forgot-password' element={<ForgotPassword />} />
          <Route path='/shaypado-web/list-students' element={<ListStudents />} />
          <Route path='/shaypado-web/list-training' element={<ListTraining />} />
          <Route path='/shaypado-web/list-class' element={<ListClass />} />
          <Route path='/shaypado-web/list-historic' element={<ListHistoric />} />
          <Route path='/shaypado-web/manage-training' element={<ManageTraining />} />
          <Route path='/shaypado-web/manage-student' element={<ManageStudent />} />
          <Route path='/shaypado-web/manage-class' element={<ManageClass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
