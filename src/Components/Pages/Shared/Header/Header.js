import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, handleSignOut } = useAuth()
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/booking">Booking</NavLink>
                {
                    !user ? <NavLink to="/login">Login</NavLink> : <button style={{ color: 'steelblue' }} onClick={handleSignOut}>Logout</button>
                }

                <div style={{color: '#fff'}}>{user && user.displayName}</div>
            </nav>
        </div>
    );
};

export default Header;