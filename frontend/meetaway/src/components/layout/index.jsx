import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { isTokenExpired } from '../../utils/jwt-decode'
import FailureNotification from '../Notification/FailureNotification'
import HeaderPrivate from '../HeaderPrivate'
import { logout } from '../../services/auth'
import Footer from '../Footer'
import './style.css'

function Dashboard() {
  
  useEffect(() => {
    if (isTokenExpired()) {
      FailureNotification({
        message: 'Sessão encerrada',
        description: 'Por favor, faça login novamente.',
      });
      logout();
    }
  }, []);

  return (
    <Layout>
      <HeaderPrivate />
      
        <div>Hello</div>
  
<Footer/>
    </Layout>
  )
}

export default Dashboard
