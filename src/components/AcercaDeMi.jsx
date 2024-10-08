import React from "react";
import "../styles/acercaDeMi.css";
import daniela from "../components/img/unnamed.jpg";
import Avatar from "@mui/material/Avatar";
import smoke from "../assets/smoke.mp4";

const AcercaDeMi = () => {
  return (
    <div className="about-container">
      <div className="smoke-video-container">
        <video autoPlay muted className="smoke-video">
          <source src={smoke} type="video/mp4" />
        </video>
      </div>
      <div className="about">
        <p className="hijo">
          Hola!! Mi nombre es Daniela Soto y tengo 33 años. Mi perfil actual es
          Full Stack, ya que vengo estudiando y capacitándome en: React JS,
          Node.js /Express, JavaScript, MySQL, MongoDB. Constantemente estoy
          buscando actualizar mis conocimientos y adquirir nuevas habilidades!
          He trabajado en diferentes proyectos de manera colaborativa y puedo
          desenvolverme muy bien trabajando en equipo y aprendiendo de los
          demás!
        </p>
        <Avatar className="avatar2" alt="Daniela" src={daniela} />

        <div className="certificates-section">
          <p className="title">VER CERTIFICADOS</p>
          <div className="box">
            <button
              type="button"
              className="btn itemBox"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="left"
              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-bs-original-title="Popover Title"
              aria-describedby="popover699892"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xLFb7zWNKnSaNesAWwXAQT8NpOqwYwZu/view?usp=drive_link",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Desarrollo WEB
            </button>

            <button
              type="button"
              className="btn itemBox"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="left"
              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-bs-original-title="Popover Title"
              aria-describedby="popover699892"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1KkuZxUOHn7J3my3oad4hr98xo6xHkv9Y/view?usp=drive_link",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              JavaScript
            </button>

            <button
              type="button"
              className="btn itemBox"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="left"
              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-bs-original-title="Popover Title"
              aria-describedby="popover699892"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1cvR8s-tn3pY-EbXhyUgtpriIo85D2VTY/view?usp=drive_link",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              React JS
            </button>
            <button
              type="button"
              className="btn itemBox"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="left"
              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-bs-original-title="Popover Title"
              aria-describedby="popover699892"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1pp6ZWZ1TZG-s2gTXxTjSluht5bNqd0RH/view?usp=drive_link",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Backend
            </button>

            <a href="https://wa.link/l24l9e" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDeMi;
