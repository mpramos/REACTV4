import React from 'react'
import { useParams } from 'react-router-dom'

const PerfilUsuario = () => {
    const { id } = useParams()
  return (
    <div>
        <h3>PERFIL DE USUARIO {id}</h3>
        <p> 👴 Bienvenido a la página de Perfil de Usuario</p>
        <p>Esta es una aplicación de ejemplo para practicar React Router.</p>
        <p>Utiliza el menú de navegación para explorar las diferentes secciones.</p>
    </div>
  )
}

export default PerfilUsuario