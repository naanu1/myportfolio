'use client';

import React, { useEffect, useRef } from 'react';

export const BackgroundRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops: number[] = new Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(5, 2, 16, 0.1)'; // Trail effect (fades previous frame)
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = '12px monospace';

            for (let i = 0; i < drops.length; i++) {
                // Random characters
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);

                // Color variation: Mostly faint purple/blue
                ctx.fillStyle = Math.random() > 0.95 ? '#00f0ff' : 'rgba(121, 40, 202, 0.3)';

                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.4, pointerEvents: 'none' }} />;
};
