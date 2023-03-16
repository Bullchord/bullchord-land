import React from "react";
import Binance from '../../assets/image 7.svg';
import Gecko from '../../assets/image 8.svg';
import './partner.css';




const Partner = () => {
    return(
            <div className="bull3_partner-container">
                <h1>Collaboration and Partner</h1>
                <div className="bull3_partner-roll">
                    <div><img src={Binance} alt="binance"/></div>
                    <div className="gecko"><img src={Gecko} alt="gecko" /></div>
                    <div><img src={Binance} alt="binance" /></div>
                </div>
                <hr/>
            </div>
    
    )
}

export default Partner;