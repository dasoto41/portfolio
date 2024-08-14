import React from "react";
import "../../styles/portfolio.css";
import pizza from "../content/img/pizza.png";
import reac from "../content/img/react.png";
import lista from "../content/img/checklist.png";

const Portfolio = () => {
  return (
    <div id="carouselExample" className="carousel slide portfolio-page">
      <div className="carousel-inner img">
        <div className="carousel-item active ">
          <a
            href="https://react-soto.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={reac} className="d-block w-100 one" alt="..." />
          </a>
        </div>
        <div className="carousel-item ">
          <a
            href="https://listadeviaje.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={lista} className="d-block w-100 one" alt="..." />
          </a>
        </div>
        <div className="carousel-item ">
          <a
            href="https://pizza-menu-dusky.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={pizza} className="d-block w-100 one" alt="..." />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Portfolio;
