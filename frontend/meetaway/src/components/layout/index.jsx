import React, { useEffect } from 'react'
import { Layout, Menu, Modal } from 'antd'
import { logout } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import { isTokenExpired } from '../../utils/jwt-decode'
import FailureNotification from '../Notification/FailureNotification'
import SuccessNotification from '../Notification/SuccessNotification'
import {
  CalendarOutlined,
  ScheduleOutlined,
  PlusOutlined,
  EditOutlined,
  LogoutOutlined,
  PoweroffOutlined
} from '@ant-design/icons'


const { Sider, Content } = Layout

function Dashboard() {
  const { confirm } = Modal;
  
  useEffect(() => {
    if (isTokenExpired()) {
      FailureNotification({
        message: 'Sessão encerrada',
        description: 'Por favor, faça login novamente.',
      });
      logout();
    }
  }, []);
  
  const navigate = useNavigate()
  
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

  const menuStyle = {
    background: '#457b9d'
  }
  const menuItemStyle = {
    color: ' #1d3557'
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={menuStyle}>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={menuStyle}>
            <Menu.Item key="1" icon={<PlusOutlined />} style={menuItemStyle}>
            <span>Adicionar Serviço</span>
            </Menu.Item>
            <Menu.Item key="2" icon={<EditOutlined />} style={menuItemStyle}>
            <span>Editar Serviço</span>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<CalendarOutlined />}
              style={menuItemStyle}
            >
              <span>Definir Disponibilidade</span>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<ScheduleOutlined />}
              style={menuItemStyle}
            >
              <span>Gestão de Agendamentos</span>
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<LogoutOutlined />}
              style={menuItemStyle}
              onClick={handleLogout}
            >
              <span>Sair</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              {/* Aqui você pode adicionar o conteúdo específico de cada tela do dashboard */}
              {/* Por exemplo, para a tela de adicionar serviço, você pode adicionar o formulário */}
              {/* Para a tela de calendário, você pode adicionar o componente do calendário */}
              {/* E assim por diante */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Dashboard
