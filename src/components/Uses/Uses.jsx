import React from 'react'
import border from '../../assets/dashed_border.svg'
import Stake from '../../assets/stake.png'
import Gov from '../../assets/gov.png'
import Inapp from '../../assets/inapp.png'

import './uses.css'

const Uses = () => {
  return (
    <div className="bull3_uses-container">
      <h1 className="stake_h1">Staking</h1>
      <div className="bull3_uses-rollone">
        <div className="bull_uses-col1">
          <img src={border} alt="border" />{' '}
        </div>
        <div className="bull_uses-col2">
          Staking rewards token holders and chain activators and encourages them
          to be honest and work diligently.
        </div>
        <div className="img_stake">
          <img src={Stake} alt="stake" />
        </div>
      </div>

      <h1 className="gov_h1">Hegemony</h1>
      <div className="bull3_uses-rolltwo">
        <div className="img_gov">
          <img src={Gov} alt="gov" />
        </div>
        <div className="bull_uses-col22">
          Chord token holders have control over the DCR. All privileges,
          including managing exceptional events such as upgrades and system
          improvement.
        </div>
        <div className="bull_uses-col1">
          <img src={border} alt="border" />{' '}
        </div>
      </div>

      <h1 className="inapp_h1">Core Trades</h1>
      <div className="bull3_uses-rollthree">
        <div className="bull_uses-col1">
          <img src={border} alt="border" />{' '}
        </div>
        <div className="bull_uses-col23">
          Secondary assets for buying & selling of NFTs and a primary token for
          all core trades transactions, including artists’ promotions, boosts,
          Meta club and celebrity messages.
        </div>
        <div className="img_inapp">
          <img src={Inapp} alt="inapp" />
        </div>
        {/* <img className="hhh" src={Stake} alt="stake" /> */}
      </div>
    </div>
  )
}

export default Uses
