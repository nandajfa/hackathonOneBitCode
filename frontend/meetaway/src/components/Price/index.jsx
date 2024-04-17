import React from 'react'
import './style.css'

const Price = () => {
  return (
    <section id="sec-price" className="sec-price">
      <div className="container-price">
        <div className="title-price">
          <h2>Our pricing is simple</h2>
          <p>No commitments. No credit cards required. Start now!</p>
        </div>
        <div className="pricing-row w-row">
          <div className="w-col-p">
            <div className="pricing-column">
              <h3 className="plan-title">Free</h3>
              <div className="price">$0</div>
              <div className="per-month">PER MONTH</div>
              <div className="price-feature-list">
                <p className="price-feature">5 events to schedule.</p>
                <p className="price-feature">Email notifications.</p>
                <p className="price-feature">
                  Email Support for a single user.
                </p>
                <p className="price-feature deactivate">
                  Integration with external calendars.
                </p>
                <p className="price-feature deactivate">
                  Customization of the scheduling page.
                </p>
              </div>
              <a href="/sign-up" className="get-started-link princing">
                Get started now {' >'}
              </a>
            </div>
          </div>
          <div className="w-col-p">
            <div className="pricing-column">
              <h3 className="plan-title basic">Basic</h3>
              <div className="price">$15</div>
              <div className="per-month">PER MONTH</div>
              <div className="price-feature-list">
                <p className="price-feature">15 events to schedule.</p>
                <p className="price-feature">Email notifications.</p>
                <p className="price-feature">
                  Email Support for multiple users.
                </p>
                <p className="price-feature">
                  Integration with external calendars.
                </p>
                <p className="price-feature deactivate">
                  Customization of the scheduling page.
                </p>
              </div>
              <a href="/sign-up" className="get-started-link princing">
                Get started now {' >'}
              </a>
            </div>
          </div>
          <div className="w-col-p">
            <div className="pricing-column">
              <h3 className="plan-title ">Pro</h3>
              <div className="price">$30</div>
              <div className="per-month">PER MONTH</div>
              <div className="price-feature-list">
                <p className="price-feature">Unlimited events to schedule.</p>
                <p className="price-feature">Email notifications.</p>
                <p className="price-feature">
                  Priority support via email or chat.
                </p>
                <p className="price-feature">
                  Integration with external calendars.
                </p>
                <p className="price-feature">
                  Customization of the scheduling page.
                </p>
              </div>
              <a href="/sign-up" className="get-started-link princing">
                Get started now {' >'}
              </a>
            </div>
          </div>
        </div>
        <p className="support">Need help? Reach us at contact@meetaway.com</p>
      </div>
    </section>
  )
}

export default Price
