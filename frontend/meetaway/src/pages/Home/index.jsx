import React from 'react'
import calendar from '../../assets/calendar.jpg'
import meeting from '../../assets/meeting.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faGlobe,
  faDollar,
  faClock,
  faExchange,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>
      <Header />

      <main role="main" id="home" className="main">
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
            <div class="button-container" aria-label="Button Actions">
              <a href="/sign-up" class="button" aria-label="Sign Up Button">
                GET STARTED NOW
              </a>
              <a
                href="#learn-more"
                class="outline-button"
                aria-label="Learn More Button"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </main>
      <section id="about" className="about common">
        <div className="w-col">
          <img
            className="image-crop"
            src={calendar}
            alt="A person holding a pen above a tablet displaying a calendar, with a notebook and coffee cup nearby."
          />
        </div>
        <div className="w-col w-col-5">
          <h2>About</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon className="icons" icon={faCalendar} />
              </div>
              <div className="feature-content">
                <div className="feature-text title">Effortless Scheduling.</div>
                <div className="feature-text">
                  Say goodbye to endless email exchanges to find the perfect
                  meeting time. With our automated scheduling platform, you can
                  book meetings hassle-free.
                </div>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon className="icons" icon={faGlobe} />
              </div>
              <div className="feature-content">
                <div className="feature-text title">Accessible Anywhere.</div>
                <div className="feature-text">
                  Take your scheduling with you! Our system is accessible on any
                  device, so you can manage your calendar wherever you are.
                </div>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon className="icons" icon={faDollar} />
              </div>
              <div className="feature-content">
                <div className="feature-text title">
                  Straightforward Pricing.
                </div>
                <div className="feature-text">
                  No need to worry about complex fees. Our pricing policy is
                  straightforward and transparent.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="benefits" className="benefits common">
        <div className="w-col w-col-5">
          <h2>Benefits</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon className="icons" icon={faClock} />
              </div>
              <div className="feature-content">
                <div className="feature-text title">
                  {' '}
                  Efficiency and Time Savings.
                </div>
                <div className="feature-text">
                  A scheduling solution eliminates the need for manual booking
                  processes, saving valuable time and enhances overall
                  productivity.
                </div>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon className="icons" icon={faExchange} />
              </div>
              <div className="feature-content">
                <div className="feature-text title">Flexibility.</div>
                <div className="feature-text">
                  Whether you offer in-person appointments, virtual
                  consultations, classes, or workshops, flexible scheduling
                  software adapts to your business model.
                </div>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon className="icons" icon={faChartLine} />
              </div>
              <div className="feature-content">
                <div className="feature-text title">Business Growth.</div>
                <div className="feature-text">
                  With more efficient scheduling, you can focus on delivering
                  quality services and growing your brand.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-col">
          <img
            className="image-crop img"
            src={meeting}
            alt="A person holding a pen above a tablet displaying a calendar, with a notebook and coffee cup nearby."
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
