import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const text = "Welcome..! I'm Sidhartha Mitta";
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText]);

  return (
    <div id="header">
      <div className="container">
        <Navbar />
        <div className="header-text">
          <h1>{displayedText}</h1>
          <p>
            An enthusiastic student with a strong interest in{" "}
            <strong>AI/ML</strong> and a problem-solving mindset. Passionate
            about leveraging AI to solve real-world problems. Strong foundation
            in <strong>Data Structures and Algorithms</strong> and familiar with{" "}
            <strong>web development</strong> and <strong>no-code tools</strong>.
            Looking for an <strong>opportunity</strong> to apply my skills,
            collaborate with technology teams, and gain valuable hands-on
            experience.
          </p>
          <a href="#about" className="btn explore-btn">
            Explore More <i className="fas fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
