import React from "react";

const QuizSimple = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: "1rem" }}>
      <h2>📝 Cuestionario: Props y Desestructuración en React</h2>

      <ol>
        <li>
          ¿Qué son los props en React?
          <ul>
            <li>A) Estilos aplicados a los componentes</li>
            <li>B) Funciones internas de React</li>
            <li>C) Datos que se pasan de un componente padre a uno hijo </li>
            <li>D) Eventos personalizados</li>
          </ul>
        </li>

        <li>
          ¿Cómo se desestructuran props en un componente funcional?
          <ul>
            <li>A) function Componente(props) { props.titulo }</li>
            <li>B) const Componente = (props) => props.titulo</li>
            <li>C) const Componente = &#123; titulo &#125; => &lt;p&gt;&#123;titulo&#125;&lt;/p&gt;</li>
            <li>D) const Componente = (&#123; titulo &#125;) => &lt;p&gt;&#123;titulo&#125;&lt;/p&gt; ✅</li>
          </ul>
        </li>

        <li>
          ¿Qué tipo de dato es esta prop: hobbies=&#123;['leer', 'dibujar']&#125;?
          <ul>
            <li>A) String</li>
            <li>B) Objeto</li>
            <li>C) Array </li>
            <li>D) Booleano</li>
          </ul>
        </li>

        <li>
          ¿Cómo se pasa una función como prop en React?
          <ul>
            <li>A) funcion={() => {}}</li>
            <li>B) saludar={() => alert('Hola')}</li>
            <li>C) &lt;Componente saludar={() => alert('Hola')} /&gt; </li>
            <li>D) &lt;Componente&gt;{`() => alert('Hola')`}&lt;/Componente&gt;</li>
          </ul>
        </li>

        <li>
          ¿Cuál es una ventaja de usar desestructuración en los parámetros del componente?
          <ul>
            <li>A) Hace que el código sea más lento</li>
            <li>B) Ayuda a aplicar estilos automáticamente</li>
            <li>C) Mejora la legibilidad y acceso directo a los valores </li>
            <li>D) Es obligatoria en todos los componentes</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default QuizSimple;
