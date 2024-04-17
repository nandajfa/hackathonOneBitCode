import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer" aria-label="Page footer">
      <div className="container-footer">
        <div class="logo-text f-logo-text">meetaway</div>
        <div className="social-icons" aria-label="Social media">
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
        All rights reserved ©{new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
