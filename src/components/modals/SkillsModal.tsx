'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { resumeData } from '@/lib/resumeData';

export const SkillsModal: React.FC = () => {
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
                    <h2 className="modal-title">Technical Skills</h2>
                    <p className="modal-subtitle">System Modules & Capabilities</p>
                </div>

                <div className="modal-body">
                    <div className="skills-grid">
                        {resumeData.skills.map((skillCategory, index) => (
                            <motion.div
                                key={skillCategory.category}
                                className="skill-category"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="category-title">{skillCategory.category}</h3>
                                <div className="skill-items">
                                    {skillCategory.items.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="skill-pill"
                                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px #7928ca' }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
