import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginOptionValues } from '../constants/general.constants';
import { Button, Container, Row, Col } from 'react-bootstrap';
import MyNavbar from '../components/MyNavbar';
import MyCorausel from '../components/MyCorausel';
import Services from '../components/Services';
import { useSelector } from 'react-redux';
import MyCorauselLanding from '../components/MyCarouselLanding';

const Landing = () => {
    const navigate = useNavigate();
    const handleSubmit = (type) => {
        navigate('/login', { state: { loginType: type } });
    };
    const isAuthenticated = useSelector(state => state.authenticateReducer.authenticated);

    return (
        // <div className='landing-container'>
            // <Button variant="primary" onClick={() => handleSubmit(loginOptionValues.CUSTOMER)}>Customer Login</Button>{' '}
        //     <Button variant="primary" onClick={() => handleSubmit(loginOptionValues.AGENT)}>Agent Login</Button>
        // </div>
        <div>
            <MyNavbar />
            <Container>
                <Row className='mt-5'>
                    <Col></Col>
                    <Col md={9}>
                        <MyCorauselLanding />
                    </Col>
                    <Col></Col>
                </Row>
                <Services />
                {isAuthenticated &&
                <df-messenger
                    df-cx="true"
                    location="us-central1"
                    chat-title="Techie"
                    agent-id="add4642f-7edf-458e-8065-18a84c7a0994"
                    language-code="en"
                ></df-messenger> }
            </Container>
        </div>
    );
};

export default Landing;
