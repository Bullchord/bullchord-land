import React from 'react'
import './docs.css'
import qRule from '../../assets/quarterrule.svg'
import quarters1 from '../../assets/quarter1.svg'
import quarters2 from '../../assets/quarter2.svg'
import quarters3 from '../../assets/quarter3.svg'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import 'react-html5video/dist/styles.css'
import Colorful from '../../assets/colorful.mp4'
// import { artisteData } from './data'

// import twitter from '../../assets/twitter1.svg'
// import tiktok from '../../assets/tiktok1.svg'
// import insta from '../../assets/insta.svg'

const Docs = () => {
  return (
    <>
      <div className="hero-main">
        <div className="bull3_vid-banner-doc">
          <Video className="video" autoPlay loop muted>
            <source src={Colorful} type="video/mp4" />
          </Video>
          <h1>Roadmap</h1>
        </div>
        <div className="quarters-a">
          <h2>Q1 -2023</h2>
          <div className="quarters-timeline">
            <img src={qRule} alt="quarters rule" />
            <div className="timeline-text">
              <p className="q1">Bullchord Landing page Website</p>
              <p className="q1">Process & technical documentation</p>
              <p className="q1">Market research & structure </p>
              <p className="q1">Artists whitelist</p>
            </div>
          </div>
        </div>
        <div className="main-designs">
          <img src={quarters1} alt="" />
        </div>
        <div className="quarters-2">
          <h2>Q2 -2023</h2>

          <div className="quarters-timeline">
            <div className="timeline-text">
              <p>Launchpad</p>
              <p>Dex listing</p>
              <p>Liquidity lock</p>
              <p>Listing on Coinmarketscap & Coingecko</p>
            </div>
            <img src={qRule} alt="quarters rule" />
          </div>
        </div>
        <div className="main-designs-2">
          <img src={quarters2} alt="" />
        </div>
        <div className="quarters-c">
          <h2>Q3 -2023</h2>
          <div className="quarters-timeline">
            <img src={qRule} alt="quarters rule" />

            <div className="timeline-text">
              <p>Marketplace Launch</p>
              <p>Mobile apps beta release ( ANDROID)</p>
              <p>Massive artist onboarding</p>
              <p>Celebrity Anni. feature</p>
            </div>
          </div>
        </div>
        <div className="main-designs-3">
          <img src={quarters3} alt="" />
        </div>
        <div className="quarters-d">
          <h2>Q4 -2023</h2>
          <div className="quarters-timeline">
            <div className="timeline-text">
              <p>Music Gems.</p>
              <p>Decentralized Chord Reward(DCR) </p>
              <p> Bullchord music explorer.</p>
              <p>Listing on CEX</p>
            </div>
            <img src={qRule} alt="quarters rule" />
          </div>
        </div>
      </div>
      <div className="bull3_roadmap-down">
        <p>
          Bullchord is a powerful music platform for musicians to create an
          empowering experience for listeners. Every expert of the platform is
          designed from the ground up to support better music scalin
        </p>
      </div>

      {/* <div className="social-handles">
        <img src={tiktok} alt="" />
        <img src={twitter} alt="" />
        <img src={insta} alt="" />
      </div> */}
    </>
  )
}

export default Docs
