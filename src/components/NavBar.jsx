import React, { Fragment } from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='NavBar'>
        <ul className="list-group menu">
            <li className="list-group-item options">HOME</li>
            <li className="list-group-item options">PERFIL</li>
            <li className="list-group-item options">STOCK</li>
            <li className="list-group-item options">PRODUCTOS</li>
            <li className="list-group-item options">¿QUIÉNES SOMOS?</li>
            <li className="list-group-item options">CONTÁCTANOS</li>
        </ul>

      </div>

  )
}

export default NavBar