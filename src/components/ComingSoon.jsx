import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import HybixLogo from '../assets/Hybix.svg';
import './ComingSoon.css';

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [targetDate, setTargetDate] = useState(null);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles for background effect
        const particleCount = 30;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            initialX: Math.random() * window.innerWidth,
            initialY: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 2, // Range 2px - 6px
            duration: Math.random() * 15 + 15, // Slow movement 15s - 30s
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.2, // 0.2 - 0.7
        }));
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        const fetchLaunchDate = async () => {
            try {
                const docRef = doc(db, "settings", "coming_soon");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // Use existing date from Firestore
                    setTargetDate(docSnap.data().launchDate.toDate());
                } else {
                    // Create new date 4 days from now and save to Firestore
                    const newTargetDate = new Date();
                    newTargetDate.setDate(newTargetDate.getDate() + 4);

                    await setDoc(docRef, {
                        launchDate: Timestamp.fromDate(newTargetDate)
                    });
                    setTargetDate(newTargetDate);
                }
            } catch (error) {
                console.error("Error fetching launch date:", error);
                // Fallback to local 4 days if firebase fails
                const fallbackDate = new Date();
                fallbackDate.setDate(fallbackDate.getDate() + 4);
                setTargetDate(fallbackDate);
            }
        };

        fetchLaunchDate();
    }, []);

    useEffect(() => {
        if (!targetDate) return;

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const timerComponents = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    if (!targetDate) {
        return (
            <div className="coming-soon-container">
                <div className="background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="coming-soon-container">
            <div className="background-shapes">
                <motion.div
                    className="shape shape-1"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="shape shape-2"
                    animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="shape shape-3"
                    animate={{ x: [0, 40, 0], y: [0, -40, 0], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="particles-container">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="particle"
                        initial={{
                            x: particle.initialX,
                            y: particle.initialY,
                            opacity: 0,
                        }}
                        animate={{
                            x: [
                                particle.initialX,
                                particle.initialX + (Math.random() * 100 - 50),
                                particle.initialX
                            ],
                            y: [
                                particle.initialY,
                                particle.initialY + (Math.random() * 100 - 50),
                                particle.initialY
                            ],
                            opacity: [
                                particle.opacity * 0.4,
                                particle.opacity,
                                particle.opacity * 0.4
                            ],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay,
                        }}
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: 0,
                            top: 0,
                            position: 'absolute', // Ensure absolute positioning relative to container
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="content-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="logo-placeholder"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <img src={HybixLogo} alt="Hybix Group" className="brand-logo" style={{ height: '80px', width: 'auto' }} />
                </motion.div>

                <motion.h1
                    className="main-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Something Amazing is Coming
                </motion.h1>

                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    We are crafting an experience that will redefine excellence. <br className="desktop-br" /> Stay tuned for the big reveal.
                </motion.p>

                <motion.div
                    className="timer-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {timerComponents.map((item, index) => (
                        <div key={index} className="timer-box">
                            <div className="time-value-wrapper">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={item.value}
                                        initial={{ y: 20, opacity: 0, position: 'absolute' }}
                                        animate={{ y: 0, opacity: 1, position: 'relative' }}
                                        exit={{ y: -20, opacity: 0, position: 'absolute' }}
                                        transition={{ duration: 0.4, ease: "backOut" }}
                                        className="time-value"
                                    >
                                        {item.value < 10 ? `0${item.value}` : item.value}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            <div className="time-label">{item.label}</div>
                        </div>
                    ))}
                </motion.div>

            </motion.div>
        </div>
    );
};

export default ComingSoon;
