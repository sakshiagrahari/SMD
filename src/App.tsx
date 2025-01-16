import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './admin/LoginPage';
import RequestAccessPage from './admin/RequestAccessPage';
import './App.scss';
import SignInPage from './admin/SignInPage';
import ForgetPassword from './admin/ForgetPassword';
import ResetPassword from './admin/ResetPassword';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/request-access" element={<RequestAccessPage />} />
        <Route path='/forget-password' element={<ForgetPassword/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
};
export default App;
