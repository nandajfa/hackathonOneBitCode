import React from 'react'
import meeting from '../../assets/meeting.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faExchange,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'

const Benefits = () => {
  return (
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
                Whether you offer in-person appointments, virtual consultations,
                classes, or workshops, flexible scheduling software adapts to
                your business model.
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
  )
}

export default Benefits
