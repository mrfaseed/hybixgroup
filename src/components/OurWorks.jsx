import React from 'react';
import Masonry from './Masonry';
import './OurWorks.css';

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 600,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 500,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 550,
    },
    {
        id: "4",
        img: "https://picsum.photos/id/103/600/500?grayscale",
        url: "https://example.com/four",
        height: 350,
    },
    {
        id: "5",
        img: "https://picsum.photos/id/1043/600/600?grayscale",
        url: "https://example.com/five",
        height: 400,
    },
    {
        id: "6",
        img: "https://picsum.photos/id/119/600/700?grayscale",
        url: "https://example.com/six",
        height: 500,
    },
    {
        id: "7",
        img: "https://picsum.photos/id/180/600/400?grayscale",
        url: "https://example.com/seven",
        height: 300,
    },
    {
        id: "8",
        img: "https://picsum.photos/id/20/600/900?grayscale",
        url: "https://example.com/eight",
        height: 600,
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
