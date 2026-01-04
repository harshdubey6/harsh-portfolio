'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >


          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6">
            Building digital products with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              purpose
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I&apos;m <span className="text-slate-200 font-medium">Harsh Dubey</span>, a full-stack engineer focused on building clean, accessible, and performant web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1J2ndGl-KhZbry8t51vJSKSLC-W4Yr4IX/view?usp=sharing"
              target="_blank"
              className="group px-8 py-3 rounded-full bg-slate-100 text-slate-900 font-semibold hover:bg-white transition-all flex items-center gap-2"
            >
              <FaFileAlt />
              View Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white transition-all font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-6 text-slate-500">
            <a href="https://github.com/harshdubey6" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harshdubey6/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/harshdubeydev" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 