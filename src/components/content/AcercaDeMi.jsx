import React from "react";
import "../../styles/aboutMe.css";

const AcercaDeMi = () => {
  return (
    <>
      <div className="padre">
        <p className="hijo">
          Hola!! Mi nombre es Daniela y tengo 33 años. Tengo experiencia en
          proyectos Full Stack. Actualmente me desenvuelvo con React JS- Node js
          /Express, Mysql,MongoDB . Aunque estoy constantemente buscando
          actualizar mis conocmientos y adquirir nuevas habilidades! He
          trabajado en diferentes proyectos de manera colaborativa y puedo
          desenvolverme muy comoda en el trabajo en equipo!
        </p>
      </div>
      <div>
        <p className="title"> VER CERTIFICADOS</p>
        <div className="box">
          <a
            href="https://drive.google.com/file/d/1xLFb7zWNKnSaNesAWwXAQT8NpOqwYwZu/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="itemBox"
          >
            <p>Desarrollo WEB</p>
            <i className="fa-solid fa-file-arrow-down icon"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1KkuZxUOHn7J3my3oad4hr98xo6xHkv9Y/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="itemBox"
          >
            <p>JavaScript</p>
            <i className="fa-solid fa-file-arrow-down icon"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1cvR8s-tn3pY-EbXhyUgtpriIo85D2VTY/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="itemBox"
          >
            <p>React JS</p>
            <i className="fa-solid fa-file-arrow-down icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default AcercaDeMi;
