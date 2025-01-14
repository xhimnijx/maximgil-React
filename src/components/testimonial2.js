import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial2.css'

const Testimonial2 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial2-max-width thq-section-max-width">
        <div className="testimonial2-stars">
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <p className="testimonial2-text1 thq-body-large">
          {props.review1 ?? (
            <Fragment>
              <span className="testimonial2-text5">
                Maxim&apos;s dedication to pushing the boundaries of AI and
                technology is truly inspiring. His projects demonstrate a deep
                understanding of complex concepts and a knack for innovation.
              </span>
            </Fragment>
          )}
        </p>
        <div className="testimonial2-avatar">
          <img
            alt={props.author1Alt}
            src={props.author1Src}
            className="testimonial2-avatar-image thq-img-ratio-1-1 thq-img-round"
          />
          <div className="testimonial2-avatar-content">
            <span className="testimonial2-text2 thq-body-small">
              {props.author1Name ?? (
                <Fragment>
                  <span className="testimonial2-text4">Dr. Rebecca Smith</span>
                </Fragment>
              )}
            </span>
            <span className="testimonial2-text3 thq-body-small">
              {props.author1Position ?? (
                <Fragment>
                  <span className="testimonial2-text6">
                    Chief Scientist at Tech Innovations Inc.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <img
            alt={props.company1LogoAlt}
            src={props.company1LogoSrc}
            className="testimonial2-logo"
          />
        </div>
      </div>
    </div>
  )
}

Testimonial2.defaultProps = {
  author1Name: undefined,
  author1Alt: 'Dr. Rebecca Smith, Chief Scientist at Tech Innovations Inc.',
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1535230464639-a413d00b9934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDcwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company1LogoAlt: 'Tech Innovations Inc. Logo',
  author1Position: undefined,
}

Testimonial2.propTypes = {
  author1Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author1Position: PropTypes.element,
}

export default Testimonial2
