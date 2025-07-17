import React, { useState } from "react";
import resume from "../assets/images/SidharthaMitta_resume.pdf";
const Contact = () => {
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz1o7vtXRyIIvoQZWbKI3aQb6DY7QUDTBvyrjLbM01_DhxI6gDQv167G3ctxlmuSwFR/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then((response) => {
        console.log("Success!", response);
        setMsg("Message sent successfully!");
        setTimeout(() => setMsg(""), 5000);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMsg("Something went wrong. Please try again.");
        setTimeout(() => setMsg(""), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fas fa-paper-plane"></i>{" "}
              sidharthamitta2005@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i> +91 6305963310
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/sidhartha-mitta-68bbb8315"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Sidhartha-Mitta"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/mr___sidhartha__05/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://leetcode.com/u/sidhulucky/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-code"></i>
              </a>
            </div>
            <a href={resume} className="btn btn2" download>
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit} name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="btn btn2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    Submit <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
