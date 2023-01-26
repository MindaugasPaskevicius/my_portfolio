import React from "react";
import "./Portfolio.css";
 import IMG1 from "../../assets/Blogpost.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Modern Blog App with React | GraphQL, NextJS, Tailwind CSS",
    github: "https://github.com/MindaugasPaskevicius/cms_blog",
    demo: "https://cms-blog-lovat-eight.vercel.app/",
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: "This is image title",
  //   github: "https://github.com/MindaugasPaskevicius",
  //   demo: "https://github.com/MindaugasPaskevicius/restaurant-frontend",
  // },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "This is image title",
  //   github: "https://github.com/MindaugasPaskevicius",
  //   demo: "https://github.com/MindaugasPaskevicius/restaurant-frontend",
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "This is image title",
  //   github: "https://github.com/MindaugasPaskevicius",
  //   demo: "https://github.com/MindaugasPaskevicius/restaurant-frontend",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "This is image title",
  //   github: "https://github.com/MindaugasPaskevicius",
  //   demo: "https://github.com/MindaugasPaskevicius/restaurant-frontend",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "This is image title 6",
  //   github: "https://github.com/MindaugasPaskevicius",
  //   demo: "https://github.com/MindaugasPaskevicius/restaurant-frontend",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="padding">My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
