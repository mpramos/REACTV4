import React from 'react'

const PasoAPaso = (props) => {
  const nombre= props.nombre
  const edad=props.edad
  return (
    <p> Paso a Paso : {nombre} tiene {edad} años</p>
  )
}

export default PasoAPaso
