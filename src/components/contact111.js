import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact111.css'

const Contact111 = (props) => {
  return (
    <div className="contact111-container thq-section-padding">
      <div className="contact111-max-width thq-section-max-width">
        <div className="contact111-section-title">
          <div className="contact111-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact111-text20">Contact Maxim</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact111-text26">
                    Feel free to reach out to Maxim for collaborations,
                    inquiries, or just to say hello!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact111-content2 thq-flex-row">
          <div className="contact111-content3">
            <div className="contact111-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact111-contact-info1">
                <h3 className="contact111-text12 thq-heading-3">Email</h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact111-text23">
                        You can also connect with Maxim on social media:
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact111-text24">
                        maxim.portfolio@example.com
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact111-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact111-contact-info2">
                <h3 className="contact111-text14 thq-heading-3">Phone</h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact111-text25">
                        LinkedIn: linkedin.com/maximportfolio
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact111-text22">
                        +1 (123) 456-7890
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact111-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact111-contact-info3">
                <h3 className="contact111-text17 thq-heading-3">Location</h3>
                <p className="thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact111-text21">
                        Twitter: @maximportfolio
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact111-text19">
                        123 Main Street, Exeter, NH, 03833
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <iframe
            src={props.location1GoogleMap}
            title="Map"
            className="contact111-iframe thq-img-ratio-16-9"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Contact111.defaultProps = {
  address1: undefined,
  heading1: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50357.2500089328!2d-3.5547468389937062!3d50.72447527707012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c52c4d4498da7%3A0xa976e3256bdfad1e!2sExeter!5e1!3m2!1sen!2suk!4v1736615040815!5m2!1sen!2suk',
  content5: undefined,
  phone1: undefined,
  content2: undefined,
  email: undefined,
  content3: undefined,
  content1: undefined,
}

Contact111.propTypes = {
  address1: PropTypes.element,
  heading1: PropTypes.element,
  location1GoogleMap: PropTypes.string,
  content5: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  email: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact111
