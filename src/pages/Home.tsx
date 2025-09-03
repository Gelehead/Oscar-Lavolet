import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Parallax Hero Section */}
      <section className="parallax-hero">
        <div 
          className="parallax-background"
          style={{
            transform: `translateY(${scrollY * 0}px)`
          }}
        >
          {/* Animated GIF Background */}
          <div className="gif-background">
            {/* PLACEHOLDER, REPLACE WITH 3D AUTOMATA THAT CYCLES SOMEHOW GIF */}
            <img 
              src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" 
              alt="Animated Background"
              className="background-gif"
            />
            <div className="gif-overlay"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <h1 className="parallax-title">Oscar Lavolet</h1>
        </div>
      </section>

      {/* Content Sections with Parallax Effects */}
      <section className="content-section">
        <div className="content-card">
          <p>
            3rd year Comp.Sci student @ Université de Montreal. 
            I create procedurally generated worlds, trying to push agent modelling generation
            to its limits.
          </p>
          
          <div className="action-buttons">
            <Link to="/projects" className="btn btn-primary">
              <span>Explore My Work</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-parallax">
        <div 
          className="skills-background"
          style={{
            transform: `translateY(${scrollY * 0}px)`
          }}
        >
          <div className="container">
            <h3 className="skills-title">Technologies & Expertise</h3>
            <div className="skills-grid-parallax">
              <div className="skill-card">
                <div className="skill-icon">⚛️</div>
                <h4>Frontend</h4>
                <p>React, TypeScript, Vue.js</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🚀</div>
                <h4>Backend</h4>
                <p>Node.js, Python, PostgreSQL</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">☁️</div>
                <h4>Cloud</h4>
                <p>AWS, Docker, Kubernetes</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <h4>Design</h4>
                <p>UI/UX, Animation, WebGL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-parallax">
        <div 
          className="cta-background"
          style={{
            transform: `translateY(${scrollY * 0}px)`
          }}
        >
          <div className="container">
            <div className="cta-content">
              <h3>Ready to Create Something Amazing?</h3>
              <p>Let's collaborate and bring your vision to life with innovative technology.</p>
              <Link to="/contact" className="btn btn-primary btn-large">
                <span>Start Your Project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;