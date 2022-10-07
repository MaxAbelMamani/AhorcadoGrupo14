import React from 'react'

function Developer({nombre,Edad,Frase,Imagen,github}){
    return(
        <div className="developer">
            <img className='developer-image' src={Imagen} alt="developer-image"/>
            <div className='developer-decription'>
                <a className="developer-perfil-github" 
                target="_blank"
                rel="noreferrer"
                    href={github}
                >
                {nombre}                
                </a>
                <div className='developer-age'>
                    {Edad}
                </div>
                <div className='developer-frase'>
                    "{Frase}"
                </div>
            </div>
        </div>
    )
}

export default Developer