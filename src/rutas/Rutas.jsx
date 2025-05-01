import React from 'react'
import { Routes, Route , Link } from 'react-router-dom'

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
                <Route path="/" element={<h2>Bienvenido a la página de inicio</h2>} />
                <Route path="/acerca" element={<h2>Estos son nuestros productos</h2>} />
                <Route path="/contacto" element={<h2>Contáctanos</h2>} />
           </Routes>     
        </div>
    </div>
  )
}

export default Rutas