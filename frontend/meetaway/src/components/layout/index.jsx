import React from 'react'
import { Layout, Menu } from 'antd'
import { logout } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import {
  CalendarOutlined,
  ScheduleOutlined,
  PlusOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'

const { Sider, Content } = Layout

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    logout()
    navigate('/')
  }

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
              Adicionar Serviço
            </Menu.Item>
            <Menu.Item key="2" icon={<EditOutlined />} style={menuItemStyle}>
              Editar Serviço
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<CalendarOutlined />}
              style={menuItemStyle}
            >
              Definir Disponibilidade
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<ScheduleOutlined />}
              style={menuItemStyle}
            >
              Gestão de Agendamentos
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<LogoutOutlined />}
              style={menuItemStyle}
              onClick={handleLogout}
            >
              Sair
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
