import React, { useState, useEffect } from 'react'
import './style.css'
import { Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isTokenExpired } from '../../utils/jwt-decode'
import FailureNotification from '../../components/Notification/FailureNotification'
import SuccessNotification from '../../components/Notification/SuccessNotification'
import { PoweroffOutlined } from '@ant-design/icons'
import { logout } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import {
  faAngleLeft,
  faHouse,
  faClock,
  faCalendarDays,
  faRightFromBracket,
  faPlus,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (isTokenExpired()) {
      FailureNotification({
        message: 'Sessão encerrada',
        description: 'Por favor, faça login novamente.'
      })
      logout()
    }
  }, [])

  const handleLogout = async () => {
    Modal.confirm({
      title: 'Confirmar saída da conta',
      icon: <PoweroffOutlined />,
      content:
        'Tem certeza de que deseja sair da sua conta? Ao sair, você será desconectado e precisará fazer login novamente.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => onLogout(),
      onCancel: () => Modal.destroyAll()
    })
  }

  const onLogout = () => {
    SuccessNotification({
      message: 'Sessão encerrada',
      description: 'A sua sessão foi encerrada.'
    })
    logout()
    navigate('/')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleItemClick = item => {
    setSelectedItem(item)
  }

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className={`logo-h2 ${menuOpen ? '' : 'hide'}`}>meetaway</h2>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={`menu-toggle-left ${
              menuOpen ? '' : 'menu-toggle-left-hide'
            }`}
            onClick={toggleMenu}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`menu-toggle-right ${
              menuOpen ? '' : 'menu-toggle-right-hide'
            }`}
            onClick={toggleMenu}
          />
        </div>
        <ul className={!menuOpen ? 'hide-text' : ''}>
          <button onClick={() => handleItemClick('New')} className="btn-menu">
            <FontAwesomeIcon className="icon" icon={faPlus} />
            <span>Add service</span>
          </button>
          <li onClick={() => handleItemClick('Home')}>
            <FontAwesomeIcon className="icon" icon={faHouse} />
            <span>Home</span>
          </li>
          <li onClick={() => handleItemClick('About')}>
            <FontAwesomeIcon className="icon" icon={faClock} />
            <span>Availability</span>
          </li>
          <li onClick={() => handleItemClick('Contact')}>
            <FontAwesomeIcon className="icon" icon={faCalendarDays} />
            <span>Schedules</span>
          </li>

          <FontAwesomeIcon
            className="logout"
            icon={faRightFromBracket}
            onClick={handleLogout}
          />
        </ul>
      </div>
      <div className="content">
        <div className="page-content">
          {selectedItem === 'New' && <p>Conteúdo da Página New</p>}
          {selectedItem === 'Home' && <p>Conteúdo da Página Home</p>}
          {selectedItem === 'About' && <p>Conteúdo da Página About</p>}
          {selectedItem === 'Contact' && <p>Conteúdo da Página Contact</p>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
