import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero7 from '../components/hero7'
import Features1 from '../components/features1'
import Features18 from '../components/features18'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - maximgil</title>
        <meta property="og:title" content="About - maximgil" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12">#projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15">About Me</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16">Projects</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text18">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text19">Contact Me</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="about-text20">
              Welcome to Maxim&apos;s Portfolio
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text21">Learn more about Maxim</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text22">Explore Maxim&apos;s Projects</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text23">Get in touch with Maxim</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero7
        content1={
          <Fragment>
            <span className="about-text24">
              My hobbies, and some of my projects
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text25">About Me</span>
          </Fragment>
        }
      ></Hero7>
      <Features1
        mainAction={
          <Fragment>
            <span className="about-text26">View Projects</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text27">My Hobbies</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text28">Flying and Gliding</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text29">Climbing and Caving</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text30">Music</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text31">Learn More</span>
          </Fragment>
        }
        feature1ImageSrc="/Home/369315381_311722847882061_9086941648679422154_n-1400w.jpg"
        feature2ImageSrc="/471587006_10162719690758523_3272477331405566833_n-300h.jpg"
        feature1Description={
          <Fragment>
            <span className="about-text32">
              I am part of the Air Cadets (RAFAC) and first discovered my love
              for aviation at the young age of 4.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text33">
              My mother was always into these sports, and consequently passed
              them on to me, and I can say with confidence that I thank her
              dearly for that.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text34">
              During COVID-19, I had no option other than to pick up the guitar.
              One thing led to another and I still play to this day.
            </span>
          </Fragment>
        }
      ></Features1>
      <Features18
        feature1Title={
          <Fragment>
            <span className="about-text35">SST &amp; TTS AI Project</span>
          </Fragment>
        }
        feature1Slogan={
          <Fragment>
            <span className="about-text36">Exploring the Future of AI</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text37">
              I enjoy creating projects and incorporating AI into them. For
              example, my AI TTS &amp; STT project was very fun, and I am still
              adding features to this day, however I have not released the code
              until I am happy with it to be released to the public.
            </span>
          </Fragment>
        }
      ></Features18>
      <Contact11
        email={
          <Fragment>
            <span className="about-text38">maxim@maximgil.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="about-text39">+44 7708 260027</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="about-text40">Exeter, UK</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text41">
              Feel free to reach out for collaborations, inquiries, or just to
              say hello!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text42">
              I am looking forward to connecting with you.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text43">
              You can also follow me on social media for updates on my latest
              projects.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="about-text44">Let&apos;s innovate together!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text45">Contact Me</span>
          </Fragment>
        }
        location1GoogleMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50357.2500089328!2d-3.5547468389937062!3d50.72447527707012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c52c4d4498da7%3A0xa976e3256bdfad1e!2sExeter!5e1!3m2!1sen!2suk!4v1736615040815!5m2!1sen!2suk"
      ></Contact11>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text46">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text47">About Me</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text48">Contact</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
