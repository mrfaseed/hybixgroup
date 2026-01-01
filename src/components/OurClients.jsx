import React from 'react';
import './OurClients.css';
import RiyaMakeoverImg from '../assets/Riya Makeover.png';
import RiyaTattooImg from '../assets/Riya_Tattoo.png';

const OurClients = () => {
    return (
        <div className="our-clients-container">
            <div className="our-clients-header">
                <h2>Our Valuable Clients</h2>
            </div>

            <div className="clients-logos-wrapper">
                <div className="client-logo-item1">
                    <img src={RiyaMakeoverImg} alt="Riya Makeover" />
                </div>
                <div className="client-logo-item2">
                    <img src={RiyaTattooImg} alt="Riya Tattoo" />
                </div>
            </div>
        </div>
    );
};

export default OurClients;
