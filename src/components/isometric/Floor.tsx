'use client';

import React from 'react';

export const Floor: React.FC = () => {
    return (
        <div
            className="floor-container"
            style={{
                position: 'absolute',
                width: '2000px',
                height: '2000px',
                left: '-1000px',
                top: '-1000px',
                transform: 'rotateX(90deg) translateZ(-100px)',
                transformStyle: 'preserve-3d',
                pointerEvents: 'none', // Allow clicking through the floor
            }}
        >
            {/* Main Grid Lines */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
            linear-gradient(90deg, rgba(121, 40, 202, 0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(121, 40, 202, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px',
                    boxShadow: 'inset 0 0 500px #050505', // Fade out towards edges
                }}
            />

            {/* Secondary Finer Grid */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Central Glow Platform */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(121, 40, 202, 0.2) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
            />
        </div>
    );
};
