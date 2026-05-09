import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

const visionCardsData = [
  "/ai-gaining-humanoid-form-inside-cyberspace-waving-hand-saluting-programmer.jpg",
  "/anthropomorphic-robot-that-performs-regular-human-job (1).jpg",
  "/anthropomorphic-robot-that-performs-regular-human-job (2).jpg",
  "/anthropomorphic-robot-that-performs-regular-human-job.jpg",
  "/business-people-meeting_53876-15179.avif",
  "/businessman-holding-mobile-phone-using-digital-tablet_107420-65913.jpg",
  "/happy-entrepreneur-analyzing-business-chart-web-conference-home_637285-12739.jpg",
  "/human-robot-hands-touching-digital-space_23-2151966698.jpg",
  "/industrial-designers-working-3d-model.jpg",
  "/man-robot-working-together-high-tech-office.jpg",
  "/man-woman-working-together-media-field-with-virtual-reality-headset-headphones.jpg",
  "/medium-shot-colleagues-debating-colors_23-2149345246.jpg",
  "/office-workers-using-finance-graphs_23-2150408665.jpg",
  "/person-wearing-futuristic-high-tech-virtual-reality-glasses.jpg",
  "/person-with-futuristic-metaverse-avatar-mask.jpg",
  "/portrait-person-ai-robot.jpg",
  "/side-view-smiley-man-looking-tablet_23-2148230738.avif",
  "/team-working-together-project_23-2149273739.jpg",
  "/two-robots-having-meeting-futuristic-office-setting_23-2151966728.jpg",
  "/workaholics-businesspeople-brainstorming-financial-company-ideas_482257-10539.jpg",
];

const Vision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [morphProgress, setMorphProgress] = useState(0);
  const [shuffleProgress, setShuffleProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const visionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      let morph = 0;
      const startVisible = visionRect.top - viewportHeight;
      if (startVisible < 0) {
        morph = Math.min(Math.max(-startVisible / (viewportHeight * 0.8), 0), 1);
      }
      setMorphProgress(morph);

      let shuffle = 0;
      if (morph > 0.8) {
        const shuffleStart = visionRect.top - (viewportHeight * 0.2);
        shuffle = Math.max(-shuffleStart / visionRect.height, 0);
      }
      setShuffleProgress(shuffle);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCards = visionCardsData.length;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const radius = isMobile ? 300 : 500;
  const spreadAngle = isMobile ? 120 : 160;
  const startAngle = -90 - (spreadAngle / 2);
  const step = spreadAngle / (totalCards - 1);

  return (
    <section id="vision" className="vision-section" ref={sectionRef}>
      <div className="vision-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="vision-content"
        >
          <span className="subtitle">Our Vision</span>
          <h2 className="section-title">The Future Is Built On AI</h2>
        </motion.div>
        
        <div className="gallery-container">
          <div className="gallery-track">
            {visionCardsData.map((img, i) => {
              const det_rx = Math.sin(i * 123.45) * 1000;
              const det_ry = Math.cos(i * 123.45) * 800;
              const det_rot = Math.sin(i * 543.21) * 180;

              const boundedRotation = -shuffleProgress * (spreadAngle * 0.5);
              const currentAngle = startAngle + (i * step) + boundedRotation;
              const rad = (currentAngle * Math.PI) / 180;
              
              const arcX = Math.cos(rad) * radius;
              const arcY = Math.sin(rad) * radius + (radius * 0.8);
              const arcRot = currentAngle + 90;
              const arcScale = isMobile ? 1.0 : 1.5;

              const x = det_rx * (1 - morphProgress) + arcX * morphProgress;
              const y = det_ry * (1 - morphProgress) + arcY * morphProgress;
              const rot = det_rot * (1 - morphProgress) + arcRot * morphProgress;
              const scale = 0.5 * (1 - morphProgress) + arcScale * morphProgress;
              const opacity = morphProgress;

              return (
                <div 
                  key={i} 
                  className="vision-card"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rot}deg) scale(${scale})`,
                    opacity: opacity,
                  }}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={img} alt={`Vision ${i}`} />
                    </div>
                    <div className="card-back">
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
