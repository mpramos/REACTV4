import React, { useState } from 'react'

//! ### 🟡 1. Obtener datos de un campo de entrada

//? > Cuando el usuario escribe algo en un input, necesitamos "escuchar" ese cambio y guardarlo en el estado.

const InputSimple = () => {
    const [nombre, setNombre]= useState("")

    const manejarCambio=(e)=>{
      console.log( 'target', e.target.name)
            setNombre(e.target.value)
    }
    
  return (
    <div>
      <h3>FORMULARIO SIMPLE</h3>
        <label >Nombre:</label>
        <input type="text" onChange={manejarCambio} value={nombre} name='nombre'/>
        <p> Tu nombre es :{nombre}</p>
    </div>
  )
}

export default InputSimple