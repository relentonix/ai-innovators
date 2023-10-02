import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/dashboard' element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
        </Routes>
    );
};

export default AppRouter;
