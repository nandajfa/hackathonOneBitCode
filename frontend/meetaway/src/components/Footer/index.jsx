import React from 'react'
import './style.css'
import meetaway from '../../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer" aria-label="Rodapé da página">
      <div className="container-footer">
        <img src={meetaway} alt="Logo" className="footer-logo" />
        <div className="social-icons" aria-label="Redes Sociais">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            <span className="sr-only">YouTube</span>
          </a>
        </div>
      </div>
      <p className="rights" role="contentinfo" aria-label="Direitos reservados">
        Todos os direitos reservados <FontAwesomeIcon icon={faCopyright} />
      </p>
    </footer>
  )
}

export default Footer
