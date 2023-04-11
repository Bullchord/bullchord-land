import React from 'react'
import Mockup from '../../assets/mockupnow.png'
import Googlestore from '../../assets/googlestore.svg'
import Applestore from '../../assets/applestore.svg'
import './download.css'

const Download = () => {
  return (
    <div className="bull3_download-container">
      <div className="bull3_download-bg">
        <div className="bull3_download-whitebg">
          <div className="bull3_download-inner-roll">
            <div className="bull3_download-inner">
              <h1>
                BullChord Mobile Player <small>coming soon</small>
              </h1>
              <p>
                Bullchord mobile app is the streaming platform designed to serve
                everyone irrespective of the web but promote the freedom,
                seamless benefits and the power in web3 technology.
              </p>
              <img className="google_store" src={Googlestore} alt="g-store" />
              <img src={Applestore} alt="a-store" />
            </div>
            <div className="bull3_download-inner2">
              <img src={Mockup} alt="mockup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
