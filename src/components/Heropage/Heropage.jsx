import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import './hero.css'
import sound2 from '../../assets/sound-sign1.svg'
import sound3 from '../../assets/sound-sign3.svg'
import Hicon1 from '../../assets/h-icon.svg'
import Hicon2 from '../../assets/h-icon2.png'
import Hicon3 from '../../assets/h-icon3.svg'
import binance from '../../assets/binance.svg'
import bull from '../../assets/bullch.svg'
import ipfs from '../../assets/ipfs.svg'
import unity from '../../assets/unity.svg'
import zep from '../../assets/zep.svg'
import girl from '../../assets/girl.mp4'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="bull3__header" id="home">
        <div className="bull3__header-content">
          <div className="small_screen bull_hero_display">
            <p>
              Autonomy
              <span className="bull_intro_image ">
                <img src={binance} alt="" />
                <img src={zep} alt="" />
                <img src={bull} alt="" />
                <img src={ipfs} alt="" />
                <img src={unity} alt="" />
              </span>
              web3 music space
            </p>
          </div>
          <span className="bull_intro_image small_screen_2 ">
            <img src={binance} alt="" />
            <img src={zep} alt="" />
            <img src={bull} alt="" />
            <img src={ipfs} alt="" />
            <img src={unity} alt="" />
          </span>

          <h1 className="bull3__broad small_h1">Autonomy web3 music space.</h1>

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
          <p className='bull_3_p'>Lifetime royalty for artists on every trade.</p>

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
