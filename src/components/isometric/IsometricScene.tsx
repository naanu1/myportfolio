'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/store/usePortfolioStore';

interface IsometricSceneProps {
    children: React.ReactNode;
}

export const IsometricScene: React.FC<IsometricSceneProps> = ({ children }) => {
    const { activeZone } = usePortfolioStore();
    const [scale, setScale] = useState(1.3); // Increased base scale for IMPACT
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handle Responsive Scaling
    useEffect(() => {
        const handleResize = () => {
            // Logic: Fill the screen aggressively
            const widthRatio = window.innerWidth / 1200; // Lower denominator = bigger items
            const heightRatio = window.innerHeight / 900;

            let newScale = Math.min(widthRatio, heightRatio);

            // On mobile, zoom drastically to fill screen
            if (window.innerWidth < 768) {
                newScale = newScale * 1.5;
            } else {
                // Desktop: Boost size
                newScale = Math.min(newScale * 1.3, 1.8);
            }

            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 8; // Increased parallax
            const y = (e.clientY / window.innerHeight - 0.5) * 8;
            setMousePosition({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Standard Frontal View (Straight)
    const defaultView = {
        scale: scale, // Reduced scale slightly
        rotateX: 15, // Slightly less tilt for "Front-on" power feel
        rotateY: 0,
        rotateZ: 0,
        x: 0,
        y: 80, // PERMANENT FIX: Shifted down 100px so top doesn't clip
    };

    // Zoomed Views 
    const getFocusState = () => {
        switch (activeZone) {
            case 'skills':
                return { scale: scale * 1.8, x: 250, y: 200, rotateX: 0 };
            case 'about':
                return { scale: scale * 1.8, x: -250, y: 200, rotateX: 0 };
            case 'projects':
                return { scale: scale * 2.2, x: 0, y: 150, rotateX: 0 };
            case 'experience':
                return { scale: scale * 2.2, x: -100, y: -50, rotateX: 5 };
            case 'contact':
                return { scale: scale * 2.2, x: 100, y: -50, rotateX: 5 };
            default:
                return defaultView;
        }
    };

    const currentView = activeZone ? getFocusState() : defaultView;

    return (
        <div
            className="scene-container"
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                perspective: '2000px',
                background: '#050210', // Deep Midnight Blue/Indigo
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative' // For absolute children
            }}
        >
            {/* 1. Global Gradient - Midnight Atmosphere */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 50%, #1a103c 0%, #050210 100%)',
                    zIndex: 0,
                }}
            />

            {/* 2. Abstract Background Elements (Floating Blobs) to fill space */}
            <motion.div
                animate={{
                    x: mousePosition.x * -2,
                    y: mousePosition.y * -2,
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ opacity: { duration: 4, repeat: Infinity } }}
                style={{
                    position: 'absolute', top: '10%', left: '10%',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(121,40,202,0.15) 0%, transparent 70%)',
                    zIndex: 0, pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ x: mousePosition.x * -3, y: mousePosition.y * -3 }}
                style={{
                    position: 'absolute', bottom: '10%', right: '10%',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%)',
                    zIndex: 0, pointerEvents: 'none'
                }}
            />

            {/* 3. The World Itself */}
            <motion.div
                className="isometric-world"
                initial={false}
                animate={{
                    scale: currentView.scale,
                    rotateX: currentView.rotateX,
                    rotateY: activeZone ? 0 : mousePosition.x,
                    rotateZ: 0,
                    x: currentView.x,
                    y: currentView.y,
                }}
                transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 70, // Snappier
                    damping: 25
                }}
                style={{
                    transformStyle: 'preserve-3d',
                    width: '0px',
                    height: '0px',
                    position: 'relative',
                    zIndex: 1,
                    // Global "Bloom" effect can be simulated with drop-shadow filter on parent
                    filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))'
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
