import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Price from '../../components/Price'
import About from '../../components/About'
import Benefits from '../../components/Benefits'
import './style.css'

const Home = () => {
  return (
    <div>
      <Header />

      <main role="main" id="main" className="main">
        <div className="background-image">
          <div className="container-main">
            <h1 className="small-heading">Time Scheduling IS NOW</h1>
            <h1 className="huge-heading">
              Smart &amp; <br />
              Efficient
            </h1>
            <p className="subtitle" aria-label="Subtitle Description">
              Meetaway: Elevating Scheduling to New Heights!
            </p>
            <div className="button-container" aria-label="Button Actions">
              <a href="/sign-up" class="button" aria-label="Sign Up Button">
                GET STARTED NOW
              </a>
              <a
                href="/login"
                className="outline-button"
                aria-label="Learn More Button"
              >
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </main>

      <About />
      <Benefits />
      <Price />

      <Footer />
    </div>
  )
}

export default Home
