import React from 'react'
import calendar from '../../assets/calendar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faGlobe,
  faDollar
} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
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
              <div className="feature-text title">Straightforward Pricing.</div>
              <div className="feature-text">
                No need to worry about complex fees. Our pricing policy is
                straightforward and transparent.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
