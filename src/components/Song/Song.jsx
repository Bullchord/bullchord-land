import React, { useState, useRef} from "react";
import Mj from '../../assets/mj.png';
import Headset from '../../assets/headphones 1.svg';
import mj from '../../assets/mj.wav'
import Cd from '../../assets/cd.svg';
import Binance from '../../assets/image 7.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause';
import './song.css';




const Song = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)
    const playing = () => {
      if (isPlaying) {
        setIsPlaying(false)
        audioRef.current.pause()
      } else {
        setIsPlaying(true)
        audioRef.current.play()
      }
    }
    return(
        <>
        <div className="bull3_song_container">
            <h1 className="song_h1">Creating a NFT market place for artist and listener in Anyone upcoming artiste can do their stuff on-chain, making them more independent </h1>
            <div className="bull3_song-roll">
                <div className="bull3_song-colone">
                    <div className="bull3_song-inner">
                        <div className="listner">
                            <h3>For Listner </h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia repudiandae voluptates, cupiditate autem dolorum quaerat tempora omnis. Eveniet, ullam ipsa! Aut, beatae sint?c</p>
                        </div>
                        <div className="headset"> <img src={Headset} alt="headset" /></div>
                    </div>
                    <div className="bull3_song-inner2">
                    <div className="artist">
                        <h3>Artist</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse. Consectetur totam molestias iste facere harum </p>
                    </div>
                    <div className="disk slide-left"> <img src={Cd} alt="cd" /></div>
                    </div>
                </div>

                <div className="bull3_song-coltwo">
                    <img className="music-img" src={Mj} alt="mj" />
                    <div className="music_details">
                        <div className="music_title">Billie Jean</div>
                        {!isPlaying ? (
                //if playing is false, play the audio
                <PlayArrowIcon onClick={playing} className="play-img"/>
              ) : (
                //else pause the audio
                <PauseIcon onClick={playing} className="pause-img" />
              )}
              <audio
                ref={audioRef}
                src={mj}
                onPause={() => playing}
                onEnded={playing}
                autoPlay={isPlaying}
              />
                        <div className="music_price"> Price</div>
                     
                    </div>
                    <div className="music_detail">
                        <div className="artist_name">Michael  Jackson</div>
                        <div className="music_cost"><img src={Binance} alt="bnb" />300</div>
                    </div>
                </div>
            </div>
            <div className="bull3_genre">
          <h1>Adding Greater Value To Every Genre Of Music.</h1>
          <p>Bullchord is a next-generation web3 music-based protocol that unites the assets and people of purpose for music, allowing them to benefit seamlessly together sustainably.</p>
          <button className="bull3_genre-btn">Join Waitlist</button>
      </div>
        </div>
       <div className="bull3_heter">
        <h1>Bullchord's unique heterogeneous model allows Users to either be chain activators, artists, Asset owners or asset users. Every member Has a specific role to get them engaged to Contribute to the ecosystem dynamically.</h1>
       </div>
        </>
    )
}


export default Song;