'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IsoCube } from '../isometric/IsoCube';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export const ServerRack: React.FC = () => {
    const { setActiveZone, setHoveredObject, hoveredObject } = usePortfolioStore();
    const isHovered = hoveredObject === 'skills';

    return (
        <motion.div
            className="interactive-object server-rack"
            onHoverStart={() => setHoveredObject('skills')}
            onHoverEnd={() => setHoveredObject(null)}
            onClick={() => setActiveZone('skills')}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer', position: 'absolute' }}
        >
            {/* Positioned at Back Left corner */}

            {/* Main Server Tower */}
            <IsoCube
                x={-300}
                y={-300}
                z={0}
                width={100}
                height={300}
                depth={100}
                color="#151515"
                className="server-main"
            />

            {/* Front Panel Grid */}
            <IsoCube
                x={-295}
                y={-305} // Slightly popped out
                z={20}
                width={90}
                height={260}
                depth={5}
                color="#222"
            />

            {/* Blinking LEDs */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: '-260px',
                        top: `${-250 + (i * 40)}px`,
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#00ff00',
                        boxShadow: '0 0 15px #00ff00',
                        transform: 'translateZ(100px)', // Bring to front
                        zIndex: 20
                    }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Connecting Cable to Center */}
            <div style={{
                position: 'absolute',
                left: '-250px',
                top: '0px',
                width: '250px',
                height: '4px',
                background: '#333',
                transform: 'rotate(45deg) translateZ(0px)',
                transformOrigin: 'left center',
                boxShadow: '0 0 10px rgba(0,255,0,0.2)'
            }} />

            {/* Floating Label */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        position: 'absolute',
                        left: '-320px',
                        top: '-350px',
                        color: '#00ff00',
                        fontWeight: '900',
                        fontSize: '24px',
                        textShadow: '0 0 20px #00ff00',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}
                >
                    SKILLS
                </motion.div>
            )}
        </motion.div>
    );
};
