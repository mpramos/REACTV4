import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Principal from './Principal'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)
  const parrafo= <p style={{backgroundColor:'blue', color:'white' }}>hola</p>
  let bienvenida='Bienvenidos a la especialidad de React'
  let titulo='Iniciando en React'
  let subtitulo='Libreria de JavaScript'
  let autor={
      nombre:'Evolutech',
      partner:'Cisco'
  }
  let año= new Date().getFullYear()
  return (
    <>
    <Header 
      bienvenida={bienvenida}
      titulo={titulo}
      subtitulo={subtitulo}
      autor={autor}
      año={año}
      />
    <Principal/>
    <Button/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {parrafo}
    </>
  )
}

export default App
