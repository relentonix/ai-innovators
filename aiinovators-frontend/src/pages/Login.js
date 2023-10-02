import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginOptionValues } from '../constants/general.constants';
import '../assets/styles/login.css';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions';

const Login = () => {
    const isAuthenticated = useSelector(state => state.authenticateReducer.authenticated);
    const errorMessage = useSelector(state => state.authenticateReducer.message);

    const [loginType, setLoginType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.loginType) {
            setLoginType(location.state.loginType);
        }
    }, [location]);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authenticateAction.login(username, password, loginType));
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(authenticateAction.clearMessage());
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [errorMessage]);
    return (
        <div className='container-login'>
            <div className="wrap-login">
                {errorMessage !== '' && (
                    <Alert variant='danger'>{errorMessage}</Alert>
                )}
                <form action="" method="">
                    {loginType === loginOptionValues.AGENT
                        ? <>
                            <span className="login-form-title mb-3">Agent Login</span>
                            <div className="wrap-input100">
                                <input className="input100" type="text" placeholder="Agent ID" onChange={(e) => { setUsername(e.target.value); }} />
                                <span className="focus-efecto"></span>
                            </div></>
                        : <>
                            <span className="login-form-title mb-3">Customer Login</span>
                            <div className="wrap-input100">
                                <input className="input100" type="text" placeholder="Customer ID" onChange={(e) => { setUsername(e.target.value); }} />
                                <span className="focus-efecto"></span>
                            </div>
                        </>
                    }
                    <div className="wrap-input100">
                        <input className="input100" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
                        <span className="focus-efecto"></span>
                    </div>
                    <div className="container-login-form-btn">
                        <div className="wrap-login-form-btn">
                            <div className="login-form-bgbtn"></div>
                            <button type="submit" className="login-form-btn" onClick={(e) => handleSubmit(e)}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
