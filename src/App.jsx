import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Principal from './Principal'
import Button from './Button'
import StringProps from './props/StringProps'
import NumberProps from './props/NumberProps'
import BooleanProp from './props/BooleanProp'
import ObjectProp from './props/ObjectProp'
import ArrayProps from './props/ArrayProps'
import FuncionProp from './props/FuncionProp'
import Desestructuracion from './Desestructuracion'
import HooksDemo from './hooks/HooksDemo'

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
  const usuario={nombre:'Ximena', imagen:'👩‍🦰', pais:'Argentina'}
  const hoobies=['Leer', 'Programar','Caminar','Bailar']

  const handleSaludo=(nombre)=>alert(`Hola!, ${nombre} Bienvenidos a la clase de React`)

  const Skill=({skill})=><p>{skill}</p>

  const Skills =({skills})=>skills.map((skill,index)=><Skill key={index} skill={skill}></Skill>)


  return (
    <>
    <StringProps mensaje='Hola mundo desde props!'/>
    <NumberProps edad={25}/>
    <BooleanProp esEstudiante={true}/>
    <ObjectProp usuario={usuario}/>
    <ArrayProps hobbies={hoobies}/>
   <FuncionProp saludar={handleSaludo}/> 
   <Skills skills={['HTML','CSS','JAVASCRIPT','REACT']}/>
    <Desestructuracion/>
    <HooksDemo/>
    {/* <Header 
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
      {parrafo} */}
    </>
  )
}

export default App
