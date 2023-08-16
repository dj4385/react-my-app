import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './shared/PageNotFound';
import { AuthProvider } from './providers/AuthProviders';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<Register />} />
          
            <Route path='dashboard' element={
              <AuthProvider>
                <Dashboard />
              </AuthProvider>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
