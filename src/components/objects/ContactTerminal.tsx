'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IsoCube } from '../isometric/IsoCube';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export const ContactTerminal: React.FC = () => {
    const { setActiveZone, setHoveredObject, hoveredObject, isMobile } = usePortfolioStore();
    const isHovered = hoveredObject === 'contact';
    const showLabel = isHovered || isMobile;

    return (
        <motion.div
            className="interactive-object contact-terminal"
            onHoverStart={() => setHoveredObject('contact')}
            onHoverEnd={() => setHoveredObject(null)}
            onClick={() => setActiveZone('contact')}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer', position: 'absolute' }}
        >
            {/* Position Front Left Quadrant */}

            {/* Terminal Base */}
            <IsoCube
                x={-200}
                y={100}
                z={0}
                width={80}
                height={60}
                depth={80}
                color="#222"
                className="terminal-base"
            />

            {/* Red Pulse Emitter */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '-160px',
                    top: '80px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#ff0055',
                    transform: 'translateZ(60px)',
                    zIndex: 20,
                    boxShadow: '0 0 50px #ff0055'
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />

            {/* Visual Ring Waves */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '-160px',
                    top: '80px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid #ff0055',
                    transform: 'translateZ(60px)',
                    zIndex: 19,
                }}
                animate={{ scale: [1, 3], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />

            {/* Connection Line */}
            <div style={{
                position: 'absolute',
                left: '-160px',
                top: '150px',
                width: '150px',
                height: '4px',
                background: '#522',
                transform: 'rotate(45deg)',
                transformOrigin: 'right center',
            }} />

            {/* Floating Label */}
            {showLabel && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        left: '-220px',
                        top: '20px',
                        color: '#ff0055',
                        fontWeight: '900',
                        fontSize: '24px',
                        textShadow: '0 0 20px #ff0055',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}
                >
                    CONTACT
                </motion.div>
            )}
        </motion.div>
    );
};
