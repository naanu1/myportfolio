'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IsoCube } from '../isometric/IsoCube';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export const BlueprintDesk: React.FC = () => {
    const { setActiveZone, setHoveredObject, hoveredObject, isMobile } = usePortfolioStore();
    const isHovered = hoveredObject === 'experience';
    const showLabel = isHovered || isMobile;

    return (
        <motion.div
            className="interactive-object blueprint-desk"
            onHoverStart={() => setHoveredObject('experience')}
            onHoverEnd={() => setHoveredObject(null)}
            onClick={() => setActiveZone('experience')}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer', position: 'absolute' }}
        >
            {/* Position Check: Front Right Quadrant */}

            {/* Desk Surface */}
            <IsoCube
                x={100}
                y={100}
                z={0}
                width={180}
                height={40}
                depth={100}
                color="#2a2a2a" // Darker base for contrast
                className="desk-surface"
            />

            {/* Glowing Cylinders (Blueprints) */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${130 + (i * 50)}px`,
                        top: '80px',
                        width: '30px',
                        height: '80px',
                        background: 'linear-gradient(90deg, #ff9500, #ffcc00)',
                        borderRadius: '15px',
                        transform: 'translateZ(40px) rotateX(60deg)', // Tilted
                        boxShadow: '0 0 30px #ff9500',
                        zIndex: 20
                    }}
                    animate={{
                        y: [0, -5, 0],
                        boxShadow: ['0 0 30px #ff9500', '0 0 50px #ff9500', '0 0 30px #ff9500']
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Connection Line */}
            <div style={{
                position: 'absolute',
                left: '0px',
                top: '150px',
                width: '150px',
                height: '4px',
                background: '#444',
                transform: 'rotate(-45deg)',
                transformOrigin: 'left center',
            }} />

            {/* Floating Label */}
            {showLabel && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        left: '160px',
                        top: '20px',
                        color: '#ff9500',
                        fontWeight: '900',
                        fontSize: '24px',
                        textShadow: '0 0 20px #ff9500',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}
                >
                    EXPERIENCE
                </motion.div>
            )}
        </motion.div>
    );
};
