import {Link} from 'react-router-dom'
function Game() {
  return (
    <div>
      <h1>Game</h1>
      <Link to={"/"} className="btn">Inicio</Link> 
    </div>
  )
}

export default Game