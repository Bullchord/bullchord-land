import React from 'react'
// import Header from '../Header'
import founder from '../../assets/mich.png';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
// import Videobg from '../Videobg/Videobg';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
import Colorful from '../../assets/colorful.mp4';
import './team.css';


const teamData = [
  { id: 1, founderName: 'Michael Balogun', pos: 'CEO', img: founder },
  { id: 2, founderName: 'Abusomwan Santos', pos: 'CTO', img: founder },
  { id: 3, founderName: 'Francis Oche', pos: 'CII', img: founder },
  { id: 4, founderName: 'Francis Oche', pos: 'COO', img: founder },
  { id: 5, founderName: 'Francis Oche', pos: 'NTA', img: founder },


]

const Team = () => {
  return (
    <>
    <div className='bull3_team-container'>
      {/* <Header des="Meet the team" /> */}
      <div className='bull3_vid-banner-team'>
            <Video className="video" autoPlay loop muted>
                <source src={Colorful} type="video/mp4"/>
            </Video>            
            <h1>Team</h1>
            </div>
      <div className="team-section">
        {teamData.map((team) => {
          return (
            <div className="team-member" key={team.id}>
              <img src={team.img} alt="" />
              <h3>{team.founderName}</h3>
              <small>{team.pos}</small>
              <div className="team-socials">
                <img src={twitter} alt="twitter" />
                {/* <img src={telegram} /> */}
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
    <div className='bull3_downbg'>
   <h1> Empowering Artists Like Never Before</h1>

    </div>
    </>

  )
}

export default Team
