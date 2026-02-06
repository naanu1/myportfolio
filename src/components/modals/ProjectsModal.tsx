'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Zap, Layers } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { resumeData } from '@/lib/resumeData';

export const ProjectsModal: React.FC = () => {
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
            >
                <button
                    className="modal-close"
                    onClick={() => setActiveZone(null)}
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">Key Projects</h2>
                    <p className="modal-subtitle">Innovation & Architecture</p>
                </div>

                <div className="modal-body">
                    <div className="projects-list">
                        {resumeData.projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="project-header">
                                    <div style={{ flex: 1 }}>
                                        <h3 className="project-title">{project.title}</h3>
                                        {project.subtitle && (
                                            <span style={{ fontSize: '12px', color: '#00f0ff', letterSpacing: '1px' }}>
                                                {project.subtitle.toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div className="project-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                aria-label="View on GitHub"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                aria-label="View live project"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="project-description">{project.description}</p>

                                {/* Standard Project Layout */}
                                {!project.isCollection && (
                                    <>
                                        <div className="tech-stack">
                                            <div className="tech-pills">
                                                {project.techStack?.map((tech) => (
                                                    <span key={tech} className="tech-pill">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="features-list">
                                            <ul>
                                                {project.features?.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {project.futureEnhancements && (
                                            <div style={{ marginTop: '15px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#a855f7', marginBottom: '5px' }}>
                                                    <Zap size={14} /> FUTURE ROADMAP:
                                                </div>
                                                <ul style={{ fontSize: '12px', color: '#888', paddingLeft: '20px', margin: 0 }}>
                                                    {project.futureEnhancements.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* Collection Layout (Mini Projects) */}
                                {project.isCollection && project.items && (
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '15px' }}>
                                        {project.items.map((item, i) => (
                                            <a
                                                key={i}
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    padding: '10px',
                                                    borderRadius: '4px',
                                                    textDecoration: 'none',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    transition: 'all 0.2s ease'
                                                }}
                                                className="mini-project-link"
                                            >
                                                <div style={{ color: '#00f0ff', fontSize: '14px', fontWeight: 'bold' }}>{item.name}</div>
                                                <div style={{ color: '#888', fontSize: '11px', marginTop: '3px' }}>{item.stack}</div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
                                                    <ExternalLink size={12} color="#555" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}

                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
