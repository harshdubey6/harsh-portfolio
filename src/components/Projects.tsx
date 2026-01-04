'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiPrisma, SiSupabase, SiSocketdotio, SiCloudinary } from 'react-icons/si';
import { projects } from '@/data/projects';
import { IconType } from 'react-icons';

// Map tech names to their icons
const techIcons: Record<string, { icon: IconType; color: string }> = {
  'React': { icon: FaReact, color: 'text-cyan-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'TypeScript': { icon: SiTypescript, color: 'text-blue-400' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-cyan-300' },
  'Node.js': { icon: FaNodeJs, color: 'text-green-500' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-sky-400' },
  'Prisma': { icon: SiPrisma, color: 'text-teal-300' },
  'Supabase': { icon: SiSupabase, color: 'text-emerald-400' },
  'Socket.io': { icon: SiSocketdotio, color: 'text-white' },
  'Cloudinary': { icon: SiCloudinary, color: 'text-blue-400' },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-sm md:text-base text-blue-400 font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A diverse collection of projects showcasing my journey and technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col h-full"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-1 leading-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                      {project.role}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.slice(0, 5).map((tech) => {
                    const techInfo = techIcons[tech];
                    if (techInfo) {
                      const Icon = techInfo.icon;
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded border border-slate-700/50"
                          title={tech}
                        >
                          <Icon className={`w-4 h-4 ${techInfo.color}`} />
                          <span className="text-slate-300 text-xs">{tech}</span>
                        </div>
                      );
                    }
                    return (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
