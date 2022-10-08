import React from "react";
import { Link } from "react-router-dom";
import imgError404 from '../assets/images/ahorcadoError404.png'
import '../assets/styles/Error404.css';
import '../assets/styles/Button.css';

export default function Error404() {
    return (
      <div className="container-error">
        <div className="container-error-message">
            <div className="container-error-text">
                <h1>Error 404</h1>
                <p>Página no </p>
                <p>encontrada</p>
            </div>
            <img className="container-error-imagen" src={imgError404} alt="imagen-404"/>
        </div>
        <div className="container-error-boton">
        <Link to={"/"} className="btn">Inicio</Link>
        </div>
      </div>
    )
}