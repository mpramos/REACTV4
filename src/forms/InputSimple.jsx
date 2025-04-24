import React, { useState } from 'react'

//! ### 🟡 1. Obtener datos de un campo de entrada

//? > Cuando el usuario escribe algo en un input, necesitamos "escuchar" ese cambio y guardarlo en el estado.

const InputSimple = () => {
    const [nombre, setNombre]= useState("")

    const manejarCambio=(e)=>{
            setNombre(e.target.value)
    }
    
  return (
    <div>
        <label >Nombre:</label>
        <input type="text" onChange={manejarCambio} value={nombre}/>
        <p> Tu nombre es :{nombre}</p>
    </div>
  )
}

export default InputSimple