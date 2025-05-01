import React from 'react'
import { useNavigate } from 'react-router-dom'

const BotonLogin = () => {

    const navegar= useNavigate()

    const manejarLogin = () => {
        navegar('/')
    }
    const manejarAcerca = () => {
        navegar('/acerca')
    }
    const manejarContacto = () => {
        navegar('/contacto')
    }
  return (
    <>
        <h3>USE NAVIGATE</h3>
    <button onClick={manejarLogin}>Login</button>
    <button onClick={manejarAcerca}>Acerca</button> 
    <button onClick={manejarContacto}>Contacto</button>
    </>
  )
}

export default BotonLogin