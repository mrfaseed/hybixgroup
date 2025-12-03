import React from 'react';
import { motion } from 'framer-motion';

export default function HybixLogoAnimated() {
    // Squid Game style: Sharp, sudden, flickering entrance
    const flicker = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: [0, 1, 0, 1, 0.5, 1],
            transition: {
                delay: 0.8 + i * 0.1, // Start after flash (0.8s)
                duration: 0.4,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }
        })
    };

    const snap = {
        hidden: { scale: 3, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.8 + i * 0.15,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        })
    };

    return (
        <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 982.7 250.7"
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '600px', width: '100%', height: 'auto', overflow: 'visible' }}
        >
            <g>
                {/* H - Flicker */}
                <motion.path
                    d="M0,56h45.4v65.9h102.3V56h44.5v193.4h-44.5c-0.3-31.8-0.6-63.5-0.9-95.3l-101-0.5l-2.2,95.8H0V56z"
                    fill="#ffffff"
                    variants={flicker}
                    custom={0}
                />

                {/* Top Accent - Snap */}
                <motion.path
                    d="M660.1,0h17.6l0.2,0.3c8.8,9.7,23.7,10.4,33.4,1.7c0.6-0.6,1.2-1.1,1.7-1.7l0.2-0.2h17.4l-10.9,11.8 c-11.1,11.9-17.2,27.6-17.2,43.9V56h-14.2c0-16.4-6.2-32.1-17.3-44.1L660.1,0z"
                    fill="#ffffff"
                    variants={snap}
                    custom={1}
                />

                {/* b - Flicker */}
                <motion.path
                    d="M632.7,160.6c-2.6-2-3.3-5.6-1.5-8.3c3.5-5.5,9.5-24.1,6.9-37c-6.1-29.6-36.3-38.1-48.7-38 c-0.4,0-0.9-0.1-1.3-0.1H464.3c-4.4,0-8,3.1-8,6.9c0,6.8,0,13.7,0,20.5c0,3.8,3.6,6.9,8.1,6.9l113.5-0.3c0.3,0,0.6,0,0.9,0 c2.4-0.2,17.1-1,17.4,14.3c0.4,16.7-15,17-15,17L464.2,143c-4.4,0-8,3.1-8,6.9c0,30.4,0,60.7,0,91.1c0,3.8,3.6,6.9,8,6.9 c28.7,0.1,124.8,0.3,133.9,0c8.4-0.3,8.4-0.3,16.2-3.4c0.5-0.2,1.1-0.4,1.6-0.6c4-1,21.6-6.7,32.4-35.2 C657.4,184.8,641.5,167.8,632.7,160.6z M595.3,211.6h-94.5v-33.7h87.4c0,0,18.6,1.7,18.2,16S595.3,211.6,595.3,211.6L595.3,211.6z"
                    fill="#ffffff"
                    variants={flicker}
                    custom={2}
                />

                {/* X - Snap (Squid Game Shape) */}
                <motion.path
                    d="M742.3,56.4h51.8l66.6,67.2l63.6-67.2h55.7l-91.6,93.8l94.4,97.9h-54.5c-22.4-23-44.9-46-67.3-68.9l-67.1,68.9 h-54.2l94.1-97.4L742.3,56.4z"
                    fill="#ffffff"
                    variants={snap}
                    custom={3}
                />

                {/* y - Flicker */}
                <motion.path
                    d="M201.6,107.1H290l23.8,41.9l72.5-41.9h55.1l-113.4,60.3l-28.1,51c0,0-8.9,11.6,6.5,12.3s30.3,0,30.3,0 l-11.6,20.1h-84.8c0,0-32.9-11.2-12.1-42.8c19.6-29.8,19.5-29.9,15.7-24.4L201.6,107.1z"
                    fill="#ffffff"
                    variants={flicker}
                    custom={0.5}
                />

                {/* i - Snap (Squid Game Shape) */}
                <motion.rect
                    x="672.6" y="78" width="45.5" height="170.6"
                    fill="#ffffff"
                    variants={snap}
                    custom={2.5}
                />
            </g>
        </motion.svg>
    );
}
