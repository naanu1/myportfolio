'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { resumeData } from '@/lib/resumeData';

export const AboutModal: React.FC = () => {
    const { setActiveZone } = usePortfolioStore();
    const { personal } = resumeData;

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
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={() => setActiveZone(null)}
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">{personal.name}</h2>
                    <p className="modal-subtitle">{personal.title}</p>
                </div>

                <div className="modal-body">
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Location:</span>
                            <span className="info-value">{personal.location}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Email:</span>
                            <a href={`mailto:${personal.email}`} className="info-link">
                                {personal.email}
                            </a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Phone:</span>
                            <span className="info-value">{personal.phone}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">LinkedIn:</span>
                            <a
                                href={`https://${personal.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info-link"
                            >
                                {personal.linkedin}
                            </a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">GitHub:</span>
                            <a
                                href={`https://${personal.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info-link"
                            >
                                {personal.github}
                            </a>
                        </div>
                    </div>

                    <div className="summary-section">
                        <h3 className="section-title">Professional Summary</h3>
                        <p className="summary-text">{personal.summary}</p>
                    </div>

                    <div className="languages-section">
                        <h3 className="section-title">Languages</h3>
                        <div className="language-pills">
                            {resumeData.languages.map((lang) => (
                                <span key={lang} className="pill">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
