'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Software Intern',
        company: 'Arkaana.ai',
        period: 'January 2026 - Present',
        description: 'Contributing to the development of AI-driven solutions, focusing on backend services and API integrations.',
        skills: ['Next.js', 'FastAPI', 'SQL'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-sm md:text-base text-amber-400 font-medium mb-4">
                        Career Path
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot on timeline */}
                            <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-slate-950 z-10 hidden md:block" />

                            {/* Content */}
                            <div className="w-full md:w-[calc(50%-2rem)] bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex justify-between items-center flex-wrap gap-2">
                                        <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-amber-400 font-medium">{exp.company}</p>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
