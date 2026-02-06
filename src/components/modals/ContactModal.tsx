'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { resumeData } from '@/lib/resumeData';

export const ContactModal: React.FC = () => {
    const { setActiveZone } = usePortfolioStore();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed');

            setStatus('success');
            setFormData({ user_name: '', user_email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
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

                    <form className="contact-form" onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="user_name" style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Name</label>
                            <input
                                type="text" id="user_name" required placeholder="Name / Callsign"
                                value={formData.user_name}
                                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                style={{ background: '#111', border: '1px solid #333', padding: '12px', color: '#fff', borderRadius: '4px', outline: 'none', fontFamily: 'monospace' }}
                                onFocus={(e) => e.target.style.borderColor = '#ff0055'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="user_email" style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
                            <input
                                type="email" id="user_email" required placeholder="email@sector.net"
                                value={formData.user_email}
                                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                                style={{ background: '#111', border: '1px solid #333', padding: '12px', color: '#fff', borderRadius: '4px', outline: 'none', fontFamily: 'monospace' }}
                                onFocus={(e) => e.target.style.borderColor = '#ff0055'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="message" style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
                            <textarea
                                id="message" rows={4} required placeholder="Enter transmission..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                style={{ background: '#111', border: '1px solid #333', padding: '12px', color: '#fff', borderRadius: '4px', outline: 'none', fontFamily: 'monospace', resize: 'none' }}
                                onFocus={(e) => e.target.style.borderColor = '#ff0055'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            style={{
                                marginTop: '10px',
                                background: status === 'success' ? '#00cc00' : '#ff0055',
                                color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold',
                                opacity: status === 'sending' ? 0.7 : 1, transition: 'all 0.3s'
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
