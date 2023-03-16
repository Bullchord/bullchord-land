import React from "react";
import border from '../../assets/dashed_border.svg';
import Stake from '../../assets/stake.png';
import Gov from '../../assets/gov.png';
import Inapp from '../../assets/inapp.png';


import './uses.css';


const Uses = () => {
    return(
        <div className="bull3_uses-container">
        
        <h1 className="stake_h1">Staking</h1>
        <div className="bull3_uses-rollone">
        <div className="bull_uses-col1"> <img src={border} alt="border" /> </div>
        <div className="bull_uses-col2">Gamification theory rewards token holders amongst chain activators and other users and encourages them to be honest and work diligently.</div>
        <div className="img_stake"> <img src={Stake} alt="stake" /></div>
        {/* <img className="hhh" src={Stake} alt="stake" /> */}
        </div>

        <h1 className="gov_h1">Governance</h1>
        <div className="bull3_uses-rolltwo">
         <div className="img_gov"> <img src={Gov} alt="gov" /></div> 
         <div className="bull_uses-col22">Gamification theory rewards token holders amongst chain activators and other users and encourages them to be honest and work diligently.</div>
         <div className="bull_uses-col1"> <img src={border} alt="border" /> </div>
        </div>

        <h1 className="inapp_h1">In app</h1>
        <div className="bull3_uses-rollthree">
        <div className="bull_uses-col1"> <img src={border} alt="border" /> </div>
        <div className="bull_uses-col23">Gamification theory rewards token holders amongst chain activators and other users and encourages them to be honest and work diligently.</div>
        <div className="img_inapp"> <img src={Inapp} alt="inapp" /></div>
        {/* <img className="hhh" src={Stake} alt="stake" /> */}
        </div>

        </div>
    )
};


export default Uses;