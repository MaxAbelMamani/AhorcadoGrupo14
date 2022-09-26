import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div>
      <h1>Equipo de Trabajo</h1>
      <div>
        <div className="NyF">
          <img src="#" alt="..." />
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
          <img src="#" alt="..." />
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
          <img src="#" alt="..." />
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
          <img src="#" alt="..." />
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
          <img src="#" alt="..." />
          <a
            className="perfil-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Agmor03"
          >
            {" "}
            Cruz Aruzamen Matias A.{" "}
          </a>
        </div>
      </div>
      <div className="boton-team">
        <Link to={"/"}>Inicio</Link>
      </div>
    </div>
  );
}

export default Team;
