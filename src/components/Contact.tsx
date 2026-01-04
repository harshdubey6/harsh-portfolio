'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message: 'Message sent! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-blue-400">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-1">Email</h3>
                <a href="mailto:dubeyharsh320@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  dubeyharsh320@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-blue-400">
                <FaLinkedin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/harshdubey6/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-blue-400">
                <FaTwitter size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-1">Twitter</h3>
                <a href="https://x.com/harshdubeydev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Follow on Twitter
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Send Message
              </button>

              {status.message && (
                <div
                  className={`mt-4 p-3 rounded-lg text-sm ${status.type === 'success'
                      ? 'bg-green-500/10 text-green-400'
                      : status.type === 'error'
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-blue-500/10 text-blue-400'
                    }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 