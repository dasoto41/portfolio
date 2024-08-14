import "../../styles/App.css";
import "../../styles/home.css";
const Home = () => {
  return (
    <div className="contenedor-principal">
      <div className="presentacion">
        <h1>
          <span>Daniela</span> Soto
        </h1>
        <p className="subt">
          Desarrolladora <span>Full Stack</span>
        </p>
        <div className="position-320px">
          <a
            href="https://www.linkedin.com/in/daniela-soto-b36ab440/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt=""
            />
          </a>
          <a
            href="https://github.com/dasoto41"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
