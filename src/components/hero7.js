import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content">
          <h1 className="hero7-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero7-text3">
                  Maxim&apos;s Portfolio: Where Science and Technology Meet
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero7-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero7-text4">
                  Explore Maxim&apos;s innovative projects at the intersection
                  of science, AI, and technology.
                </span>
              </Fragment>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

Hero7.defaultProps = {
  heading1: undefined,
  content1: undefined,
}

Hero7.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero7
