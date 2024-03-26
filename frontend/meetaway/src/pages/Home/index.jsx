import React from 'react'
import schedule from '../../assets/schedule.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'

const Home = () => {
  return (
    <div>
      <Header />

      <main role="main" className="main">
        <div className="main-content">
          <h2 aria-label="Bem-vindo ao Meetaway">
            Bem-vindo ao Meetaway, sua solução de agendamento inteligente e
            eficiente!
          </h2>
          <div className="text" aria-describedby="meetawayDesc">
            Com Meetaway, você pode dizer adeus ao incômodo de trocar inúmeros
            e-mails para encontrar o horário perfeito. Nossa plataforma
            intuitiva permite que você compartilhe sua disponibilidade e agende
            reuniões com facilidade, sem a necessidade de intermináveis trocas
            de mensagens.
          </div>
          <p id="meetawayDesc" hidden>
            Descrição do Meetaway: uma plataforma de agendamento que facilita o
            processo de marcar reuniões sem a necessidade de trocar muitos
            e-mails.
          </p>
        </div>
        <div className="main-image">
          <img
            src={schedule}
            alt="Imagem de calendário com relogio ao fundo e pessoas agendando reuniões"
            className="image"
            width="700px"
            height="600px"
            aria-label="Imagem ilustrativa de agendamento"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
