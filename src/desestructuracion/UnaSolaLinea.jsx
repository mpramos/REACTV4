import React from 'react'

const UnaSolaLinea = (props) => {
  const { nombre, edad } = props
  return (
    <>
      <p>
        Una sola Línea : {nombre} tiene {edad}
      </p>
    </>
  )
}

export default UnaSolaLinea
