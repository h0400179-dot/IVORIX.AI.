import React from 'react';
import { motion } from 'motion/react';

const Comparison = () => {
  return (
    <section id="comparison" className="comparison-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">The Ivorix Advantage</span>
          <h2 className="section-title">The Future vs. The Past</h2>
          <p className="section-desc">Traditional agencies are stuck in the manual era. We've automated the path to scale.</p>
        </motion.div>

        <div className="comparison-grid">
          {/* Other Agencies */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="comparison-card others"
          >
            <h3>Traditional Agencies</h3>
            <div className="comparison-list">
              <div className="comparison-item">
                <div className="item-icon">✕</div>
                <p>Manual content production taking weeks</p>
              </div>
              <div className="comparison-item">
                <div className="item-icon">✕</div>
                <p>Limited by human working hours</p>
              </div>
              <div className="comparison-item">
                <div className="item-icon">✕</div>
                <p>High overhead costs passed to you</p>
              </div>
              <div className="comparison-item">
                <div className="item-icon">✕</div>
                <p>Inconsistent results based on gut feeling</p>
              </div>
            </div>
          </motion.div>

          {/* Ivorix.Ai */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="comparison-card ivorix"
          >
            <div className="card-glow"></div>
            <h3>Ivorix.Ai Systems</h3>
            <div className="comparison-list">
              <div className="comparison-item">
                <div className="item-icon">✓</div>
                <p>AI-powered rapid content scaling</p>
              </div>
              <div className="comparison-item">
                <div className="item-icon">✓</div>
                <p>24/7 Automated lead generation</p>
              </div>
              <div className="comparison-item">
                <div className="item-icon">✓</div>
                <p>Lean, efficient, and ROI-focused</p>
              </div>
              <div className="comparison-item">
                <div className="item-icon">✓</div>
                <p>Data-driven AI optimization & precision</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="comparison-cta"
        >
          <button className="cta-button">Ready to Scale? Contact Us</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
