import React from 'react';
import './OurWork.css';
import pic1 from '../../../images/carousel-1.png';
import pic2 from '../../../images/carousel-2.png';
import pic3 from '../../../images/carousel-3.png';
import { Carousel } from 'react-bootstrap';

const OurWork = () => {
    return (
        <div className='work '>
            <h1>Here are some of our works</h1>

            <div >
            <Carousel >
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-25 mt-5"
                        src={pic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-25 mt-5"
                        src={pic2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-25 mt-5"
                        src={pic3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default OurWork;