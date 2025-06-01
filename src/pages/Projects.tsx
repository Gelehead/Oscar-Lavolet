import * as React from 'react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard for inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      category: "web",
      githubUrl: "https://github.com/oscar/ecommerce",
      liveUrl: "https://shop-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      longDescription: "A real-time collaborative task management application similar to Trello, built with Vue.js and Socket.io. Features include drag-and-drop boards, team collaboration, file attachments, and notification system.",
      technologies: ["Vue.js", "Socket.io", "MongoDB", "Express", "JWT"],
      category: "web",
      githubUrl: "https://github.com/oscar/taskmanager",
      liveUrl: "https://tasks-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description: "RESTful API for weather data analysis and forecasting",
      longDescription: "A robust API service that aggregates weather data from multiple sources, performs analytics, and provides forecasting capabilities. Built with Python and FastAPI, featuring automatic data collection, caching, and comprehensive documentation.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "OpenAPI"],
      category: "api",
      githubUrl: "https://github.com/oscar/weather-api",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Expense Tracker",
      description: "Cross-platform mobile app for personal finance management",
      longDescription: "A React Native application for tracking personal expenses with features like category-based spending analysis, budget setting, receipt scanning using OCR, and expense reporting with charts and insights.",
      technologies: ["React Native", "Firebase", "Chart.js", "OCR", "Redux"],
      category: "mobile",
      githubUrl: "https://github.com/oscar/expense-tracker",
      featured: true
    },
    {
      id: 5,
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration",
      longDescription: "A sleek chat application with AI assistant integration, featuring real-time messaging, file sharing, message history, and intelligent responses. Built with modern web technologies and WebSocket communication.",
      technologies: ["TypeScript", "WebSocket", "OpenAI API", "Tailwind CSS", "Vite"],
      category: "web",
      githubUrl: "https://github.com/oscar/ai-chat",
      liveUrl: "https://chat-demo.com",
      featured: false
    },
    {
      id: 6,
      title: "DevOps Automation Scripts",
      description: "Collection of automation scripts for deployment and monitoring",
      longDescription: "A comprehensive set of DevOps tools and scripts for automating deployment pipelines, server monitoring, backup processes, and infrastructure management. Includes Docker configurations and CI/CD templates.",
      technologies: ["Bash", "Python", "Docker", "AWS", "Terraform", "Ansible"],
      category: "devops",
      githubUrl: "https://github.com/oscar/devops-scripts",
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'api', label: 'APIs' },
    { value: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="projects-page">
      <div className="container">
        <section className="projects-header">
          <h1>My Projects</h1>
          <p className="lead">
            A collection of projects showcasing my skills in web development, 
            mobile applications, APIs, and DevOps automation.
          </p>
        </section>

        {featuredProjects.length > 0 && (
          <section className="featured-projects">
            <h2>Featured Projects</h2>
            <div className="featured-grid">
              {featuredProjects.map(project => (
                <div key={project.id} className="featured-project-card">
                  <div className="project-image">
                    <div className="image-placeholder">
                      <span>Project Image</span>
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag">+{project.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="all-projects">
          <div className="projects-filter">
            <h2>All Projects</h2>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-category">
                    <span className={`category-badge ${project.category}`}>
                      {categories.find(cat => cat.value === project.category)?.label}
                    </span>
                  </div>
                </div>
                
                <p className="project-description">{project.longDescription}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="github-section">
          <h2>More on GitHub</h2>
          <p>
            Check out my GitHub profile for more projects, contributions, and code samples.
          </p>
          <a href="https://github.com/oscar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit GitHub Profile
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;