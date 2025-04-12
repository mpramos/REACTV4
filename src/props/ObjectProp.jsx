import React from 'react'

const ObjectProp = ({usuario}) => {
  const {nombre, imagen, pais}= usuario
  return (
    <>
      <h2>Nombre: {nombre}</h2>
      <p>imagen:{imagen}</p>
      <p>pais:{pais}</p>
    </>
  
  )
}

export default ObjectProp