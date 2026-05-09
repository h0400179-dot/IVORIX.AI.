import React from 'react';
import { motion } from 'motion/react';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">Investment Plans</span>
          <h2 className="section-title">Digital Marketing Packages</h2>
          <p className="section-desc">Strategic solutions designed to scale your brand with precision and impact.</p>
        </motion.div>

        <div className="pricing-grid">
          {/* Starter Package */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <div className="package-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Starter</h3>
              <p className="package-desc">Essential digital foundation</p>
            </div>
            <ul className="package-features">
              <li><span className="check">✓</span> Social Media Setup</li>
              <li><span class="check">✓</span> Social Media Management</li>
              <li><span class="check">✓</span> Content Creation</li>
              <li><span class="check">✓</span> Post Scheduling</li>
              <li><span class="check">✓</span> Monthly Performance Report</li>
            </ul>
            <a href="#contact">
              <button className="pricing-cta">Get Started</button>
            </a>
          </motion.div>

          {/* Growth Package */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pricing-card elite-card"
          >
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-card-header">
              <div className="package-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3>Growth</h3>
              <p className="package-desc">Accelerated scaling & reach</p>
            </div>
            <ul className="package-features">
              <li><span className="check">✓</span> Everything in Starter</li>
              <li><span className="check">✓</span> Advanced Content Creation</li>
              <li><span className="check">✓</span> Paid Ads Management</li>
              <li><span className="check">✓</span> Hashtag Strategy</li>
              <li><span className="check">✓</span> Product Branding</li>
              <li><span className="check">✓</span> Analytics Reporting</li>
            </ul>
            <a href="#contact">
              <button className="pricing-cta featured">Start Growing</button>
            </a>
          </motion.div>

          {/* Elite Package */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <div className="package-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3>Elite</h3>
              <p className="package-desc">Full-scale market dominance</p>
            </div>
            <ul className="package-features">
              <li><span className="check">✓</span> SEO Optimization</li>
              <li><span className="check">✓</span> Website Creation</li>
              <li><span className="check">✓</span> Website Maintenance</li>
              <li><span className="check">✓</span> Google Business Optimization</li>
              <li><span className="check">✓</span> Complete Marketing Strategy</li>
              <li><span className="check">✓</span> Conversion Tracking</li>
              <li><span className="check">✓</span> Dedicated Account Manager</li>
            </ul>
            <a href="#contact">
              <button className="pricing-cta glow">Dominate Market</button>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="pricing-note"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p>All plans are fully customizable based on your business needs.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
