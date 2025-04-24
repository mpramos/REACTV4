import React from 'react'

const FormularioMultiple = () => {

    const manejarCambio=(e)=>{
        // setNombre(e.target.value)

}

  return (
        <form>
            <label> Nombre: </label>
            <input type="text" name="nombre"  />
            <label> Género: </label>
            <select name="genero" >
                <option value="">Femenino</option>
                <option value="">Masculino</option>
                <option value="">Otro</option>
            </select>
            <label> 
                <input type="checkbox" name='aceptaTerminos'/>
                Acepta los terminos
            </label>
        </form>

)
}

export default FormularioMultiple