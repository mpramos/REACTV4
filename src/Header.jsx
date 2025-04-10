import React from 'react'

const Header = (props) => {
   
  return (
   <>
   {console.log(props)}
   <h1>{props.bienvenida}</h1>
   <h2>{props.titulo}</h2>
   <h3>{props.subtitulo}</h3>
   <p>
      Academia : {props.autor.nombre} {props.autor.partner}
   </p>
   <small>9/4/{props.año}</small>
   </>
  )
}

export default Header

