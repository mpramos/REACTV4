import React from 'react'
import { useState, useEffect } from 'react'
import Cuestionario from './Cuestionario'


const HooksDemo = () => {

  const [contador,setContador]=useState(0)

  useEffect( ()=>{console.log("✨ El componente se montó")},[])
  useEffect( ()=>{console.log( `🔃 El contador cambió a : ${contador}`)},[contador])

  return (
    <div>
      <h2>🧠 React Hooks : useState y useEffect</h2>
      <p>Contador: {contador}</p>
      <button onClick={()=> setContador(contador+1) } > + incrementar</button>
      <button onClick={()=>setContador(contador-1)}> - Decrementar</button>
      <button onClick={()=>setContador(0)}> 🔃 Reset</button>
      <div>
        <Cuestionario/>
      </div>
    </div>
  )
}

export default HooksDemo