import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>ScisoAderezos</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/HELLMANNS">HellManns</Link></li>
            <li><Link className="menu-link" to="/productos/FANACOA">Fanacoa</Link></li>
            <li><Link className="menu-link" to="/productos/CADA DIA">Cada dia</Link></li>
            <li><Link className="menu-link" to="/productos/NATURA">NATURA</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar