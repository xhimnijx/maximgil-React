import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <Link to="/" className="footer4-navlink1 thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text3">Home</span>
                </Fragment>
              )}
            </Link>
            <Link to="/about" className="footer4-navlink2 thq-body-small">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text1">About Me</span>
                </Fragment>
              )}
            </Link>
            <Link to="/contact" className="footer4-navlink3 thq-body-small">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text2">Contact</span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link2: undefined,
  link3: undefined,
  link1: undefined,
}

Footer4.propTypes = {
  link2: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
}

export default Footer4
