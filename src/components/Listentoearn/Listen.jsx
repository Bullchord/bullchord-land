import React from 'react'
import Speaker from '../../assets/speaker1.svg'
import String from '../../assets/stringblack.svg'
import sound1 from '../../assets/sound-sign.svg'
import sound2 from '../../assets/sound-sign1.svg'
import sound3 from '../../assets/sound-sign3.svg'

import './listen.css'

const Listen = () => {
  return (
    <div className="bull3_listen-container">
      <div className="bull3_listen-main">
        <div className="bull3_col-one">
          <img className="sound3 roll-out-right " src={sound2} alt="" />
          <img className="sound3 roll-out-right " src={sound3} alt="" />
          <img className="sound3 roll-out-right " src={sound3} alt="" />
          <img className="sound3 roll-out-right" src={sound1} alt="" />
          <img className="sound3 roll-out-right " src={sound2} alt="" />
          <img className="sound3 roll-out-right " src={sound3} alt="" />
          <img className="sound3 roll-out-right " src={sound3} alt="" />
          <img className="speaker heartbeat" src={Speaker} alt="dpeak" />
        </div>
        <div className="bull3_col-two">
          <h1>Bullchord to L2E</h1>

          <p>
            Bullchord is a decentralized music NFT, meta and a music streaming
            platform that rewards everyone participating through decentralized
            chord reward(DCR), which is a consensus algorithm that allows the
            token holders to distribute rewards from a decentralized pool.
          </p>

          <a
            href="https://twitter.com/bullchord"
            target="_blank"
            rel="noreferrer"
            className="cta"
          >
            <span>Join Waitlist</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Listen
