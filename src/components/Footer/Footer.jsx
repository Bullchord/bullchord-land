import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo3 from '../../assets/logoblack.png'
// import BullInput from '../../BullInput'
import telegram from '../../assets/ftele.png'
import medium from '../../assets/fmedium.svg'
import twitter from '../../assets/ftwitter.svg'
import discord from '../../assets/Fdiscord.svg'

const Footer = () => {
  const [emailList, setEmaillist] = useState('')
  const addToEmail = () => {
    console.log(emailList)
    setEmaillist('')
  }
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo3} alt="" />
            <p>
              Bullchord is a dedicated decentralized music NFT and metaverse
              ecosystem. We aim to change the sphere of music.
            </p>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-top">
              <div className="right-menu">
                <h3>MENU</h3>
                <Link to="/tokenomics">TOKEN</Link>
                <Link to={'/docs'}>ROADMAP</Link>
                <Link to={'./artisteform'}>ARTISTE</Link>
              </div>
              <div className="left-menu">
                <h3>COMPANY</h3>
                <Link>WHITEPAPER</Link>
                <Link to={'./team'}>TEAM</Link>
              </div>
            </div>
            <div className="footer-menu-down">
              <h3>OUR COMMUNITY</h3>
              <div className="social-networks">
                <a href="#">
                  <img src={telegram} alt="" />
                </a>
                <a
                  href="https://medium.com/@bullchord"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={medium} alt="" />
                </a>
                <a
                  href="https://twitter.com/bullchord"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" />
                </a>
                <a
                  href="https://discord.gg/bPzTeDke2h"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={discord} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2023 Bullchord. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
