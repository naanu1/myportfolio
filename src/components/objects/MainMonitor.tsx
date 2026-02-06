'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IsoCube } from '../isometric/IsoCube';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { resumeData } from '@/lib/resumeData';

export const MainMonitor: React.FC = () => {
    const { setActiveZone, setHoveredObject, hoveredObject, isMobile } = usePortfolioStore();
    const isHovered = hoveredObject === 'about';
    const showLabel = isHovered || isMobile;

    return (
        <motion.div
            className="interactive-object main-monitor"
            onHoverStart={() => setHoveredObject('about')}
            onHoverEnd={() => setHoveredObject(null)}
            onClick={() => setActiveZone('about')}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer', position: 'absolute' }}
        >
            {/* Positioned Back Right Quadrant */}

            {/* Desk Stand */}
            <IsoCube
                x={250}
                y={-250}
                z={0}
                width={40}
                height={100}
                depth={40}
                color="#222"
            />

            {/* Screen - Ultra Wide */}
            <IsoCube
                x={150}
                y={-300}
                z={80} // Elevated
                width={240}
                height={160} // Taller for image
                depth={20}
                color="#111"
            />

            {/* Screen Content - Glowing */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '170px',
                    top: '-260px',
                    width: '200px',
                    height: '140px',
                    background: '#000',
                    border: '2px solid #7928ca',
                    boxShadow: '0 0 40px rgba(121, 40, 202, 0.4)',
                    transform: 'translateZ(105px) rotateY(-10deg)', // Slight curve effect
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '10px',
                    gap: '10px',
                    borderRadius: '4px',
                    zIndex: 20,
                    overflow: 'hidden'
                }}
                animate={{ boxShadow: ['0 0 20px #7928ca', '0 0 40px #7928ca', '0 0 20px #7928ca'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                {/* User Image Area */}
                <div style={{
                    width: '60px',
                    height: '80px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid #555',
                    backgroundColor: '#111'
                }}>
                    {/* The Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/image.png"
                        alt="Profile"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                            // Fallback if image missing
                            e.currentTarget.style.display = 'none';
                        }}
                    />

                    {/* Fallback avatar if no image */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: -1
                    }}>
                        <div style={{ width: '20px', height: '20px', background: '#333', borderRadius: '50%' }} />
                    </div>

                    {/* Scanning Laser Effect */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, height: '2px',
                            background: '#00f0ff',
                            boxShadow: '0 0 10px #00f0ff',
                            opacity: 0.8
                        }}
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Text Details */}
                <div style={{ flex: 1 }}>
                    <div style={{ color: 'white', fontWeight: 'bold', fontSize: '13px' }}>{resumeData.personal.name}</div>
                    <div style={{ color: '#00f0ff', fontSize: '9px', marginTop: '2px', letterSpacing: '1px' }}>AI ENGINEER</div>

                    {/* Pseudo-code aesthetic lines */}
                    <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ width: '80%', height: '2px', background: '#333' }}>
                            <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 1, repeat: Infinity }} style={{ height: '100%', background: '#7928ca' }} />
                        </div>
                        <div style={{ width: '60%', height: '2px', background: '#333' }} />
                        <div style={{ width: '40%', height: '2px', background: '#333' }} />
                    </div>
                </div>

            </motion.div>

            {/* Connecting Cable */}
            <div style={{
                position: 'absolute',
                left: '0px',
                top: '-250px',
                width: '250px',
                height: '4px',
                background: '#333',
                transform: 'rotate(-45deg)',
                transformOrigin: 'right center',
            }} />

            {/* Floating Label */}
            {showLabel && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        position: 'absolute',
                        left: '220px',
                        top: '-350px',
                        color: '#7928ca',
                        fontWeight: '900',
                        fontSize: '24px',
                        textShadow: '0 0 20px #7928ca',
                        pointerEvents: 'none',
                        zIndex: 100,
                    }}
                >
                    ABOUT ME
                </motion.div>
            )}
        </motion.div>
    );
};
