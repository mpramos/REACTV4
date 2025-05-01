import React from 'react'
import { Routes, Route , Link } from 'react-router-dom'
import Inicio from './Inicio'
import Acerca from './Acerca'
import Contacto from './Contacto'
import BotonLogin from './BotonLogin'

const Rutas = () => {
  return (
    <div>
        <h3>{'Rutas'.toUpperCase()}</h3>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/acerca">Acerca</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/acerca" element={<Acerca/>} />
                <Route path="/contacto" element={<Contacto/>} />
           </Routes>    
        </div>
        <div>
            <BotonLogin/>
        </div>
    </div>
  )
}

export default Rutas