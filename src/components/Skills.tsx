'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiPrisma, SiGraphql, SiRedux, SiFramer, SiVercel, SiExpress } from 'react-icons/si';

const skills = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-slate-300' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-400' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-teal-300' },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
    { name: 'AWS', icon: FaAws, color: 'text-amber-400' },
    { name: 'Vercel', icon: SiVercel, color: 'text-white' },
    { name: 'Framer', icon: SiFramer, color: 'text-pink-400' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-slate-950">
            <div className="container relative mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-sm text-purple-400 font-medium mb-4">
                        Tech Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Technologies I Work With
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-5"
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                whileHover={{ y: -5, scale: 1.08 }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all w-[5.5rem] md:w-28 cursor-default"
                            >
                                <Icon className={`w-8 h-8 md:w-10 md:h-10 ${skill.color}`} />
                                <span className="text-slate-400 text-xs md:text-sm font-medium text-center">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
