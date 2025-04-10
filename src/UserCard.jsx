import React from 'react'

const UserCard = () => {
    const personaje={
        imagenUrl:'https://rickandmortyapi.com/api/character/avatar/631.jpeg',
        nombrePersonaje:'Rick Sanchez'
    }
    const { imagenUrl:image, nombrePersonaje:nombre}= personaje
  return (
    <div>
        <img src={image} alt="imagen de Rick" />
        <h2>{nombre}</h2>
    </div>
  )
}

export default UserCard