import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import {  LogoutOutlined, PoweroffOutlined } from '@ant-design/icons'
import { logout } from '../../services/auth'
import SuccessNotification from '../Notification/SuccessNotification'

const HeaderPrivate = () => {
  const navigate = useNavigate()
  const { confirm } = Modal;
  
  const handleLogout = async () => {
    confirm({
      title: 'Confirmar saída da conta',
      icon: <PoweroffOutlined />,
      content:
        'Tem certeza de que deseja sair da sua conta? Ao sair, você será desconectado e precisará fazer login novamente para acessar sua conta.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => onLogout(),
      onCancel: () => Modal.destroyAll(),
    });
  }

  const onLogout = () => {
    SuccessNotification({
      message: 'Sessão encerrada',
      description: 'A sua sessão foi encerrada.',
    });
    logout()
    navigate('/')
  };

  return (
    <header className="header-private" aria-label="Cabeçalho de navegação">
      <nav className="nav-hd" aria-label="Navegação principal">
      <Link
        to="/services"
        className="nav-link-hd"
        aria-current={window.location.pathname === '/services' ? 'page' : null}
      >
        Adicionar serviço
      </Link>
      <Link
        to="/edit-services"
        className="nav-link-hd"
        aria-current={window.location.pathname === '/edit-services' ? 'page' : null}
      >
        Editar serviço
      </Link>
      <Link
        to="/availability"
        className="nav-link-hd"
        aria-current={window.location.pathname === '/availability' ? 'page' : null}
      >
        Disponibilidade
      </Link>
      <Link
        to="/manager"
        className="nav-link-hd"
        aria-current={window.location.pathname === '/manager' ? 'page' : null}
      >
        Gestão de agendamentos
      </Link>
      <Link
        to="/link"
        className="nav-link-hd"
        aria-current={window.location.pathname === '/link' ? 'page' : null}
      >
        Compartilhar Link
      </Link>
    
       <div  className="logout-button">
       <Button type="primary" shape="circle" icon={<LogoutOutlined />} onClick={handleLogout} />
    
       </div>
      </nav>
    </header>
  )
}

export default HeaderPrivate
