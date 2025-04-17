import React from 'react'

const Cuestionario = () => {
  return (
    <div>

 <h2>📝 Cuestionario: Desestructuración en React</h2>

      <ol>
        <li>
          ¿Cuál es la forma más compacta de desestructurar props en un componente?
          <ul>
            <li>A) Dentro del return</li>
            <li>B) Dentro de una variable global</li>
            <li>C) Dentro del cuerpo de la función</li>
            <li>D) Directamente en los paréntesis del componente✅</li>
          </ul>
        </li>

        <li>
          ¿Qué hace esta línea de código?
          <pre>{`const { nombre, edad } = props;`}</pre>
          <ul>
            <li>A) Crea un nuevo componente</li>
            <li>B) Ejecuta una función</li>
            <li>C) Extrae propiedades del objeto props ✅</li>
            <li>D) Renderiza JSX</li>
          </ul>
        </li>

        <li>
          ¿Qué ventaja tiene desestructurar en los paréntesis?
          <ul>
            <li>A) Es obligatorio</li>
            <li>B) Mejora la legibilidad ✅</li>
            <li>C) Hace el componente más lento</li>
            <li>D) No tiene ventajas</li>
          </ul>
        </li>

        <li>
          ¿Cuál de estos ejemplos usa desestructuración paso a paso?
          <ul>
            <li>
              A) <code>const { 'nombre' } = props;</code>
            </li>
            <li>
              B) <code>const nombre = props.nombre;</code>  ✅
            </li>
            <li>
              C) <code>({ 'nombre' })</code>
            </li>
            <li>
              D) <code>props =&gt; props.nombre</code>
            </li>
          </ul>
        </li>
      </ol>

    </div>
  )
}

export default Cuestionario