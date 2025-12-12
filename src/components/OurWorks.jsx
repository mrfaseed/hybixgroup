import React from 'react';
import Masonry from './Masonry';
import './OurWorks.css';

import work1 from '../assets/work_healthbot_1.png';
import work2 from '../assets/work_healthbot_2.png';
import work3 from '../assets/work_hybix_pro.png';
import work4 from '../assets/work_riya_1.png';
import work5 from '../assets/work_riya_2.png';
import work6 from '../assets/work_robotics.jpg';
import work7 from '../assets/work_electronics.jpg';
import work8 from '../assets/work_plant_disease.jpg';
import work9 from '../assets/work_bus_tracking.jpg';
import work10 from '../assets/work_iot_dashboard.jpg';

const items = [
    {
        id: "1",
        img: work1,
        url: "#",
        height: 600,
        title: "HealthBot Dashboard"
    },
    {
        id: "2",
        img: work2,
        url: "#",
        height: 500,
        title: "Health Chat Assistant"
    },
    {
        id: "3",
        img: work3,
        url: "#",
        height: 550,
        title: "HYBIX Pro 3D"
    },
    {
        id: "4",
        img: work4,
        url: "#",
        height: 350,
        title: "Riya Makeover Services"
    },
    {
        id: "5",
        img: work5,
        url: "#",
        height: 400,
        title: "Riya Makeover Hero"
    },
    {
        id: "6",
        img: work6,
        url: "#",
        height: 450,
        title: "Advanced Robotics"
    },
    {
        id: "7",
        img: work7,
        url: "#",
        height: 500,
        title: "IoT Circuit Design"
    },
    {
        id: "8",
        img: work8,
        url: "#",
        height: 400,
        title: "AI Plant Disease Detection"
    },
    {
        id: "9",
        img: work9,
        url: "#",
        height: 800,
        title: "Smart Bus Tracking App"
    },
    {
        id: "10",
        img: work10,
        url: "#",
        height: 800,
        title: "IoT Analytics Dashboard"
    }
];

const OurWorks = () => {
    return (
        <div className="our-works-page">
            <div className="works-header">
                <h1>Our <span className="highlight">Works</span></h1>
                <p>Exploring the intersection of creativity and technology.</p>
            </div>

            <div className="masonry-container">
                <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.8}
                    stagger={0.08}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={1.03}
                    blurToFocus={true}
                    colorShiftOnHover={true}
                />
            </div>
        </div>
    );
};

export default OurWorks;
