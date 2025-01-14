import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content1">
          <div className="features18-section-title">
            <span className="thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features18-text5">
                    Exploring the Future of AI
                  </span>
                </Fragment>
              )}
            </span>
            <div className="features18-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features18-text4">SST Project</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features18-text6">
                      Maxim&apos;s SST project focuses on developing innovative
                      solutions in the field of artificial intelligence, pushing
                      the boundaries of technology.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature1ImageAlt: 'AI Project Image',
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDcwN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Features18.propTypes = {
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default Features18
