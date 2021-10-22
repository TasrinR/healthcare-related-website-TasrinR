import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);
    return (
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                doctors.map( doctor =>
                    <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </Row>
    );
};

export default Doctors;