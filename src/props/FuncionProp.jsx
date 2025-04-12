import React from 'react'

const FuncionProp = ({saludar}) => {
  return (
   <button onClick={()=>saludar('estudiante')}>saludar</button>
  )
}

export default FuncionProp