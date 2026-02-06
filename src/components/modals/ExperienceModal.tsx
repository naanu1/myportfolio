'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Briefcase, GraduationCap } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { resumeData } from '@/lib/resumeData';

export const ExperienceModal: React.FC = () => {
    const { setActiveZone } = usePortfolioStore();

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveZone(null)}
        >
            <motion.div
                className="modal-content modal-large"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: '85vh', overflowY: 'auto' }}
            >
                <button
                    className="modal-close"
                    onClick={() => setActiveZone(null)}
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">Career Trajectory</h2>
                    <p className="modal-subtitle">Professional Experience, Internships & Education</p>
                </div>

                <div className="modal-body">
                    {/* WORK EXPERIENCE */}
                    <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', marginBottom: '15px' }}>
                        <Briefcase size={20} color="#00f0ff" />
                        <h3 style={{ color: '#00f0ff', margin: 0 }}>Experience</h3>
                    </div>

                    <div className="timeline">
                        {resumeData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-marker" />
                                <div className="timeline-content">
                                    <div className="exp-header">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <span className="exp-period">{exp.period}</span>
                                    </div>
                                    <div className="exp-company">
                                        {exp.company} • {exp.location}
                                    </div>
                                    <p style={{ color: '#ccc', fontSize: '13px', marginBottom: '10px' }}>{exp.description}</p>
                                    <ul className="achievements-list">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* INTERNSHIPS */}
                    <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '40px', marginBottom: '15px' }}>
                        <Briefcase size={20} color="#ff0055" />
                        <h3 style={{ color: '#ff0055', margin: 0 }}>Internships</h3>
                    </div>

                    <div className="timeline">
                        {resumeData.internships.map((intern, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-marker" style={{ background: '#ff0055', boxShadow: '0 0 10px #ff0055' }} />
                                <div className="timeline-content">
                                    <div className="exp-header">
                                        <h3 className="exp-role">{intern.role}</h3>
                                        <span className="exp-period">{intern.period}</span>
                                    </div>
                                    <div className="exp-company">{intern.company}</div>
                                    <p style={{ color: '#ccc', fontSize: '13px', marginTop: '5px' }}>{intern.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* EDUCATION */}
                    <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '40px', marginBottom: '15px' }}>
                        <GraduationCap size={20} color="#a855f7" />
                        <h3 style={{ color: '#a855f7', margin: 0 }}>Education</h3>
                    </div>

                    <div className="timeline">
                        {resumeData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-marker" style={{ background: '#a855f7', boxShadow: '0 0 10px #a855f7' }} />
                                <div className="timeline-content">
                                    <div className="exp-header">
                                        <h3 className="exp-role">{edu.degree}</h3>
                                        <span className="exp-period">{edu.year}</span>
                                    </div>
                                    <div className="exp-company">{edu.institution}</div>
                                    <div style={{ color: '#00f0ff', fontSize: '12px', marginTop: '4px', fontWeight: 'bold' }}>{edu.score}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};
