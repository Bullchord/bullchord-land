import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
// import 'react-html5video/dist/styles.css';
import './hero.css';
// import blurr from '../../assets/heroImage.svg';
import sound2 from '../../assets/sound-sign1.svg';
import sound3 from '../../assets/sound-sign3.svg';
import Hicon1 from '../../assets/h-icon.svg';
import Hicon2 from '../../assets/h-icon2.png';
import Hicon3 from '../../assets/h-icon3.svg';
import girl from '../../assets/girl.mp4';



const Header = () => {
    return (
        <>
        <div className='bull3_video_home'>
        <Video className="bull3_video-main" autoPlay loop muted controls={['UnPlayPause', 'UnSeek', 'UnTime', 'UnVolume', 'UnFullscreen' ]}>
            <source src={girl} type='video/mp4'/>
        </Video>
        {/* <img src={musichead} alt="musichead" /> */}
            <h1>This is the end of the end</h1>
        </div>
        <div className='bull3__header' id='home'>
            <div className='bull3__header-content'>
                <h1 className='bull3__broad'>Web 3 Music Zone For Unlimited Reward.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eligendi corporis provident veniam laboriosam. Quis. <br/> a <span className='change__color'>multi-system</span> around the ecosystem. </p>
                <img src={Hicon1} alt="icon" />
                <img src={Hicon3} alt="icon" />
                <img src={Hicon2} alt="icon" />
                <img src={sound2} alt="icon" />
                <img src={sound3} alt="icon" />
                <img src={Hicon1} alt="icon" />
                <div className='bull3__header-content_btn'>
                    <button className='btn-2' type='button'> <a href="http://localhost:3000/" target='_blank' rel='noreferrer'>Presale</a></button>
                    <button className='btn-2' type='button'> <a href="http://localhost:3000/" target='_blank' rel='noreferrer'>For Artist</a></button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Header;