import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import notFoundAnimation from '../assets/404.lottie?url';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="lottie-wrapper">
                    <DotLottieReact
                        src={notFoundAnimation}
                        loop
                        autoplay
                    />
                </div>
                <h1 className="not-found-title">Page Not Found</h1>
                <p className="not-found-text">
                    Oops! The page you are looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>
                <button className="home-button" onClick={() => navigate('/')}>
                    <FaHome /> Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
