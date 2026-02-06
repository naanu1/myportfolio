'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        background: '#050505',
                        color: '#ff0055',
                        fontFamily: 'Orbitron, monospace',
                        padding: '20px',
                        textAlign: 'center',
                    }}
                >
                    <h1 style={{ fontSize: '48px', marginBottom: '20px', textShadow: '0 0 20px #ff0055' }}>
                        System Error
                    </h1>
                    <p style={{ fontSize: '18px', marginBottom: '30px', color: '#a0a0a0' }}>
                        An unexpected error occurred in the workspace.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: 'linear-gradient(135deg, #7928ca, #00f0ff)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '14px 28px',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            cursor: 'pointer',
                            boxShadow: '0 0 30px rgba(121, 40, 202, 0.6)',
                        }}
                    >
                        Restart System
                    </button>
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <pre
                            style={{
                                marginTop: '30px',
                                padding: '20px',
                                background: '#0a0a0a',
                                border: '1px solid #ff0055',
                                borderRadius: '8px',
                                fontSize: '12px',
                                textAlign: 'left',
                                maxWidth: '800px',
                                overflow: 'auto',
                            }}
                        >
                            {this.state.error.toString()}
                        </pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
