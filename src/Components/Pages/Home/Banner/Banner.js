import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel className="m-5">
                <Carousel.Item className="carousel-item mx-auto">
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg"
                        alt="Get Your Services"
                    />
                    <Carousel.Caption>
                        <h3>Get Your Services</h3>
                        <p>You can get all services your want</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item mx-auto">
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/health-professional-team_52683-36023.jpg"
                        alt="Our Best Doctors"
                    />

                    <Carousel.Caption>
                        <h3>Our Best Doctors</h3>
                        <p>Our services includes all renowned doctors in Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item mx-auto">
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg?size=626&ext=jpg"
                        alt="Book for your appointment"
                    />

                    <Carousel.Caption className="carousel-caption">
                        <h3>Book for your appointment</h3>
                        <p>Just choose your service and doctor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;