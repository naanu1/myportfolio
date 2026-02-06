'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import emailjs from '@emailjs/browser';
import { resumeData } from '@/lib/resumeData';

export const ContactModal: React.FC = () => {
    const { setActiveZone } = usePortfolioStore();
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then(() => {
                setStatus('success');
                form.current?.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, () => {
                setStatus('error');
            });
    };

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveZone(null)}
        >
            <motion.div
                className="modal-content"
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '450px', background: '#09090b', border: '1px solid #333' }}
            >
                <button className="modal-close" onClick={() => setActiveZone(null)}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title" style={{ color: '#ff0055' }}>CONTACT</h2>
                    <p className="modal-subtitle">Send message directly to my inbox</p>
                </div>

                <div className="modal-body">
                    {/* Status Feedback */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{ background: 'rgba(0, 255, 0, 0.1)', border: '1px solid #00ff00', padding: '10px', borderRadius: '4px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}
                            >
                                <CheckCircle color="#00ff00" size={18} />
                                <span style={{ color: '#00ff00', fontSize: '13px' }}>Message sent Successfully</span>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{ background: 'rgba(255, 0, 0, 0.1)', border: '1px solid #ff0000', padding: '10px', borderRadius: '4px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}
                            >
                                <AlertTriangle color="#ff0000" size={18} />
                                <span style={{ color: '#ff0000', fontSize: '13px' }}>Message Failed Please Try Again Later</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form className="contact-form" ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                        {/* Name Input */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="user_name" style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Name</label>
                            <input
                                type="text" id="user_name" name="user_name" required placeholder="Name / Callsign"
                                style={{
                                    background: '#111',
                                    border: '1px solid #333',
                                    padding: '12px',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    fontFamily: 'monospace'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#ff0055'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>

                        {/* Email Input */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="user_email" style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
                            <input
                                type="email" id="user_email" name="user_email" required placeholder="email@sector.net"
                                style={{
                                    background: '#111',
                                    border: '1px solid #333',
                                    padding: '12px',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    fontFamily: 'monospace'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#ff0055'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>

                        {/* Message Input */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="message" style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
                            <textarea
                                id="message" name="message" rows={4} required placeholder="Enter transmission..."
                                style={{
                                    background: '#111',
                                    border: '1px solid #333',
                                    padding: '12px',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    fontFamily: 'monospace',
                                    resize: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#ff0055'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>

                        {/* Direct Contact Info Small */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#555', marginTop: '5px' }}>
                            <span>DIRECT: {resumeData.personal.email}</span>
                            <span>LOC: {resumeData.personal.location}</span>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            style={{
                                marginTop: '10px',
                                background: status === 'success' ? '#00cc00' : '#ff0055',
                                color: '#fff',
                                border: 'none',
                                padding: '12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontWeight: 'bold',
                                opacity: status === 'sending' ? 0.7 : 1,
                                transition: 'all 0.3s'
                            }}
                        >
                            {status === 'sending' ? <Loader2 className="spin" size={18} /> : (status === 'success' ? <CheckCircle size={18} /> : <Send size={18} />)}
                            {status === 'sending' ? 'SENDING...' : (status === 'success' ? 'SENT' : 'SEND')}
                        </button>

                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};
