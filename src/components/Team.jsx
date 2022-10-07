import React from "react";
import { Link } from "react-router-dom";
// Importe de los estilos .css
import '../assets/styles/Team.css';
import '../assets/styles/Button.css';
// Importe de funciones
import equipo from './teams.json';
import Developers from './Developers';

function Team() {
  return (
    <div className="container-team">
      <h1>Equipo de Trabajo</h1>
      <div className="team">
        {
          equipo.map((e) => {
            return (
              <Developers key={e.id} nombre={e.nombre} Imagen={e.src} Edad={e.Edad} Frase={e.Frase} github={e.github} />
              //armado de elementos en cajas de "desarrolladores"
            )
          })
        }
      </div>
      <div className="container-team-boton">
        <Link to={"/"} className="btn">Inicio</Link>
      </div>
    </div>
  );
}
export default Team;
