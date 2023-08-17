import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './shared/PageNotFound';
import { AuthProvider } from './providers/AuthProviders';
import PrivateRoute from './auth/PrivateRoute';
import DashboardLayout from './Layout/DashboardLayout';
import Weather from './pages/Dashboard/Weather';
import ToDo from './pages/Dashboard/ToDo';
import Chat from './pages/Dashboard/Chat';
import { SocketProvider } from './providers/SocketProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<Register />} />
          
            <Route path='dashboard' element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>}>
              <Route path='' index element={
                <PrivateRoute>
                  <Weather />
                </PrivateRoute>
              } />
              <Route
                path='todo'
                element={
                  <PrivateRoute>
                    <ToDo />
                  </PrivateRoute>
                }
              />
              <Route
                path='chat'
                element={
                  <PrivateRoute>
                    <SocketProvider>
                      <Chat />
                    </SocketProvider>
                    
                  </PrivateRoute>
                }
              />
            </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
