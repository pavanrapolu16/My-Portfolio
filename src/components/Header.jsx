import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
          <Link
            to="about"
            smooth={true}
            className="btn explore-btn"
            duration={1000}
          >
            Explore More <i className="fas fa-arrow-down"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
