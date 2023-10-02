import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { loginOptionValues } from '../constants/general.constants';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions';

const MyNavbar = () => {
    const user = useSelector(state => state.authenticateReducer.currentUser);
    const dbLogo = require('../assets/images/Deutsche_Bank_Logo.jpeg');
    const handleSubmit = (type) => {
        navigate('/login', { state: { loginType: type } });
    };
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.authenticateReducer.authenticated);
    const logoutFunction = (e) => {
        dispatch(authenticateAction.logout());
    };
    const dispatch = useDispatch();

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src={dbLogo} /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>{
                        isAuthenticated
                        ? <p>Hello!  <b>{user.name}</b> <Button className='m-2' variant="primary" onClick={() => logoutFunction()}>Logout</Button></p>
                        : <p> <Button className='m-2' variant="primary" onClick={() => handleSubmit(loginOptionValues.CUSTOMER)}>Login Here</Button>{' '}
</p>
                    }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default MyNavbar;
