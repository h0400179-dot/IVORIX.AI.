import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textItems = [
    { type: 'h1', text: 'Your Brand Is Being Ignored' },
    { type: 'h2', text: "Because Content Alone Doesn't Convert" },
    { type: 'h2', text: 'We Build Systems That Sell For You' },
    { type: 'h2', text: 'AI + Ads + Automation = Growth' },
    { type: 'h2', text: 'Ready To Scale?', isFinal: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      const scrollDistance = -heroRect.top;
      const maxScroll = heroRect.height - window.innerHeight;
      
      let progress = 0;
      if (scrollDistance > 0 && scrollDistance < maxScroll) {
        progress = scrollDistance / maxScroll;
      } else if (scrollDistance >= maxScroll) {
        progress = 1;
      }

      let index = Math.floor(progress * textItems.length);
      if (index >= textItems.length) index = textItems.length - 1;
      setCurrentIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [textItems.length]);

  return (
    <div id="home" className="hero-section" ref={heroRef}>
      <div className="sticky-container">
        <div className="spline-container">
          <iframe 
            src="https://my.spline.design/nexbotrobotcharacterconcept-a2Plx6E6X4JondDk7wNMrSje/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="Spline 3D Model"
          ></iframe>
          <div className="spline-overlay"></div>
        </div>
        
        <div className="text-container">
          {textItems.map((item, index) => {
            const isActive = index === currentIndex;
            const isExit = index < currentIndex;
            const className = `text-item ${isActive ? 'active' : ''} ${isExit ? 'exit' : ''} ${item.isFinal ? 'final-item' : ''}`;
            
            return (
              <div key={index} className={className}>
                {item.type === 'h1' ? <h1>{item.text}</h1> : <h2>{item.text}</h2>}
                {item.isFinal && <button className="cta-button">Get Started</button>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
