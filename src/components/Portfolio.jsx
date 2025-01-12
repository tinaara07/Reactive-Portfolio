import React from 'react';

const projects = [
  {
    name: 'Tech Journal',
    image: 'project1.jpg', 
    link: 'https://tech-journal-ahbv.onrender.com/',
    github: 'https://github.com/tinaara07/Tech-Journal'
  },
  {
    name: 'PWA text editor',
    image: 'project2.jpg', 
    link: 'https://pwa-text-editor-3-0kr3.onrender.com/',
    github: 'https://github.com/tinaara07/PWA_text_editor'
  },
  {
    name: 'Note Taker',
    image: 'project3.jpg', 
    link: 'https://note-taker-jc7f.onrender.com/',
    github: 'https://github.com/tinaara07/Note-Taker'
  },
  {
    name: 'Duty Dashboard',
    image: 'project4.jpg', 
    link: 'https://tinaara07.github.io/Duty-Dashboard/',
    github: 'https://github.com/tinaara07/Duty-Dashboard'
  },
  {
    name: 'Climate Monitor',
    image: 'project5.jpg', 
    link: 'https://tinaara07.github.io/Climate-Monitor/',
    github: 'https://github.com/tinaara07/Climate-Monitor'
  },
  {
    name: 'Payroll Tracker',
    image: 'project6.jpg', 
    link: 'https://tinaara07.github.io/Payroll-Tracker/',
    github: 'https://github.com/tinaara07/Payroll-Tracker'
  }
];

const Portfolio = () => (
  <section id="portfolio">
    <h2>My Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
