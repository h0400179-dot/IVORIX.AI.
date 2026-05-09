// @ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Facebook, Instagram, Send, Check } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('success');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const subject = `New Project Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
    const mailtoLink = `mailto:ivorix.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      
      // Reset after a delay
      setTimeout(() => {
        setStatus('idle');
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="section-header text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="subtitle block text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Let's Build The Future
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Ready to scale your brand with AI? Drop us a message and let's start growing.
          </motion.div>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="contact-info flex flex-col gap-10">
            <motion.a 
              href="mailto:ivorix.ai@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="info-card flex items-center gap-6 bg-card p-8 rounded-3xl border border-border hover:border-primary transition-all duration-300 group cursor-pointer no-underline text-foreground"
            >
              <div className="info-icon w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h4 className="text-xl font-bold text-foreground mb-1 text-white">Email Us</h4>
                <p className="text-muted-foreground">ivorix.ai@gmail.com</p>
              </div>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="info-card flex items-center gap-6 bg-card p-8 rounded-3xl border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="info-icon w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h4 className="text-xl font-bold text-foreground mb-1 text-white">Location</h4>
                <p className="text-muted-foreground">Chandigarh, India</p>
              </div>
            </motion.div>

            <div className="social-links flex gap-5 mt-4">
              <motion.a 
                href="https://www.facebook.com/IvorixAi" 
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="social-link w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-[#1877f2] hover:border-[#1877f2] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/ivorix_ai/" 
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="social-link w-12 h-12 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] hover:border-transparent hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container bg-card p-10 md:p-14 rounded-[40px] border border-border backdrop-blur-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div 
                  key="success-overlay"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="absolute inset-0 bg-background z-20 flex flex-col items-center justify-center text-center p-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6 relative"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary/20 rounded-full"
                    />
                    <Check size={48} strokeWidth={3} />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold mb-2 text-white"
                  >
                    Message Ready!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground"
                  >
                    Redirecting you to your email client...
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-border p-5 rounded-2xl text-white focus:outline-none focus:border-primary transition-all duration-300"
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-border p-5 rounded-2xl text-white focus:outline-none focus:border-primary transition-all duration-300"
                  required 
                />
              </div>
              <div className="form-group">
                <select 
                  name="service"
                  className="w-full bg-white/5 border border-border p-5 rounded-2xl text-white focus:outline-none focus:border-primary transition-all duration-300 appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0a0a0a] text-white">Select Service</option>
                  <option value="social-media" className="bg-[#0a0a0a] text-white">Social Media Marketing</option>
                  <option value="seo" className="bg-[#0a0a0a] text-white">SEO Optimization</option>
                  <option value="web-dev" className="bg-[#0a0a0a] text-white">Website Development</option>
                  <option value="branding" className="bg-[#0a0a0a] text-white">Branding</option>
                  <option value="ads" className="bg-[#0a0a0a] text-white">Paid Advertising</option>
                  <option value="content" className="bg-[#0a0a0a] text-white">Content Creation</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Tell us about your project" 
                  rows={5} 
                  className="w-full bg-white/5 border border-border p-5 rounded-2xl text-white focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="cta-button w-full bg-gradient-to-r from-primary to-orange-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-3"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
