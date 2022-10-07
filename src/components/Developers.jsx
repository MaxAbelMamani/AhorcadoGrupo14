import React from 'react'

function Developer({nombre,Edad,Frase,Imagen,github}){
    return(
        <div className="NyF"> 
            <img src={Imagen} alt="img-developer"/>
            <a className="perfil-github" 
            target="_blank"
            rel="noreferrer"
             href={github}
            >
            {" "}
            {nombre}                
            </a>
            {Edad}<br/>
            {Frase}
        </div>
    )
}

export default Developer