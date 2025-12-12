import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaAndroid, FaApple, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiMongodb, SiTypescript, SiJavascript } from 'react-icons/si';

// Icon set - 12 icons
const icons = [
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
    SiFlutter, SiFirebase, SiMongodb, SiTypescript, SiJavascript,
    FaAndroid, FaApple
];

const FloatingTechBackground = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Generate random properties strictly on client side
        setElements(icons.map((Icon, index) => ({
            id: index,
            Icon,
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            translateX: (Math.random() - 0.5) * 200, // -100 to 100px drift
            translateY: (Math.random() - 0.5) * 200, // -100 to 100px drift
            duration: 25 + Math.random() * 20, // 25-45s slow drift
            rotateDir: Math.random() > 0.5 ? 1 : -1,
            delay: Math.random() * 5,
            size: 50 + Math.random() * 30, // 50-80px
        })));
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        >
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    style={{
                        position: 'absolute',
                        left: `${el.initialX}%`,
                        top: `${el.initialY}%`,
                        color: 'var(--txt-secondary, #475569)', // Soft color
                        fontSize: `${el.size}px`,
                        opacity: 0,
                        mixBlendMode: 'multiply', // Better visibility on light bg than overlay
                        filter: 'blur(1px)',
                    }}
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                        opacity: [0.05, 0.12, 0.05],
                        x: [0, el.translateX, 0],
                        y: [0, el.translateY, 0],
                        rotate: 360 * el.rotateDir,
                    }}
                    transition={{
                        opacity: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: el.delay
                        },
                        x: {
                            duration: el.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: el.delay
                        },
                        y: {
                            duration: el.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: el.delay
                        },
                        rotate: {
                            duration: el.duration * 0.8,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }
                    }}
                >
                    <el.Icon />
                </motion.div>
            ))}
        </div>
    );
}

export default React.memo(FloatingTechBackground);
