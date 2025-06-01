import * as React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <div className="about-content">
            <div className="about-text">
              <h1>About Me</h1>
              <p className="lead">
                I'm a passionate full-stack developer with a love for creating 
                elegant solutions to complex problems.
              </p>
              <p>
                With over 5 years of experience in software development, I specialize 
                in modern web technologies and have a strong background in both 
                frontend and backend development. I believe in writing clean, 
                maintainable code and creating user experiences that make a difference.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying the outdoors with 
                my camera in hand.
              </p>
            </div>
            <div className="about-image">
              <div className="profile-image-placeholder">
                <div className="image-circle">
                  <span>Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PostgreSQL / MongoDB</li>
                <li>REST APIs / GraphQL</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>AWS / Cloud Services</li>
                <li>Jest / Testing</li>
                <li>CI/CD</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2>Education & Certifications</h2>
          <div className="education-items">
            <div className="education-item">
              <h3>Computer Science Degree</h3>
              <p className="institution">University of Technology</p>
              <p className="year">2018 - 2022</p>
              <p>Bachelor's degree in Computer Science with focus on software engineering and web development.</p>
            </div>
            <div className="education-item">
              <h3>AWS Certified Developer</h3>
              <p className="institution">Amazon Web Services</p>
              <p className="year">2023</p>
              <p>Certified in developing and maintaining applications on the AWS platform.</p>
            </div>
          </div>
        </section>

        <section className="interests-section">
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <h4>Photography</h4>
              <p>Capturing moments and exploring creative composition</p>
            </div>
            <div className="interest-item">
              <h4>Open Source</h4>
              <p>Contributing to projects and building community tools</p>
            </div>
            <div className="interest-item">
              <h4>Hiking</h4>
              <p>Exploring nature and staying active outdoors</p>
            </div>
            <div className="interest-item">
              <h4>Tech Blogs</h4>
              <p>Writing about development and sharing knowledge</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;