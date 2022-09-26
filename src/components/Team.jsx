import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Team.css'
import '../assets/styles/Button.css'
import images from '../components/ImgTeam.jsx'
function Team() {
  return (
    <div className="container-team">
      <h1>Equipo de Trabajo</h1>
      <div className="team">
        <div className="NyF">
          <img src={images.MaxiMamani} alt="..." />
          <a
            className="perfil-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MaxAbelMamani"
          >
            {" "}
            Mamani Maximiliano Abel{" "}
          </a>
        </div>
        <div className="NyF">
          <img src={images.MatiOrtega} alt="..." />
          <a
            className="perfil-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MatiasGrrrOrtega"
          >
            {" "}
            Ortega Matias Gabriel{" "}
          </a>
        </div>
        <div className="NyF">
          <img src={images.MaxiBustamante} alt="..." />
          <a
            className="perfil-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MaxLeonel"
          >
            {" "}
            Bustamante Maximiliano L.
          </a>
        </div>
        <div className="NyF">
          <img src={images.AgusMorales} alt="..." />
          <a
            className="perfil-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Agmor03"
          >
            {" "}
            Morales Agustina M. A.{" "}
          </a>
        </div>
        <div className="NyF">
          <img src={images.MatiCruz} alt="..." />
          <a
            className="perfil-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MatiasCA11"
          >
            {" "}
            Cruz Aruzamen Matias A.{" "}
          </a>
        </div>
      </div>
      <div className="boton-team">
        <Link to={"/"} className="btn">Inicio</Link>
      </div>
    </div>
  );
}

export default Team;
