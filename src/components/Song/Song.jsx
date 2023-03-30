import React, { useState, useRef } from 'react'
import Mj from '../../assets/mj.png'
import Headset from '../../assets/headphones 1.svg'
import mj from '../../assets/mj.wav'
import Cd from '../../assets/cd.svg'
// import Binance from '../../assets/image 7.svg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import './song.css'

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
  return (
    <>
      <div className="bull3_song_container">
        <h1 className="song_h1">
          Upcoming artists will start off better on bullchord as they will have
          more chances for promotions and recognition.{' '}
        </h1>
        <div className="bull3_song-roll">
          <div className="bull3_song-colone">
            <div className="bull3_song-inner">
              <div className="listner">
                <h2>For Listener </h2>
                <p>The DCR rewards you as you listen to music.</p>
              </div>
              <div className="headset">
                <img src={Headset} alt="headset" />
              </div>
            </div>
            <div className="bull3_song-inner2">
              <div className="artist">
                <h2>Artist</h2>
                <p>Mint songs, sell songs, and enjoy your royalty for life. </p>
              </div>
              <div className="disk slide-left">
                <img src={Cd} alt="cd" />
              </div>
            </div>
          </div>

          <div className="bull3_song-coltwo">
            <img className="music-img" src={Mj} alt="mj" />
            <div className="music_details">
              <div className="music_title">Michael Jackson</div>
              {!isPlaying ? (
                <PlayArrowIcon onClick={playing} className="play-img" />
              ) : (
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
              <div className="artist_name">Billie Jean</div>
              <div className="music_cost">Not for Sale</div>
            </div>
          </div>
        </div>
        <div className="bull3_genre">
          <h2>Adding Greater Value To Every Genre Of Music.</h2>
          <p>
            Earn tokens when music is streamed and take part in the consensus
            reward voting system.
          </p>
          <button className="bull3_genre-btn">Join Waitlist</button>
        </div>
      </div>
      <div className="bull3_heter">
        <h1>
          Bullchord's unique heterogeneous model allows Users to either be chain
          activators, artists, Asset owners or asset users. Every member Has a
          specific role to get them engaged to Contribute to the ecosystem
          dynamically.
        </h1>
      </div>
    </>
  )
}

export default Song
