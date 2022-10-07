import { Link } from "react-router-dom";
//Importando Imagenes
import imgHome from '../assets/images/ahorcadoHome.jpg'
import logo from '../assets/images/soga-logo.png'
// Importe de los estilos .css
import '../assets/styles/Home.css'
import '../assets/styles/Button.css'

export default function Home() {
  return (
    // Sección "Inicio"
    <div className="container-inicio">
      <h1>AH<img className='container-inicio-logo' src={logo} alt="logo"/>RCADO</h1>
      <img className="container-inicio-imagen" src={imgHome} alt="imagen-colgado"/>
      <div className="container-inicio-botones">
        <Link to={'/Game'} className="btn"> Jugar </Link> 
        <Link to={'/Team'} className="btn"> Desarrolladores </Link>
      </div>
    </div>
    // Botón 'Jugar' con enlace a la página "Game"
    // Botón 'Desarrolladores' con enlace a la página "Team"
  )
}