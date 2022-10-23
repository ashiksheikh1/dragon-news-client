import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../Assets/brands/one.jpg'
import brand2 from '../../../Assets/brands/two.jpg'
const BrandCarousel = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand1}
                        alt="Second slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;