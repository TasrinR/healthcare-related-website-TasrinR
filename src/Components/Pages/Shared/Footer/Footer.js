import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <div className="row footer">
            <div className="footer-bottom p-5">
                <div><p>contact us: 019876546628</p></div>
                <div><p>email: @abc.gmail.com</p></div>
            </div>
            <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                    <li><Link to='../../services'>Internal Medicine</Link></li>
                    <li><Link to='../../services'>Cardiology</Link></li>
                    <li><Link to='../../services'>Family Practice</Link></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                    <li><Link to='../../services'>Neurology</Link></li>
                    <li><Link to='../../services'>Nephrology</Link></li>
                    <li><Link to='../../services'>paediatrics</Link></li>
                </ul>
            </div>
            <div className="col-md-6 item text">
                <h3>Doctors Clinic</h3>
                <p>Please Call (03) 6343 5556 for an appointment. Every effort will be made to accomodate your preferred time with your GP.</p>
            </div>
            <p className="copyright">Doctors Clinic © 2021</p>
        </div>
        </>
    );
};

export default Footer;