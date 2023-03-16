import React from "react";
import Speaker from '../../assets/speaker1.svg'
import String from '../../assets/stringblack.svg';
import sound1 from '../../assets/sound-sign.svg';
import sound2 from '../../assets/sound-sign1.svg';
import sound3 from '../../assets/sound-sign3.svg';

import './listen.css';


const Listen = () => {
    return (
        <div className="bull3_listen-container">
            <h1>Bullchord to L2E</h1>
            <div className="bull3_listen-main">
                <div className="bull3_col-one">
                <img className="sound3 roll-out-right " src={sound2} alt="" />
                    <img className="sound3 roll-out-right " src={sound3} alt="" />
                    <img className="sound3 roll-out-right " src={sound3} alt="" />
                    <img className="sound3 roll-out-right" src={sound1} alt="" />
                    <img className="sound3 roll-out-right " src={sound2} alt="" />
                    <img className="sound3 roll-out-right " src={sound3} alt="" />
                    <img className="sound3 roll-out-right " src={sound3} alt="" />
                    <img className="speaker heartbeat" src={Speaker} alt="dpeak"/>

                </div>
                <div className="bull3_col-two">
                    <p>Bullchord is a dedicated decentralized music NFT and metaverse ecosystem. We aim to change the sphere of music and make it what it ought to be. Blockchain technology is all about giving back to users and contributors. Everyone on the Bullchord has the right to all their assets, </p>
                    <button className="bull3_whitelist-btn"> <img src={String} alt="string" /> Join whitelist</button>
                </div>
            </div>
        </div>
    )
}

export default Listen