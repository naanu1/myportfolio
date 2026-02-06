'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export const IntroSequence: React.FC = () => {
    const { completeIntro } = usePortfolioStore();
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Total intro time: 2.2s
        const timer = setTimeout(() => {
            setComplete(true);
            setTimeout(completeIntro, 800); // Wait for exit animation
        }, 2200);

        return () => clearTimeout(timer);
    }, [completeIntro]);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    className="intro-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: '#050505',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'monospace'
                    }}
                >
                    {/* Main Loading Container */}
                    <div style={{ position: 'relative', width: '300px' }}>

                        {/* 1. The Bar Frame */}
                        <div style={{
                            width: '100%',
                            height: '4px',
                            background: '#1a1a1a',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                        }}>
                            {/* 2. The FILL animation */}
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #7928ca, #00f0ff)',
                                    boxShadow: '0 0 15px #00f0ff'
                                }}
                            />
                        </div>

                        {/* 3. Text Below */}
                        <div style={{
                            marginTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#555',
                            fontSize: '10px',
                            letterSpacing: '2px',
                            fontWeight: 'bold'
                        }}>
                            <span>INITIALIZING SYSTEM...</span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                100%
                            </motion.span>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
