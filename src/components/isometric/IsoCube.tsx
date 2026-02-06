'use client';

import React from 'react';
import { CubeProps } from '@/types';

export const IsoCube: React.FC<CubeProps> = ({
    x,
    y,
    z,
    width,
    height,
    depth,
    color,
    className = '',
}) => {
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        transformStyle: 'preserve-3d',
        transform: `translate3d(${x}px, ${y}px, ${z}px)`,
    };

    const faceStyle = (transform: string, bgColor: string): React.CSSProperties => ({
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transform,
        backfaceVisibility: 'hidden',
    });

    // Calculate slightly darker shades for depth
    const darken = (hex: string, percent: number) => {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = ((num >> 8) & 0x00ff) - amt;
        const B = (num & 0x0000ff) - amt;
        return `#${(
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)}`;
    };

    const topColor = color;
    const frontColor = darken(color, 15);
    const rightColor = darken(color, 30);

    return (
        <div className={`iso-cube ${className}`} style={containerStyle}>
            {/* Top Face */}
            <div
                className="cube-face cube-top"
                style={faceStyle(
                    `rotateX(90deg) translateZ(${height / 2}px)`,
                    topColor
                )}
            />

            {/* Front Face */}
            <div
                className="cube-face cube-front"
                style={{
                    ...faceStyle(`translateZ(${depth / 2}px)`, frontColor),
                    height: `${height}px`,
                }}
            />

            {/* Right Face */}
            <div
                className="cube-face cube-right"
                style={{
                    ...faceStyle(
                        `rotateY(90deg) translateZ(${width / 2}px)`,
                        rightColor
                    ),
                    width: `${depth}px`,
                    height: `${height}px`,
                }}
            />

            {/* Bottom Face (usually hidden) */}
            <div
                className="cube-face cube-bottom"
                style={faceStyle(
                    `rotateX(-90deg) translateZ(${-height / 2}px)`,
                    darken(color, 50)
                )}
            />

            {/* Back Face */}
            <div
                className="cube-face cube-back"
                style={{
                    ...faceStyle(`translateZ(${-depth / 2}px) rotateY(180deg)`, darken(color, 40)),
                    height: `${height}px`,
                }}
            />

            {/* Left Face */}
            <div
                className="cube-face cube-left"
                style={{
                    ...faceStyle(
                        `rotateY(-90deg) translateZ(${width / 2}px)`,
                        darken(color, 35)
                    ),
                    width: `${depth}px`,
                    height: `${height}px`,
                }}
            />
        </div>
    );
};
