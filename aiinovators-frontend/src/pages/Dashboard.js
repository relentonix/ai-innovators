import React, { useEffect, useState } from 'react';
import MyNavbar from '../components/MyNavbar';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import MyCorausel from '../components/MyCorausel';
import Services from '../components/Services';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Dashboard = () => {
    const currentUser = useSelector(state => state.authenticateReducer.currentUser);
    const URL = 'https://product-prediction-python-dot-hack-team-aiinnovators.uc.r.appspot.com/predict';
    const [approveCard, setApproveCard] = useState(false);
    useEffect(() => {
        if (currentUser) {
            const formData = new FormData();
            for (const key in currentUser.predict) {
                formData.append(key, currentUser.predict[key]);
            }
            axios.post(URL, formData)
                .then((res) => {
                    if (res.data) {
                        setApproveCard(res.data.predictions[0] === 1);
                    }
                });
        }
    }, [currentUser]);
    return (
        <div>
            <MyNavbar />
            <Container>
                <Row className='mt-5'>
                    <Col></Col>
                    <Col md={9}>
                        {approveCard && (
                            <Alert variant='secondary'>Congratulations ! You are pre approved for Miles and More credit Card.</Alert>
                        )}
                        <MyCorausel />
                    </Col>
                    <Col></Col>
                </Row>
                <Services />
                <df-messenger
                    df-cx="true"
                    location="us-central1"
                    chat-title="Techie"
                    agent-id="add4642f-7edf-458e-8065-18a84c7a0994"
                    current-user={{ id: currentUser.id, name: currentUser.name }}
                    language-code="en"
                ></df-messenger>
            </Container>
        </div>
    );
};

export default Dashboard;
