import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <h2 className="thq-heading-2 features1-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text16">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features1-feature1-image thq-img-ratio-4-3"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text14">
                        Physics Foundation
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text12">
                        Maxim&apos;s strong background in physics drives his
                        innovative approach to projects.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text13">AI Projects</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text17">
                        Maxim&apos;s focus on AI projects like SST and TTS
                        showcases his passion for technology.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Academic Excellence
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text15">
                        As a student at Exeter, Maxim embodies academic
                        excellence and a commitment to innovation.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text11">View Projects</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text18">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: undefined,
  feature1ImageAlt: 'Physics Foundation Image',
  feature2ImageAlt: 'AI Projects Image',
  feature1Description: undefined,
  feature2Title: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    '/Home/369315381_311722847882061_9086941648679422154_n-1400w.jpg',
  feature3Description: undefined,
  sectionTitle: undefined,
  feature2Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1524511211957-e815c0ea84c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNTI4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1581092808365-07e3ac5960cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNTI4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Academic Excellence Image',
  secondaryAction: undefined,
  feature3Title: undefined,
}

Features1.propTypes = {
  mainAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature3Title: PropTypes.element,
}

export default Features1
