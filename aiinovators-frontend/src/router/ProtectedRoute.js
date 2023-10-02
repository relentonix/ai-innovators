import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const isAuthenticated = useSelector(state => state.authenticateReducer.authenticated);
    return (
        <>
            {isAuthenticated ? props.children : <Navigate to='/'/>}
        </>
    );
};

export default ProtectedRoute;
