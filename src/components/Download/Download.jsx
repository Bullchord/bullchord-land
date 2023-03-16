import React from "react";
import Mockup from '../../assets/mockupnow.png';
import Googlestore from '../../assets/googlestore.svg';
import Applestore from '../../assets/applestore.svg';
import './download.css';

const Download = () => {
    return(
        <div className="bull3_download-container">
            <div className="bull3_download-bg">
                <div className="bull3_download-whitebg">
                    <div className="bull3_download-inner-roll">
                        <div className="bull3_download-inner"> 
                            <h1>Download Bullchord App Now </h1>
                            <p>Bullchord is a next-generation web3 music-based protocol that unites the assets and people of purpose for music, allowing them to benefit seamlessly together sustainably.</p> 
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



export default Download;