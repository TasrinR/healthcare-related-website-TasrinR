import React from 'react';
import { Form } from 'react-bootstrap';
import Doctors from '../../Doctors/Doctors/Doctors';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <h1 className="my-5">Our Services </h1>
            <Services></Services>
            <h1 className="my-5">Our Doctors</h1>
            <Doctors></Doctors>
            <div className="w-75 mx-auto">
                <h2 className="mt-5">Contact Us</h2>
                <Form className="p-5">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3}  placeholder="Your message here" />
                    </Form.Group>
                    <button className="btn btn-warning">Submit Your Message</button>
                </Form></div>
        </div>
    );
};

export default Home;