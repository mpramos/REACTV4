import React from 'react'
import PasoAPaso from './desestructuracion/PasoAPaso'
import UnaSolaLinea from './desestructuracion/UnaSolaLinea'
import EnParentesis from './desestructuracion/EnParentesis'
import Cuestionario from './desestructuracion/Cuestionario'

const Desestructuracion = () => {
  return (
    <div style={{ fontFamily:"serif"}} edad={25}>
        <h2> 🐱‍👤 Desestructuración de Props en React</h2>
        <PasoAPaso nombre='Ana' edad={25}/>
        <UnaSolaLinea nombre='Carlos' edad={30}/>
        {/* // 🚀 3. Desestructuración directamente en los paréntesis del componente */}
        {/* 🔹 Es la forma más moderna y compacta. */}
        <EnParentesis nombre="Luisa" edad={28}/>
        <Cuestionario/>
        
    </div>
  )
}

export default Desestructuracion