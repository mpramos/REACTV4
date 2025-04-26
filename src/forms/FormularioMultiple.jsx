import React, { useState } from 'react'

const FormularioMultiple = () => {
        const [formulario, setFormulario]= useState(
        {
                nombre:'',
                edad:'',
                aceptaTerminos: false,
                genero:'femenino'
        })
    const manejarCambio=(e)=>{
        const {name, value, type,checked}= e.target
        setFormulario(
            {
                ...formulario,
                [name]: type ==="checkbox" ? checked:value
            }
        )
        console.log( 'formulario',
            {
                ...formulario,
                [name]: type ==="checkbox" ? checked:value
            }
        );
        
}
  return (
    <>
    <h3>FORMULARIO MULTIPLE</h3>
        <form>
            <label> Nombre: </label>
            <input 
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio} />
            <label> Edad: </label>
            <input
                type='number'
                name="edad"
                value={formulario.edad}
                onChange={manejarCambio} />
            <label> Género: </label>
            <select 
                name="genero" 
                value={formulario.genero}
                onChange={manejarCambio}  >
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="otro">Otro</option>
            </select>
            <label> 
                <input 
                    type="checkbox" 
                    name='aceptaTerminos'
                    checked={formulario.aceptaTerminos}
                    onChange={manejarCambio} />
                    Acepta los terminos
            </label>
            <p>Nombre :{formulario.nombre}</p>
            <p>Edad : {formulario.edad}</p>
            <p>Género : {formulario.genero}</p>
            <p>Acepta terminos : {formulario.aceptaTerminos ? 'Si':'No'} </p>
        </form>
    </>

)
}

export default FormularioMultiple