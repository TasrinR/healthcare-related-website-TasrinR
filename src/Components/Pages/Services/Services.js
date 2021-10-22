import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="m-5"><h2> About Our Services </h2>
            <p>Every family should have a GP that they know and trust.  However, when you need urgent medical care, but your GP is closed, 13SICK, National Home Doctor can help. With more than 40 doctors in our team, National Home Doctors, Doctors-Clinic is Bangladesh's largest network of home visiting doctors. Our Doctors treat patients with acute, episodic conditions (e.g. gastro, UTI, migraine, respiratory infections) on weeknights, weekends and public holidays. This year we will see more than 1 million patients at home and in aged care facilities.</p></div>
            <Row xs={1} md={2} className="g-4">
                {
                 services.map(service => <Service
                    service={service}
                    key={service.id}>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;