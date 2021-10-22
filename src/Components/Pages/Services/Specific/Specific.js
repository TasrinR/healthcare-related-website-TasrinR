import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Specific = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState('')
    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data.find(service => service.id == parseInt(serviceId)))
            })
    }, [])
    return (
            <div className="p-5">
                <img src={service.img} className="p-3" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link to='/booking'>
                    <button className="btn btn-warning">Book For A Service</button>
                    </Link>
            </div>
    );
};

export default Specific;