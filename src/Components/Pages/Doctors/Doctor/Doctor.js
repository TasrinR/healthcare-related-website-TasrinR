import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const {name, id, specialized, experience, job, description, img} = props.doctor
    return (
        <>
        <div>
            <CardGroup className="p-3 card-group">
            <Card>
                <Card.Img variant="top" src={img} className="card-image"/>
                <Card.Body>
                <Card.Title>{id} : {name}</Card.Title>
                <Card.Text>
                    <h6>Specialised : {specialized}</h6>
                    <h6>Experience : {experience}</h6>
                    <h6>Works at {job}</h6>
                    <p>{description}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-warning">Book for an appointment</button>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>
        </>
    );
};

export default Doctor;