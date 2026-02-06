'use client';

import React, { useState, useEffect } from 'react';
import { resumeData } from '@/lib/resumeData';
// We need to ensure globals.css has the media query for .hud-stats-right

export const HUDOverlay: React.FC = () => {
    const [time, setTime] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50, padding: '30px' }}>

            {/* Top Left: Identity Block */}
            <div style={{ position: 'absolute', top: '30px', left: '30px' }}>
                <div style={{
                    borderLeft: '4px solid #00f0ff',
                    paddingLeft: '15px',
                    fontFamily: 'monospace',
                    color: '#00f0ff',
                    textShadow: '0 0 10px #00f0ff'
                }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
                        {resumeData.personal.name.toUpperCase()}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', letterSpacing: '4px' }}>
                        {resumeData.personal.title.toUpperCase()}
                    </div>
                </div>
            </div>

            {/* Top Right: Live Environment Stats - HIDDEN ON MOBILE */}
            {!isMobile && (
                <div style={{ position: 'absolute', top: '30px', right: '30px', textAlign: 'right' }}>
                    <div style={{
                        borderRight: '4px solid #ff0055',
                        paddingRight: '15px',
                        fontFamily: 'monospace',
                        color: '#fff'
                    }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{time}</div>
                        <div style={{ fontSize: '12px', color: '#ff0055' }}>LOC: {resumeData.personal.location.toUpperCase()}</div>
                        <div style={{ fontSize: '10px', color: '#888', marginTop: '5px' }}>
                            LAT: 12.9716° N <br /> LONG: 77.5946° E
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Floating Stats - Simplify on mobile */}
            <div style={{
                position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: isMobile ? '10px' : '40px',
                fontFamily: 'monospace', fontSize: isMobile ? '10px' : '12px', color: 'rgba(255,255,255,0.4)',
                borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px',
                width: isMobile ? '90%' : 'auto', justifyContent: 'center'
            }}>
                <div style={{ display: isMobile ? 'none' : 'block' }}>EMAIL: {resumeData.personal.email}</div>
                <div>STATUS: OPEN FOR WORK</div>
                <div>v2.0.4</div>
            </div>

            {/* Aesthetic Corner Brackets */}
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', width: '20px', height: '20px', borderLeft: '2px solid #fff', borderBottom: '2px solid #fff', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: '30px', right: '30px', width: '20px', height: '20px', borderRight: '2px solid #fff', borderBottom: '2px solid #fff', opacity: 0.3 }} />

            {/* Vignette & Scanlines */}
            <div style={{
                position: 'fixed', inset: 0,
                background: `
                    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
                `,
                backgroundSize: '100% 2px, 3px 100%',
                pointerEvents: 'none',
                opacity: 0.1
            }} />

        </div>
    )
}
