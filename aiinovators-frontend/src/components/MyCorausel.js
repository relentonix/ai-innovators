import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCorausel = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="carouselWork d-block w-100 h-200"
                    src="ccPhotos.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Daily Saver Credit Card</h3>
                    <p>Now everyone can own a credit card</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselWork d-block w-100 h-200"
                    src="ccPhoto2.jpeg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Premium Credit Card</h3>
                    <p>More than just transactions</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselWork d-block w-100 h-200"
                    src="ccPhotos5.jpeg"
                    alt="Third slide"
                />

                 <Carousel.Caption>
                     <h3>Airline Credit Card</h3>
                     <p>
                        For the one who travels
                     </p>
                 </Carousel.Caption>
             </Carousel.Item>
        </Carousel>
    );
};

export default MyCorausel;
