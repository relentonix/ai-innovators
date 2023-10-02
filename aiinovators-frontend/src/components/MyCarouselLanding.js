import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCorauselLanding = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="carouselWork d-block w-100 h-200"
                    src="banking_services.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Banking Services</h3>
                    <p>We provide these services on your finger-tips</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselWork d-block w-100 h-200"
                    src="creditcard_calculator.jpeg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 >Digital Banking</h3>
                    <p>Transactions now easier than ever</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselWork d-block w-100 h-200"
                    src="Mortgage-calculator.jpeg"
                    alt="Third slide"
                />

                 <Carousel.Caption>
                     {/* <h3 className='text-dark font-weight-bold'>Getting Home-Loans faster than ever </h3>
                     <p>
                        Getting Home-Loans faster than ever</p> */}
                 </Carousel.Caption>
             </Carousel.Item>
        </Carousel>
    );
};

export default MyCorauselLanding;
