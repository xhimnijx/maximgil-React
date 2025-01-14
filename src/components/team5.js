import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team5.css'

const Team5 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team5-max-width thq-section-max-width">
        <div className="team5-section-title">
          <span className="thq-body-small team5-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="team5-text29">Join Our Team Today!</span>
              </Fragment>
            )}
          </span>
          <button className="team5-button thq-button-filled">
            <span className="thq-body-small">
              {props.actionContent ?? (
                <Fragment>
                  <span className="team5-text40">Open positions</span>
                </Fragment>
              )}
            </span>
          </button>
          <div className="team5-content1">
            <h2 className="thq-heading-2 team5-text12">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team5-text41">Meet our team</span>
                </Fragment>
              )}
            </h2>
            <p className="team5-text13 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="team5-text38">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team5-content2">
          <div className="team5-row1">
            <div className="team5-container1">
              <div className="team5-card1">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team5-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content3">
                  <div className="team5-title1">
                    <span className="team5-text14 thq-body-small">
                      {props.member1 ?? (
                        <Fragment>
                          <span className="team5-text26">Maxim</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team5-text15 thq-body-small">
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="team5-text34">AI Researcher</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team5-text16 thq-body-small">
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="team5-text27">
                          Maxim is a passionate AI researcher with a strong
                          background in physics and a focus on AI projects like
                          SST and TTS technologies.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card2">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="team5-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content4">
                  <div className="team5-title2">
                    <span className="team5-text17 thq-body-small">
                      {props.member2 ?? (
                        <Fragment>
                          <span className="team5-text39">Sophie</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team5-text18 thq-body-small">
                      {props.member2Job ?? (
                        <Fragment>
                          <span className="team5-text33">
                            Software Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team5-text19 thq-body-small">
                    {props.member2Content ?? (
                      <Fragment>
                        <span className="team5-text37">
                          Sophie is a skilled software engineer with expertise
                          in developing cutting-edge technology solutions.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="team5-row2">
            <div className="team5-container2">
              <div className="team5-card3">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="team5-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content5">
                  <div className="team5-title3">
                    <span className="team5-text20 thq-body-small">
                      {props.member3 ?? (
                        <Fragment>
                          <span className="team5-text31">Elena</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team5-text21 thq-body-small">
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="team5-text36">Data Scientist</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team5-text22 thq-body-small">
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="team5-text35">
                          Elena is a talented data scientist who excels in
                          analyzing complex datasets to derive valuable
                          insights.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card4">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="team5-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content6">
                  <div className="team5-title4">
                    <span className="team5-text23 thq-body-small">
                      {props.member4 ?? (
                        <Fragment>
                          <span className="team5-text30">Alex</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team5-text24 thq-body-small">
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="team5-text28">
                            Machine Learning Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team5-text25 thq-body-small">
                    {props.member4Content ?? (
                      <Fragment>
                        <span className="team5-text32">
                          Alex is a machine learning specialist with a knack for
                          developing innovative ML models for various
                          applications.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team5.defaultProps = {
  member1: undefined,
  member1Content: undefined,
  member4Job: undefined,
  content1: undefined,
  member4: undefined,
  member3: undefined,
  member4Content: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1557245419-a727f9b57615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1504834636679-cd3acd047c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Job: undefined,
  member3Content: undefined,
  member3Alt: 'Image of Elena',
  member3Job: undefined,
  member2Content: undefined,
  content2: undefined,
  member1Alt: 'Image of Maxim',
  member4Alt: 'Image of Alex',
  member3Src:
    'https://images.unsplash.com/photo-1484191025110-4043236d4cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDcwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member2: undefined,
  member2Alt: 'Image of Sophie',
  member2Src:
    'https://images.unsplash.com/photo-1475021200099-fd2cbb889dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDcwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  actionContent: undefined,
  heading1: undefined,
}

Team5.propTypes = {
  member1: PropTypes.element,
  member1Content: PropTypes.element,
  member4Job: PropTypes.element,
  content1: PropTypes.element,
  member4: PropTypes.element,
  member3: PropTypes.element,
  member4Content: PropTypes.element,
  member4Src: PropTypes.string,
  member2Job: PropTypes.element,
  member1Src: PropTypes.string,
  member1Job: PropTypes.element,
  member3Content: PropTypes.element,
  member3Alt: PropTypes.string,
  member3Job: PropTypes.element,
  member2Content: PropTypes.element,
  content2: PropTypes.element,
  member1Alt: PropTypes.string,
  member4Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member2: PropTypes.element,
  member2Alt: PropTypes.string,
  member2Src: PropTypes.string,
  actionContent: PropTypes.element,
  heading1: PropTypes.element,
}

export default Team5
