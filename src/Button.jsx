import React from 'react'


const buttonStyles ={
    padding:'10px 20px',
    background: 'rgb(0,255,0)',
    border:'none',
    borderRadius:5
}
let contenido='action'
const Button = () => <button style={buttonStyles}>{contenido}</button>

export default Button