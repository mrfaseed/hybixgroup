import React from 'react';
import './OurTeam.css';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

import teamMember1 from '../assets/team_member_1.png';
import teamMember2 from '../assets/team_member_2.jpg';
import teamMember3 from '../assets/team_member_3.jpg';
import teamMember4 from '../assets/team_member_4.jpg';
import teamMember5 from '../assets/team_member_5.jpg';
import teamMember6 from '../assets/team_member_6.jpg';

const teamMembers = [
    {
        id: 1,
        name: "JEGATHEESH",
        role: "Founder & COO",
        image: teamMember1,

    },
    {
        id: 2,
        name: "MOHAMMED SHABAN",
        role: "CEO & CO-FOUNDER",
        image: teamMember2,
    },
    {
        id: 3,
        name: "MOHAMMED FASEED",
        role: "CTO & CO-FOUNDER",
        image: teamMember3,

    },
    {
        id: 4,
        name: "VISHNNU",
        role: "Lead Developer",
        image: teamMember4,

    },
    {
        id: 5,
        name: "IKHLASH",
        role: "Lead Developer",
        image: teamMember5,

    },
    {
        id: 6,
        name: "SHOBIKA",
        role: "Head of Design",
        image: teamMember6,

    }
];

const OurTeam = () => {
    return (
        <div className="company-page-container">

            <div className="page-content">
                <h1 className="page-title">Meet <span className="page-title-span">Our Team</span></h1>
                <p className="page-subtitle">
                    The brilliant minds behind Hybix Group. We are a diverse team of innovators, creators, and problem solvers.
                </p>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-row">
                            <div className="member-visual">
                                <div className="member-image-container">
                                    <img src={member.image} alt={member.name} className="member-image" />
                                </div>
                                <div className="member-socials">
                                    <a href="#" className="social-link"><FaInstagram /></a>
                                    <a href="#" className="social-link"><FaTwitter /></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
