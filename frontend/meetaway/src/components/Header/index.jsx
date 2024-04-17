import React, { useState } from 'react'
import './style.css'

const Header = () => {
  const currentPage = window.location.pathname
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible)
  }
  return (
    <header className="header" aria-label="Navigation header">
      <div class="logo-text" aria-label="Logo text meetaway">
        meetaway
      </div>

      <nav
        role="navigation"
        className={`nav-menu ${menuIsVisible ? 'show' : ''}`}
        aria-label="main menu"
      >
        <a
          href="/"
          aria-current={currentPage === '/' ? 'page' : null}
          className="nav-link"
        >
          HOME
        </a>
        <a
          href="#about"
          aria-current={currentPage === '#about' ? 'page' : null}
          className="nav-link"
        >
          about
        </a>
        <a
          href="#benefits"
          aria-current={currentPage === '#benefits' ? 'page' : null}
          className="nav-link"
        >
          benefits
        </a>
        <a
          href="#price"
          aria-current={currentPage === '#price' ? 'page' : null}
          className="nav-link"
        >
          Price
        </a>
        <a href="/schedules" className="nav-link">
          SCHEDULES
        </a>
      </nav>
      <a href="/sign-up" className="nav-link right" aria-label="Sign-up">
        SIGN UP
      </a>
      <button class="menu-icon" aria-label="Menu sandwich" onClick={toggleMenu}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </header>
  )
}

export default Header
