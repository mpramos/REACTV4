import React from 'react'

const BooleanProp = ({esEstudiante}) => {
  return <p> {esEstudiante? "Es estudiante":"No es estudiante"} </p>
}

export default BooleanProp