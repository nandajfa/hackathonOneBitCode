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
        onClick={toggleMenu}
      >
        <a
          href="#main"
          className="nav-link"
          aria-label="Section Main"
          aria-current={currentPage === '#main' ? 'page' : null}
        >
          HOME
        </a>
        <a
          href="#about"
          className="nav-link"
          aria-label="Section About"
          aria-current={currentPage === '#about' ? 'page' : null}
        >
          about
        </a>
        <a
          href="#benefits"
          className="nav-link"
          aria-label="Section Benefits"
          aria-current={currentPage === '#benefits' ? 'page' : null}
        >
          benefits
        </a>
        <a
          href="#sec-price"
          className="nav-link"
          aria-label="Section Prices"
          aria-current={currentPage === '#price' ? 'page' : null}
        >
          Price
        </a>
        <a
          href="/schedule"
          className="nav-link"
          aria-label="Schedules page"
          aria-current={currentPage === '/schedules' ? 'page' : null}
        >
          SCHEDULES
        </a>
      </nav>
      <a
        href="/sign-up"
        className="nav-link right"
        aria-label="Sign-up page"
        aria-current={currentPage === '/sign-up' ? 'page' : null}
      >
        SIGN UP
      </a>
      <button
        className="menu-icon"
        aria-label="Menu sandwich"
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </header>
  )
}

export default Header
