import React from 'react'
import { useState } from 'react'


const HooksDemo = () => {

  const [contador,setContador]=useState(0)


  return (
    <div>
      <h2>🧠 React Hooks : useState y useEffect</h2>
      <p>Contador: {contador}</p>
      <button onClick={()=> setContador(contador+1) } > + incrementar</button>
      <button onClick={()=>setContador(contador-1)}> - Decrementar</button>
      <button onClick={()=>setContador(0)}> 🔃 Reset</button>

    </div>
  )
}

export default HooksDemo