document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector('.hero-section');
    const textItems = document.querySelectorAll('.text-item');
    const header = document.querySelector('.header');
    const totalItems = textItems.length;
    
    function handleScroll() {
        // Header scroll effect
        if (window.scrollY > 50) {
            header.style.padding = "1rem 0";
            header.querySelector('.header-container').style.background = "rgba(10, 10, 10, 0.8)";
        } else {
            header.style.padding = "1.5rem 0";
            header.querySelector('.header-container').style.background = "rgba(10, 10, 10, 0.4)";
        }

        const heroRect = heroSection.getBoundingClientRect();
        
        // Calculate scroll distance inside the hero section
        const scrollDistance = -heroRect.top;
        const maxScroll = heroRect.height - window.innerHeight;
        
        let scrollProgress = 0;
        if (scrollDistance <= 0) {
            scrollProgress = 0;
        } else if (scrollDistance >= maxScroll) {
            scrollProgress = 1;
        } else {
            scrollProgress = scrollDistance / maxScroll;
        }
        
        // Determine which text item should be active based on progress
        let currentIndex = Math.floor(scrollProgress * totalItems);
        
        // Keep the last text visible if we reach the end of the scroll
        if (currentIndex >= totalItems) {
            currentIndex = totalItems - 1;
        }
        
        // Update classes
        textItems.forEach((item, index) => {
            if (index < currentIndex) {
                // Past items exit upwards
                item.classList.remove('active');
                item.classList.add('exit');
            } else if (index === currentIndex) {
                // Current item fades in
                item.classList.add('active');
                item.classList.remove('exit');
            } else {
                // Future items stay hidden downwards
                item.classList.remove('active');
                item.classList.remove('exit');
            }
        });
    }

    // Initialize on load
    handleScroll();
    
    // Intersection Observer for reveal animations
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    const visionCards = document.querySelectorAll('.vision-card');
    const galleryTrack = document.getElementById('galleryTrack');
    const visionSection = document.querySelector('.vision-section');
    const totalVisionCards = visionCards.length;

    // Initialize scatter positions
    visionCards.forEach((card, i) => {
        const rx = (Math.random() - 0.5) * 2000;
        const ry = (Math.random() - 0.5) * 1500;
        const rot = (Math.random() - 0.5) * 360;
        card.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px)) rotate(${rot}deg) scale(0.5)`;
        card.style.opacity = '0';
    });

    function handleVisionScroll() {
        const visionRect = visionSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Morph Progress (0 to 1) based on section visibility
        let morphProgress = 0;
        const startVisible = visionRect.top - viewportHeight;
        if (startVisible < 0) {
            morphProgress = Math.min(Math.max(-startVisible / (viewportHeight * 0.8), 0), 1);
        }

        // Shuffle/Rotate progress (starts after morph is mostly done)
        let shuffleProgress = 0;
        if (morphProgress > 0.8) {
            const shuffleStart = visionRect.top - (viewportHeight * 0.2);
            shuffleProgress = Math.max(-shuffleStart / visionRect.height, 0);
        }

        const isMobile = window.innerWidth < 768;
        const radius = isMobile ? 300 : 500;
        const spreadAngle = isMobile ? 120 : 160;
        const startAngle = -90 - (spreadAngle / 2);
        const step = spreadAngle / (totalVisionCards - 1);

        visionCards.forEach((card, i) => {
            const rx_start = (Math.random() - 0.5) * 2000; // This should be deterministic ideally, but for now random is okay or we could store them
            // To make it deterministic, we use the index
            const det_rx = Math.sin(i * 123.45) * 1000;
            const det_ry = Math.cos(i * 123.45) * 800;
            const det_rot = Math.sin(i * 543.21) * 180;

            // Arc Position
            const boundedRotation = -shuffleProgress * (spreadAngle * 0.5);
            const currentAngle = startAngle + (i * step) + boundedRotation;
            const rad = (currentAngle * Math.PI) / 180;
            
            const arcX = Math.cos(rad) * radius;
            const arcY = Math.sin(rad) * radius + (radius * 0.8);
            const arcRot = currentAngle + 90;
            const arcScale = isMobile ? 1.0 : 1.5;

            // Interpolate
            const x = det_rx * (1 - morphProgress) + arcX * morphProgress;
            const y = det_ry * (1 - morphProgress) + arcY * morphProgress;
            const rot = det_rot * (1 - morphProgress) + arcRot * morphProgress;
            const scale = 0.5 * (1 - morphProgress) + arcScale * morphProgress;
            const opacity = morphProgress;

            card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rot}deg) scale(${scale})`;
            card.style.opacity = opacity;
        });
    }

    // Restore scroll and resize listeners for hero text transitions
    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            handleScroll();
            handleVisionScroll();
        });
    }, { passive: true });
    
    window.addEventListener('resize', () => {
        window.requestAnimationFrame(() => {
            handleScroll();
            handleVisionScroll();
        });
    }, { passive: true });

    // Mobile Menu Logic
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
    });

    // Contact Form Logic
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const service = contactForm.querySelector('select').value;
            const message = contactForm.querySelector('textarea').value;

            // Show success overlay
            const overlay = document.querySelector('.success-overlay');
            if (overlay) overlay.classList.add('active');

            // Construct mailto link
            const subject = `New Project Inquiry from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
            const mailtoLink = `mailto:ivorix.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

            // Redirect after a short delay for feedback
            setTimeout(() => {
                window.location.href = mailtoLink;
                
                // Reset form after a longer delay (when user comes back)
                setTimeout(() => {
                    if (overlay) overlay.classList.remove('active');
                    submitBtn.innerText = originalText;
                    submitBtn.style.opacity = '1';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Testimonials Logic
    const testimonials = [
        {
            text: "The social media strategy they implemented doubled our engagement in just 3 months. Our brand feels more alive and connected than ever before.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Briana Patton",
            role: "Founder, Luxe Decor",
        },
        {
            text: "Their SEO expertise is unmatched. We moved from page 4 to the top 3 spots for our most competitive keywords. Lead flow has never been better.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Bilal Ahmed",
            role: "Marketing Director, TechFlow",
        },
        {
            text: "Our new website is a masterpiece. It's fast, beautiful, and most importantly, it converts visitors into customers at a much higher rate.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Saman Malik",
            role: "E-commerce Manager",
        },
        {
            text: "The branding work they did for us perfectly captures our vision. It's professional, modern, and has given us a huge edge over our competitors.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Omar Raza",
            role: "CEO, Urban Edge",
        },
        {
            text: "The ROI on our Meta ads has been incredible since they took over. They truly understand how to target the right audience with the right message.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Zainab Hussain",
            role: "Project Manager, GrowthLabs",
        },
        {
            text: "Their content creation team is top-notch. The reels and visuals they produce for us are consistently viral-worthy and high-quality.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Aliza Khan",
            role: "Creative Director",
        },
        {
            text: "Professional service and excellent communication throughout. They didn't just provide a service; they became a growth partner for our business.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Farhan Siddiqui",
            role: "Business Owner",
        },
        {
            text: "We saw an immediate boost in high-quality leads after their Google Ads campaign launched. The transparency in reporting is a breath of fresh air.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Sana Sheikh",
            role: "Sales Lead, InnovateCo",
        },
        {
            text: "Transformative results for our online presence. They handled everything from branding to web development with absolute precision and care.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
            name: "Hassan Ali",
            role: "Managing Director",
        },
    ];

    function createTestimonialCard(data) {
        return `
            <div class="testimonial-card">
                <p class="testimonial-text">"${data.text}"</p>
                <div class="testimonial-author">
                    <img src="${data.image}" alt="${data.name}" class="author-image">
                    <div class="author-info">
                        <h4>${data.name}</h4>
                        <p>${data.role}</p>
                    </div>
                </div>
            </div>
        `;
    }

    const firstColumnData = testimonials.slice(0, 3);
    const secondColumnData = testimonials.slice(3, 6);
    const thirdColumnData = testimonials.slice(6, 9);

    function populateColumn(colId, data, duration) {
        const col = document.getElementById(colId);
        if (!col) return;

        const content = `
            <div class="scrolling-content" style="--scroll-duration: ${duration}s">
                ${data.map(createTestimonialCard).join('')}
                ${data.map(createTestimonialCard).join('')}
            </div>
        `;
        col.innerHTML = content;
    }

    populateColumn('col-1', firstColumnData, 15);
    populateColumn('col-2', secondColumnData, 19);
    populateColumn('col-3', thirdColumnData, 17);
});
