import React from 'react';
import './footer.css'
import logo3 from '../../assets/logowhite.png';
// import BullInput from '../../BullInput'
import telegram from '../../assets/telegram.png';
import medium from '../../assets/medium.svg';
// import youtube from '../../Assets/images/youtube.svg'
import twitter from '../../assets/twitter.svg';
import discord from '../../assets/discord.svg';

const Footer = () => {
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
            <div className="footer-input">
              <h2>Stay up to date</h2>
              {/* <BullInput /> */}
            </div>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-top">
              <div className="right-menu">
                <h3>MENU</h3>
                <p>TOKEN</p>
                <p>ROADMAP</p>
                <p>ARTISTE</p>
              </div>
              <div className="left-menu">
                <h3>COMPANY</h3>
                <p>WHITEPAPER</p>
                <p>TEAM</p>
              </div>
            </div>
            <div className="footer-menu-down">
              <h2>OUR COMMUNITY</h2>
              <div className="social-networks">
                <img src={telegram} alt="" />
                <img src={medium} alt="" />
                <img src={twitter} alt="" />
                {/* <img src={youtube} alt="" /> */}
                <img src={discord} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Footer
