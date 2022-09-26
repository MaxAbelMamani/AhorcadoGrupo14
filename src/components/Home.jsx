import { Link } from "react-router-dom";
import '../assets/styles/Home.css'
import '../assets/styles/Button.css'
import imgHome from '../assets/images/ahorcadoHome.png'
// Importe de los estilos .css

export default function Home() {
  return (
    // Sección "Inicio"
    <div className="container-inicio">
      <h1>AHORCADO</h1>
      <img src={imgHome} alt="manos"/>
      <div className="botones-home">
        <Link to={'/Game'} className="btn"> Jugar </Link> 
        <Link to={'/Team'} className="btn"> Desarrolladores </Link>
      </div>
    </div>
    // Botón 'Jugar' con enlace a la página "Game"
    // Botón 'Desarrolladores' con enlace a la página "Team"
  )
}