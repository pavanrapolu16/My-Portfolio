import React, { useState } from 'react';
import background from "../assets/images/bgphoto.png";
const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col1">
            <img src={background} alt="About" className="about-img" />
          </div>
          <div className="col2">
            <h1 className="sub-title">About Me</h1>
            <p className="about-desc">
              I'm Sidhartha Mitta, a Computer Science student at RGUKT Basar with a strong passion for AI/ML, full-stack development, and building meaningful tech-driven solutions. Currently, I serve as the Technical Coordinator of the E-Cell at RGUKT Basar, where I lead web development initiatives, manage digital infrastructure, and contribute to organizing tech-centric events.
            </p>
            <div className="tab-titles">
              {['skills', 'education', 'achievement'].map(tab => (
                <p
                  key={tab}
                  className={`tab-links ${activeTab === tab ? 'active-link' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </p>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'skills' && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>Programming Languages</span><br />C, C++, Java, JavaScript, Python</li>
                  <li><span>Web Technologies</span><br />HTML, CSS, React, Node, Express, MongoDB, PHP, MySQL</li>
                  <li><span>Version Control</span><br />Git, GitHub</li>
                  <li><span>Other Skills</span><br />DSA, Hostinger, Problem Solving</li>
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>RGUKT Basar</span><br />B.Tech CSE (2023-present)<br /><i>CGPA: 9.38</i></li>
                  <li><span>RGUKT Basar</span><br />PUC (2021-2023)<br /><i>CGPA: 9.54</i></li>
                  <li><span>Annapurna High School</span><br />SSC (2021)<br /><i>CGPA: 10</i></li>
                </ul>
              </div>
            )}
            {activeTab === 'achievement' && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>190+ Leetcode Problems Solved</span><br />
                    <a href="https://leetcode.com/u/sidhulucky/" target="_blank" rel="noreferrer" className="links">
                      Leetcode Profile <i className="fas fa-external-link-alt"></i>
                    </a>
                  </li>
                  <li><span>Eureka! Zonal Finalist</span><br />IIT Bombay's premier startup competition.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
