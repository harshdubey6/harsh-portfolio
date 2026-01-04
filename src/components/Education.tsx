'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning',
      field: 'Artificial Intelligence and Machine Learning',
      institution: 'G.V Acharya Institute of Engineering & Technology',
      year: 'Oct 22 - June 26',
      grade: 'CGPA: 7.33',
      description: 'Specializing in AI/ML technologies, data structures, algorithms, and modern software development practices'
    }
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Education</p>
            <h2 className="text-4xl font-bold text-slate-50">Foundations</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-surface rounded-2xl p-8 border border-slate-800"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-slate-50">{edu.degree}</h3>
                  <span className="text-sm font-semibold text-amber-200 bg-amber-300/10 border border-amber-200/30 px-3 py-1 rounded-full">{edu.year}</span>
                </div>
                <p className="text-lg text-slate-200 mt-2">{edu.field}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-slate-300 text-sm">
                  <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">{edu.institution}</span>
                  <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">{edu.grade}</span>
                </div>
                <p className="text-slate-300 mt-4 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 