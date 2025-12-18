import React from "react";
import "./loading.css";
import logo from "../assets/Hybix.svg";

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={logo} alt="Hybix Logo" className="loading-logo" />
            <div className="modern-loader"></div>
        </div>
    );
};

export default Loading;
