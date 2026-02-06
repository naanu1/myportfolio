'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export const HelpOverlay: React.FC = () => {
    const { isIntroComplete } = usePortfolioStore();
    const [showHelp, setShowHelp] = React.useState(true);

    React.useEffect(() => {
        if (isIntroComplete) {
            const timer = setTimeout(() => {
                setShowHelp(false);
            }, 5000); // Hide after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [isIntroComplete]);

    if (!isIntroComplete) return null;

    return (
        <AnimatePresence>
            {showHelp && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(10, 10, 10, 0.95)',
                        border: '2px solid #7928ca',
                        borderRadius: '12px',
                        padding: '16px 24px',
                        zIndex: 1000,
                        boxShadow: '0 0 30px rgba(121, 40, 202, 0.5)',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ color: '#00f0ff', fontSize: '14px', marginBottom: '8px', fontWeight: 'bold' }}>
                        🎮 HOVER & CLICK ON THE GLOWING OBJECTS
                    </div>
                    <div style={{ color: '#a0a0a0', fontSize: '12px' }}>
                        Explore the 3D workspace to view your portfolio
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
