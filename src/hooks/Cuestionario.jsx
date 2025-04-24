import React from 'react'

const Cuestionario = () => {
    return (
        <div>
            <h2>📝 Cuestionario: useState y useEffect</h2>

            <ol>
                <li>
                    ¿Qué hace <code>useState</code> en React?
                    <ul>
                        <li>A) Estiliza componentes</li>
                        <li>B) Renderiza elementos en HTML</li>
                        <li>C) Crea y gestiona estados locales ✅</li>
                        <li>D) Cambia rutas en React Router</li>
                    </ul>
                </li>

                <li>
                    ¿Cuál es la forma correcta de declarar un estado con useState?
                    <ul>
                        <li>
                            A) <code>let contador = useState(0)</code>
                        </li>
                        <li>
                            B) <code>const [contador, setContador] = useState(0) ✅ </code>
                        </li>
                        <li>
                            C) <code>useState = [contador, setContador]</code>
                        </li>
                        <li>
                            D) <code>contador.useState(0)</code>
                        </li>
                    </ul>
                </li>

                <li>
                    ¿Cuándo se ejecuta un <code>useEffect(() =&gt; ..., [])</code>?
                    <ul>
                        <li>A) Cada vez que el componente se renderiza</li>
                        <li>B) Solo cuando se actualiza un estado</li>
                        <li>C) Cuando cambia una variable</li>
                        <li>D) Solo una vez al montar el componente </li> ✅
                    </ul>
                </li>

                <li>
                    ¿Qué hace este código?
                    <pre>{`useEffect(() => {
console.log("Hola");
}, [contador]);`}</pre>
                    <ul>
                        <li>A) Imprime “Hola” cada vez que cambia el estado contador ✅ </li>
                        <li>B) Se ejecuta solo una vez</li>
                        <li>C) No hace nada</li>
                        <li>D) Se ejecuta al cerrar el componente</li>
                    </ul>
                </li>

                <li>
                ¿Cuál hook usarías para evitar pasar props manualmente entre muchos componentes?
                        <ul>
                            <li>A. useRef</li>
                            <li>B. useContext</li> ✅
                            <li>C. useEffect</li>
                        </ul>
                </li>
                <li>
                ¿Qué hook se usa para acceder directamente al DOM?
                <ul>
                            <li>A. useReducer</li>
                            <li>B. useState</li>
                            <li>C. useRef</li> ✅
                        </ul>
                </li>
                <li>
                ¿Cuál es útil cuando tienes muchas acciones que afectan el mismo estado?
                <ul>
                            <li>A. useReducer</li> ✅
                            <li>B. useEffect</li>
                            <li>C. useContext</li>
                        </ul>
                </li>
                <li>
                ¿Qué NO hace useRef?
                <ul>
                            <li>A. Guarda valores entre renders</li>
                            <li>B. Provoca re-render al cambiar</li> ✅
                            <li>C. Puede apuntar a los elementos del DOM</li>
                        </ul>
                </li>
                <li>
                ¿Cuál de estos hooks sería ideal para manejar un modo claro/oscuro en una app?
                <ul>
                            <li>A. useReducer</li>
                            <li>B.useRef</li>
                            <li>C.useContext</li> ✅
                        </ul>
                </li>
            </ol>
        </div>
    )
}

export default Cuestionario