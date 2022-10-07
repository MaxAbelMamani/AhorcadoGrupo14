import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Howl, Howler} from 'howler';

//Importando Funciones
import { getPalabraRandom } from '../funciones/getPalabraRandom.js';
import { letras } from '../funciones/letras.js';

//Importando estilos CSS
import '../assets/styles/Game.css'
import '../assets/styles/Button.css'

//Importando logo
import logo from '../assets/images/soga-logo.png'

//Importando componente de las imagenes del ahorcado
import {ColgadoImg} from './ColgadoImg';

//Importando Musica
import SoundOption from '../assets/sounds/click02.wav'
import SoundLost from '../assets/sounds/gameover02.wav'
import SoundWin from '../assets/sounds/win01.wav'
import SoundRestart from '../assets/sounds/restart.wav'

function Game() {

  //Ocultar Opciones
  const [verOpcion, setVerOpcion] = useState('btn-option');
  //Manejando los intentos 
  const [intentos, setIntentos] = useState(0);
  const [palabra, setPalabra] = useState(getPalabraRandom);
  const [palabraOculta, setPalabraOculta] = useState('_ '.repeat(palabra.length));
  const [perder, setPerder] = useState(false);
  const [ganar, setGanar] = useState(false);

  // Determinar si la persona perdió
  useEffect(() => {
    if(intentos === 8){
      lost.play();
      setPerder(true);
      setVerOpcion('ocultar');
    }
  }, [intentos])

  // Determinar si la persona ganó
  useEffect(() => {
    const actualPalabraOculta = palabraOculta.split(' ').join('');
    if(actualPalabraOculta === palabra){
      win.play();
      setGanar(true);
      setVerOpcion('ocultar');
    }
  }, [palabraOculta])

  //Variables de sonido
  let btn = new Howl({
    src: [SoundOption]
  });

  let lost = new Howl({
    src: [SoundLost]
  });

  let win = new Howl({
    src: [SoundWin]
  });

  let restart = new Howl({
    src: [SoundRestart]
  });

  Howler.volume(0.5);

  const chequearLetra = (letter) => {
    btn.play();
    if(perder) return;
    // Por cada letra que no se encuentre en la palabra, se suma un intento
    // Por cada intento se dibuja una parte del ahorcado
    if(!palabra.includes(letter)){
      setIntentos(Math.min(intentos + 1, 9));
      return;
    }
    // mostrando las letras en la pantalla
    const palabraOcultaArray = palabraOculta.split(' ');

    // Recorriendo la palabra como un arreglo de caracteres
    for(let i=0; i<palabra.length; i++){
      if(palabra[i] === letter){
        palabraOcultaArray[i] = letter;
      }
    }

    setPalabraOculta(palabraOcultaArray.join(' '));
  }

  const nuevoJuego = () => {
    restart.play();
    const nuevaPalabra = getPalabraRandom();
    
    setIntentos(0);
    setPalabra(nuevaPalabra);
    setPalabraOculta('_ '.repeat(nuevaPalabra.length));
    setPerder(false);
    setGanar(false);
    setVerOpcion('btn-option');
  }

  return (
    <div className='game'>
        <h1>AH<img className='logo' src={logo} alt="logo"/>RCADO</h1>
        {/* Imágenes */}
        <ColgadoImg imageNumber = {intentos} />

        {/* Palabra oculta */}
        <h3>{palabraOculta}</h3>
        
        {/* Contador de intentos */}
        <h3>Intentos: {intentos} / 8</h3>

        <div className='respuestas'>
          {/* Mensaje si perdió */}
          {
              (perder) 
              ? <h2 className='mensaje'>¡Perdiste! La palabra era: {palabra}</h2> 
              : ''
          }
          {/* Mensaje si ganó */}
          {
              (ganar)
              ? <h2 className='mensaje'>Felicidades: ¡Ganaste!</h2>
              : ''
          }
        </div>
        <div className='opciones'>
          {/* Botones de letras */}
          {
              letras.map((letra)=> (
                <button className={verOpcion}
                key={letra}
                onClick={()=> chequearLetra(letra)}
                >
                {letra}
                </button>
              ))
            }
        </div>
        <div className='botones-page-game'>
          <button className='btn-restart' onClick={nuevoJuego}>ReIniciar</button>
          <Link to={"/"} className="btn-inicio">Vover a Inicio</Link> 
        </div>
    </div>
  )
}

export default Game