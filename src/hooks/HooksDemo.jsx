import React, { createContext, useReducer, useRef } from 'react'
import { useState, useEffect } from 'react'
import Cuestionario from './Cuestionario'
import { useContext } from 'react'



const temaContexto = createContext()

const ComponenteB = () => {
  const tema = useContext(temaContexto)
  return (
    <>
      <h2> El tema es :{tema}</h2>
      <ComponenteC />

    </>)

}
const ComponenteC = () => {
  const tema = useContext(temaContexto)
  return <p>El tema actual es :{tema}</p>
}

const ComponenteD = ()=>{
  const inputRef= useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return <input ref={inputRef} placeholder='Escriba algo ...'></input>
}

const reducer=(state, action)=>{
    switch (action.type) {
      case  'incrementar':
        return { contador : state.contador+1}
      case  'decrementar':
        return { contador : state.contador-1}
      default:
        return state  
    }
}

const Contador =()=>{
  const [state, dispatch] = useReducer(reducer,{contador:0})
  return (
    <>
      <p>Contador Reducer : {state.contador}</p>
      <button onClick={()=> dispatch({type:'incrementar'})}>+</button>
      <button onClick={()=> dispatch({type:'decrementar'})}>-</button>
    </>
  )
}

const HooksDemo = () => {

  const [contador, setContador] = useState(0)

  useEffect(() => { console.log("✨ El componente se montó") }, [])
  useEffect(() => { console.log(`🔃 El contador cambió a : ${contador}`) }, [contador])

  return (
    <div>
      <h2>🧠 React Hooks : useState y useEffect</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)} > + incrementar</button>
      <button onClick={() => setContador(contador - 1)}> - Decrementar</button>
      <button onClick={() => setContador(contador * 1)}> * Multiplicar</button>
      <button onClick={() => setContador(0)}> 🔃 Reset</button>
      <h2>Use Context</h2>
      <temaContexto.Provider value="oscuro">
        <ComponenteB />
      </temaContexto.Provider>
      <h2> UseRef</h2>
      <ComponenteD/>
      <h2> UseReducer</h2>
      <Contador/>
      <div>
        <Cuestionario />
      </div>
    </div>
  )
}

export default HooksDemo