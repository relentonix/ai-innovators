import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    const servicesOffered = [
        {
            name: 'Account Related'
        },
        {
            name: 'Card Services'
        },
        {
            name: 'Transactional'
        },
        {
            name: 'Personal Loan'
        }
    ];
    return (
<div>
 <div class="containerC m-6 ml-20
         ">
   <div class="cardC ">
     <h3 class="titleC">Account Related</h3>
     <div class="barC">
       <div class="emptybarC"></div>
       <div class="filledbarC"></div>
     </div>
     <div class="circleC">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </div>
  </div>
  <div class="cardC ">
    <h3 class="titleC">Card Services</h3>
    <div class="barC">
      <div class="emptybarC"></div>
      <div class="filledbarC"></div>
    </div>
    <div class="circleC">
    <circle class="stroke" cx="60" cy="60" r="50"/>
    </div>
  </div>
  <div class="cardC">
    <h3 class="titleC">Transactional</h3>
    <div class="barC">
      <div class="emptybarC"></div>
      <div class="filledbarC"></div>
    </div>
    <div class="circleC">
       <circle class="stroke" cx="60" cy="60" r="50"/>
    </div>
  </div>
  <div class="cardC">
    <h3 class="titleC">Personal Loan</h3>
    <div class="barC">
      <div class="emptybarC"></div>
      <div class="filledbarC"></div>
    </div>
    <div class="circleC">
    <circle class="stroke" cx="60" cy="60" r="50"/>
    </div>
  </div>
</div>
</div>
        // <div className='m-5'>
        /* <Row>
                    <Col md={3}>
                        <Card className='card-ttservice-card'>
                            <Card.Body>
                            <h1 >AccountRelated</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                                        <Col md={3}>
                        <Card className='card-ttservice-card'>
                            <Card.Body>
                            <h1>Card Services</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                                        <Col md={3}>
                        <Card className='card-ttservice-card'>
                            <Card.Body>
                            <h1>Transactional</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                                        <Col md={3}>
                        <Card className='card-ttservice-card'>
                            <Card.Body>
                            <h1>Personal Loan</h1>
                            </Card.Body>
                        </Card>
                    </Col>
            )
        </Row>
        </div> */
    );
};

export default Services;
