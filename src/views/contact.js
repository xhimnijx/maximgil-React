import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Contact111 from '../components/contact111'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - maximgil</title>
        <meta property="og:title" content="Contact - maximgil" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">#projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">About Me</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Projects</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">Contact Me</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="contact-text20">
              Welcome to Maxim&apos;s Portfolio
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21">Learn more about Maxim</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">
              Explore Maxim&apos;s Projects
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23">Get in touch with Maxim</span>
          </Fragment>
        }
      ></Navbar8>
      <Contact111
        email={
          <Fragment>
            <span className="contact-text24">maxim@maximgil.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text25">+1 (123) 456-7890</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text26">Exeter, Devon</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27">
              Feel free to reach out to Me for collaborations, inquiries, or
              just to say hello!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text28">
              You can also connect with me on social media:
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text29">Instagram: maxim.gil_</span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text30">
              Not available for in person, but based in Exeter.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text31">Contact Me</span>
          </Fragment>
        }
      ></Contact111>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text32">Projects</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text33">About Me</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text34">Contact</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
