'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IsoCube } from '../isometric/IsoCube';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export const HologramTable: React.FC = () => {
    const { setActiveZone, setHoveredObject, hoveredObject, isMobile } = usePortfolioStore();
    const isHovered = hoveredObject === 'projects';
    const showLabel = isHovered || isMobile;

    return (
        <motion.div
            className="interactive-object hologram-table"
            onHoverStart={() => setHoveredObject('projects')}
            onHoverEnd={() => setHoveredObject(null)}
            onClick={() => setActiveZone('projects')}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer', position: 'absolute' }}
        >
            {/* Table Base - Centered at 0,0 */}
            <IsoCube
                x={-80}
                y={-80}
                z={0}
                width={160}
                height={30}
                depth={160}
                color="#222"
                className="table-base"
            />

            {/* Top detailed plate */}
            <IsoCube
                x={-70}
                y={-70}
                z={30}
                width={140}
                height={5}
                depth={140}
                color="#333"
                className="table-top"
            />

            {/* Hologram Beam */}
            <motion.div
                className="hologram-beam"
                style={{
                    position: 'absolute',
                    left: '0px',
                    top: '-250px', // Adjusted for centering
                    width: '6px',
                    height: '250px',
                    background: 'linear-gradient(to top, #00f0ff, transparent)',
                    boxShadow: '0 0 50px #00f0ff',
                    transform: 'translateZ(35px)',
                    zIndex: 10,
                }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                    height: ['250px', '280px', '250px'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating Icon */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '-25px',
                    top: '-300px',
                    width: '50px',
                    height: '50px',
                    border: '2px solid #00f0ff',
                    borderRadius: '8px',
                    boxShadow: '0 0 30px #00f0ff',
                    transform: 'translateZ(35px)',
                    zIndex: 15,
                }}
                animate={{ rotateY: 360, rotateZ: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Label */}
            {showLabel && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        left: '-60px',
                        top: '-360px',
                        color: '#00f0ff',
                        fontWeight: '900',
                        fontSize: '24px',
                        textShadow: '0 0 20px #00f0ff',
                        pointerEvents: 'none',
                        zIndex: 100,
                        whiteSpace: 'nowrap'
                    }}
                >
                    PROJECTS
                </motion.div>
            )}
        </motion.div>
    );
};
