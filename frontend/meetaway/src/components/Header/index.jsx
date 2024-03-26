import React from 'react'
import logo from '../../assets/smallLogo.png'
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header" aria-label="Cabeçalho de navegação">
      <div className="logo-container">
        <img src={logo} alt="Logo meetaway" className="logo" />
      </div>
      <nav className="nav" aria-label="Navegação principal">
        <Link
          to="/"
          className="nav-link"
          aria-current={window.location.pathname === '/' ? 'page' : null}
        >
          Home
        </Link>
        <Link
          to="/login"
          className="nav-link"
          aria-current={window.location.pathname === '/login' ? 'page' : null}
        >
          Fazer login
        </Link>
        <Link
          to="/register"
          className="nav-link"
          aria-current={window.location.pathname === '/signUp' ? 'page' : null}
        >
          Registrar
        </Link>
        <Link
          to="/schedule"
          className="nav-link"
          aria-current={
            window.location.pathname === '/schedule' ? 'page' : null
          }
        >
          Agendar
        </Link>
      </nav>
    </header>
  )
}

export default Header
