import React from 'react';
import { Navigate } from 'react-router-dom';
import { loginOptionValues } from '../constants/general.constants';

const Admin = () => {
    return (
        <Navigate to='/login' state={{ loginType: loginOptionValues.AGENT }} />
    );
};

export default Admin;
