import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import './hero.css'
import sound2 from '../../assets/sound-sign1.svg'
import sound3 from '../../assets/sound-sign3.svg'
import Hicon1 from '../../assets/h-icon.svg'
import Hicon2 from '../../assets/h-icon2.png'
import Hicon3 from '../../assets/h-icon3.svg'
import girl from '../../assets/girl.mp4'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="bull3_video_home">
        <Video
          className="bull3_video-main"
          autoPlay
          loop
          muted
          controls={[
            'UnPlayPause',
            'UnSeek',
            'UnTime',
            'UnVolume',
            'UnFullscreen',
          ]}
        >
          <source src={girl} type="video/mp4" />
        </Video>
        <h3>Music NFT MarketPlace coming soon</h3>
      </div>
      <div className="bull3__header" id="home">
        <div className="bull3__header-content">
          <h1 className="bull3__broad">Autonomy web3 music space.</h1>

          <section className="animation">
            <div className="first">
              <div>Mint for free.</div>
            </div>
            <div className="second">
              <div>Buy and Sell Music NFTs</div>
            </div>
            <div className="third">
              <div>Listen and earn </div>
            </div>
          </section>
          <p>Lifetime royalty for artists on every trade.</p>
          <img src={Hicon1} alt="icon" />
          <img src={Hicon3} alt="icon" />
          <img src={Hicon2} alt="icon" />
          <img src={sound2} alt="icon" />
          <img src={sound3} alt="icon" />
          <img src={Hicon1} alt="icon" />

          <div className="bull3__header-content_btn">
            <button className="btn-2" type="button">
              <a href="http://localhost:3000/" target="_blank" rel="noreferrer">
                Presale
              </a>
            </button>
            <button className="btn-2" type="button">
              <Link to={'/artisteform'}>For Artist</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
