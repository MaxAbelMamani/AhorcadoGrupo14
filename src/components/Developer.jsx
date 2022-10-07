import React from 'react'

function Developer({nombre, img}) {
  return (
    <div className="NyF">
        <img src={img} alt="img-developer" />
        <a className="perfil-github" target="_blank" rel="noreferrer" href="https://github.com/MaxAbelMamani">
            {nombre}
        </a>
    </div>
  )
}

export default Developer