import { Link } from "react-router-dom";
// Importe de los estilos .css

function Home() {
  return (
    // Sección "Inicio"
    <div>
      <h1>AHORCADO</h1>
      <img src="#" alt="manos"/>
      <div>
        <Link to={'/Game'}> Jugar </Link> 
        <Link to={'/Team'}> Desarrolladores </Link>
      </div>
    </div>
    // Botón 'Jugar' con enlace a la página "Game"
    // Botón 'Desarrolladores' con enlace a la página "Team"
  )
}

export default Home