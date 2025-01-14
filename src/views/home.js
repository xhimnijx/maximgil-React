import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>maximgil</title>
        <meta property="og:title" content="maximgil" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">#projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">About Me</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Projects</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Contact Me</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="home-text20">
              Welcome to Maxim&apos;s Portfolio
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Learn more about Maxim</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Explore Maxim&apos;s Projects</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Get in touch with Maxim</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">About Me</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Contact Me</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              My personal portfolio of my hobbies and interests.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">Maxim Gil</span>
          </Fragment>
        }
        image1Src="/Home/360080196_945555259893683_5710590018758134592_n-1500w.jpg"
        image2Src="/Home/369315381_311722847882061_9086941648679422154_n-1500w.jpg"
        image3Src="/Home/387531025_311377184859602_3687752357132267268_n-1500w.jpg"
        image7Src="/Home/472211179_10162773845518523_6331660597304395155_n-1500w.jpg"
        image8Src="/Home/471172342_10162710516598523_2244067016764780699_n-1500w.jpg"
        image9Src="/Home/c0fc026a-139b-416d-95e9-f3ba935a2ad2-1500w.jpg"
        image10Src="/471587006_10162719690758523_3272477331405566833_n-1500w.jpg"
        image11Src="/468807239_10162077288545837_2012219887287651868_n-1500w.jpg"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28">A Level Student</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Tech Enthusiast</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">AI Projects</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              Studying Maths, Further Maths, Computer Science and Physics.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              Diving into the world of technology and innovation.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              Exploring the possibilities of AI in everyday life.
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text34">A Level Student</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text35">AI Projects (SST/TTS)</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text36">Exeter Identity</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text37">
              I have a strong foundation in the Sciences, having excelled in my
              GCSEs. My understanding of fundamental principles allows me to
              approach technical projects with a scientific mindset.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38">
              I have actively worked on AI projects, particularly in the areas
              of Speech-to-Text (SST) and Text-to-Speech (TTS) technologies. My
              passion for artificial intelligence drives me to explore
              innovative solutions in this field.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39">
              Being a student at Exeter, I embody the spirit of academic
              excellence and innovation that the institution stands for. My
              experiences at Exeter have shaped my perspective on technology and
              science.
            </span>
          </Fragment>
        }
      ></Features25>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text40">
              Exeter, Devon&apos;s capital, blends Roman history with modern
              life. Explore the magnificent cathedral, wander the historic
              quayside, and enjoy a vibrant city with excellent shopping and
              dining.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text41">Location</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text42">Exeter</span>
          </Fragment>
        }
        location2ImageSrc="https://images.unsplash.com/photo-1713039677353-d93496e5da44?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjYxNDQxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text43">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text44">About Me</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text45">Contact</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
