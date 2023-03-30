import React from 'react'
// import { DefaultPlayer as Video } from 'react-html5video/dist'
import 'react-html5video/dist/styles.css'
// import Colorful from '../../assets/colorful.mp4'
import './token.css'

import pieChart from '../../assets/piechart.svg'
// import tokenbg from '../../assets/tokenbg.png'

import { distribution } from './data'

const Chart = () => {
  return (
    <>
      <div className="bull3_token_head">
        <div className="bull3_vid-banner">
          <h1>Token</h1>
          {/* <img src={tokenbg} alt="" /> */}
        </div>
        <div className="token-intro">
          <h1><span className='bullc'>$Bullchord</span> is the Native <br/> Token of Bullchord platform <br/>Bullchord platform </h1>
          <p>
            A blockchain/decentralized protocol requires financial mechanisms <br/>to
            enable incentives and rewards.{' '}
            <a
              href="https://bullchords-organization.gitbook.io/litepaper/"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
      <div className="bull3__chart">
        <div className="bull3__content">
          <div className="bull3_metric">
            {distribution.map((token) => {
              console.log(token.img)
              return (
                <li>
                  <img src={token.img} alt="" />
                  <p> {token.supply}</p>
                </li>
              )
            })}
          </div>
          <div className="bull3__piechart">
            <img src={pieChart} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chart
