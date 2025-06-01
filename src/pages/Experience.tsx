import * as React from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Montreal, QC",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with product team to define technical requirements"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "Montreal, QC",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client web applications",
        "Built RESTful APIs and integrated third-party services",
        "Optimized database queries improving performance by 40%",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Studios",
      location: "Montreal, QC",
      period: "2019 - 2020",
      description: [
        "Built responsive web interfaces using modern JavaScript frameworks",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Wrote unit tests and maintained documentation",
        "Supported legacy systems and performed bug fixes"
      ],
      technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "jQuery", "MySQL"]
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Creative Agency",
      location: "Montreal, QC",
      period: "2018 - 2019",
      description: [
        "Assisted in developing client websites and landing pages",
        "Learned version control with Git and team collaboration",
        "Gained experience with content management systems",
        "Supported QA testing and user acceptance testing"
      ],
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "Git"]
    }
  ];

  return (
    <div className="experience-page">
      <div className="container">
        <section className="experience-header">
          <h1>Professional Experience</h1>
          <p className="lead">
            My journey in software development, from intern to senior developer, 
            working with diverse technologies and growing teams.
          </p>
        </section>

        <section className="timeline">
          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <h3 className="job-title">{exp.title}</h3>
                      <div className="company-info">
                        <span className="company">{exp.company}</span>
                        <span className="location">{exp.location}</span>
                      </div>
                      <span className="period">{exp.period}</span>
                    </div>
                    
                    <div className="experience-body">
                      <ul className="responsibilities">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="technologies">
                        <h4>Technologies Used:</h4>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements-section">
          <h2>Key Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">100K+</div>
              <div className="achievement-text">Daily Active Users</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">60%</div>
              <div className="achievement-text">Deployment Time Reduction</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">15+</div>
              <div className="achievement-text">Projects Delivered</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">5+</div>
              <div className="achievement-text">Years Experience</div>
            </div>
          </div>
        </section>

        <section className="download-section">
          <h2>Want to learn more?</h2>
          <p>Download my full resume for additional details about my experience and qualifications.</p>
          <a href="/Oscar_Lavolet_En.pdf" download className="btn btn-primary">
            Download Resume (PDF)
          </a>
        </section>
      </div>
    </div>
  );
};

export default Experience;