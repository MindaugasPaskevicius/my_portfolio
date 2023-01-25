import React from "react";
import "./About.css";
//import ME from "../../assets/me-about.png";
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
            {/* <img src={ME} alt="About Image" /> */}
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
            I started my career in logistics. The desire to learn, improve and
            strive to be the best helped me to achieve good results. When I had
            already achieved my goals, I decided to challenge myself and step
            out of my comfort zone, I chose to try programming. I started
            studying and after finishing my studies in "Baltic Institute of
            Technology" , where I gained a lot of knowledge, I realized that I
            really want to continue my journey in programming, to get knowledge
            and give your all in this exciting and never-ending field of
            innovation.
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
