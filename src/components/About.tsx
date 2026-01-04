'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container relative mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-sm md:text-base text-purple-400 font-medium">
                About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
                Engineering with <span className="text-slate-500">clarity</span> and <span className="text-slate-500">purpose</span>.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer based in India, passionate about building digital products that just work. I combine technical expertise with a product-first mindset to deliver solutions that solve real problems.
              </p>
              <p>
                My approach is simple: clean code, scalable architecture, and a relentless focus on user experience. Whether it&apos;s a complex backend system or a pixel-perfect frontend, I strive for excellence in every line of code.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-6">How I Operate</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">1</span>
                  <div>
                    <h4 className="text-slate-200 font-medium">User-Centric Design</h4>
                    <p className="text-slate-500 text-sm mt-1">I start with the user. Every technical decision is made with the end-user experience in mind.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">2</span>
                  <div>
                    <h4 className="text-slate-200 font-medium">Clean & Scalable Code</h4>
                    <p className="text-slate-500 text-sm mt-1">I write self-documenting code that is easy to test, maintain, and scale.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 font-bold">3</span>
                  <div>
                    <h4 className="text-slate-200 font-medium">Continuous Improvement</h4>
                    <p className="text-slate-500 text-sm mt-1">I&apos;m always learning. I stay up-to-date with the latest tech to bring the best tools to the job.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 