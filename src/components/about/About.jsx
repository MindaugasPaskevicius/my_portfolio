import React from "react";
import "./About.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
//import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="padding">Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>~ 1 year</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200 + Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8 Completed</small>
            </article>
          </div>

          <p>
            As a former warehouse manager with a passion for learning, growth,
            and excellence, I made the decision to challenge myself and venture
            into the world of programming. After completing my studies at the
            Baltic Institute of Technology, I realized that programming was not
            just a new career path, but a lifelong journey of innovation and
            discovery that I was eager to embark upon. My experience in
            logistics has equipped me with exceptional organizational skills,
            attention to detail, and the ability to manage and prioritize tasks
            effectively. I am committed to applying these skills to my work as a
            programmer and contributing to the dynamic and ever-evolving world
            of technology. I am confident that my passion, drive, and work ethic
            will make me a valuable asset to any development team. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
