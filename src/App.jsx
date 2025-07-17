import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <div className="copyright">
        <p>Copyright &copy; 2025 Sidhartha Mitta.</p>
      </div>
    </>
  );
};

export default App;
