import React from 'react';
import { motion } from 'motion/react';

const solutions = [
  {
    title: "AI Content Creation",
    desc: "Create viral-ready AI videos, branded visuals, reels, and short-form content designed for engagement and conversions.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    title: "Paid Ads & Scaling",
    desc: "High-converting Meta and Google ad campaigns focused on lead generation, ROAS, and business growth.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    )
  },
  {
    title: "Social Media Management",
    desc: "Complete social media handling including content strategy, posting, optimization, audience growth, and branding.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A3 3 0 0 0 15 5a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3z"></path>
        <path d="M10 8a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"></path>
        <circle cx="12" cy="18" r="3"></circle>
      </svg>
    )
  },
  {
    title: "AI Automation Systems",
    desc: "Automate DMs, lead capture, customer support, follow-ups, and workflows using AI-powered systems.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    title: "Branding & Web Design",
    desc: "Modern brand identity, logo creation, landing pages, and premium websites built for credibility and conversions.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  {
    title: "SEO Services",
    desc: "Boost your online visibility with powerful SEO strategies designed to improve rankings, increase organic traffic, and generate high-quality leads for your business.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  }
];

const Solutions = () => {
  return (
    <section id="projects" className="solutions-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">Our Expertise</span>
          <h2 className="section-title">Future-Proof Solutions</h2>
          <p className="section-desc">We leverage cutting-edge AI and automation to scale your business beyond limits.</p>
        </motion.div>
        
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="solution-card"
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
