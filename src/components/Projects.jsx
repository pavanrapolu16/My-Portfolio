import React from 'react';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
const projects = [
  {
    img: p1,
    title: 'E-Cell RGUKT Basar Website',
    desc: 'Built and launched the E-Cell RGUKT Basar website using code and no-code tools, hosted on Hostinger.',
    link: 'https://ecellrguktb.in/',
  },
  {
    img: p2,
    title: 'Gesture-Based-Smart-Board',
    desc: 'A virtual Smart Board controlled by hand gestures via webcam for drawing, erasing, and presentations.',
    link: 'https://github.com/Sidhartha-Mitta/Gesture-Based-Smart-Board',
  },
  {
    img: p3,
    title: 'Antahpragna Official Website',
    desc: 'Contributed to building the official Antahpragna website using React, hosted on Hostinger.',
    link: 'https://antahpragnya.in/',
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          {projects.map((proj, idx) => (
            <div className="work" key={idx}>
              <img src={proj.img} alt={proj.title} />
              <div className="layer">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <a href={proj.link} className="project-link" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
