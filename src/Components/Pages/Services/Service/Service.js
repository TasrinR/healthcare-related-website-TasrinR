import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{ title, id, description, img}= props.service;

    return (
        <div>
            <Row className="m-3 p-3 service">
            <Col xs={4} md={5} className="p-3">
                <img src={img} className="w-100 h-100 service-image" alt='ima' />
            </Col>
            <Col xs={8} md={7}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={`/Specific/${id}`}>
                    <button className="btn btn-warning">Details</button>
                </Link>
            </Col>
            </Row>
        </div>
    );
};

export default Service;