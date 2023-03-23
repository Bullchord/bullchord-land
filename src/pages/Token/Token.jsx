import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import 'react-html5video/dist/styles.css'
import Colorful from '../../assets/colorful.mp4'
import './token.css'

import pieChart from '../../assets/piechart.svg'

import { distribution } from './data'

const Chart = () => {
  return (
    <>
      <div className="bull3_token_head">
        <div className="bull3_vid-banner">
          <Video className="video" autoPlay loop muted>
            <source src={Colorful} type="video/mp4" />
          </Video>
          <h1>Token</h1>
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
