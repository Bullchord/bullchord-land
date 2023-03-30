import React from 'react'
// import Header from '../Header'
import founder from '../../assets/mich.png'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
// import Videobg from '../Videobg/Videobg';
import { DefaultPlayer as Video } from 'react-html5video/dist'
import 'react-html5video/dist/styles.css'
import Colorful from '../../assets/colorful.mp4'
import './team.css'

const teamData = [
  {
    id: 1,
    founderName: 'Michael B',
    pos: 'Web/Blockchain dev',
    img: founder,
    tweet: 'https://twitter.com/simplymikes',
    linked: 'https://www.linkedin.com/in/michael-b-319a13138/',
  },
  {
    id: 2,
    founderName: 'Abusomwan Santos',
    pos: 'Web/Blockchain dev',
    img: founder,
    tweet: 'https://twitter.com/kingjul1en',
    linked: 'https://www.linkedin.com/in/abusomwan-santos/',
  },
  /* call to action button */
  {
    id: 5,
    founderName: 'Francis Oche ',
    pos: 'Social Marketer',
    img: founder,
    tweet: 'https://twitter.com/NGPreacher',
    linked: 'https://www.linkedin.com/in/francis-samuel-oche-315926269',
  },
  {
    id: 3,
    founderName: 'Alexander Jessica',
    pos: 'HR',
    img: founder,
    linked: 'https://www.linkedin.com/in/jessica-alexander-8619751b0',
  },
  {
    id: 4,
    founderName: 'Seth Daniel',
    pos: 'Web3 Marketer',
    img: founder,
    tweet: 'https://twitter.com/Sethdannyyak',
    linked: 'https://www.linkedin.com/in/seth-dani-yakubu-345705251',
  },
  {
    id: 5,
    founderName: 'Zulay Pulido ',
    pos: 'Designer & Illustrator',
    img: founder,
  },
  { id: 5, founderName: 'Caner', pos: 'Community Manager', img: founder },
  {
    id: 5,
    founderName: 'Colin Power',
    pos: 'Crypto Economist & Advisor',
    img: founder,
    tweet: 'https://twitter.com/collin_code',
    linked: 'https://twitter.com/collin_code',
  },

  {
    id: 5,
    founderName: 'Alvin O',
    pos: 'Advisor',
    img: founder,
    tweet: '',
    linked: '',
  },
]

const Team = () => {
  return (
    <>
      <div className="bull3_team-container">
        <div className="bull3_vid-banner-team">
          <h1>Team</h1>
        </div>
        <div className="team-intro">
          <p>
            Bullchord is a team of developers, web3 enthusiasts, music lovers
            and builders. We aim to create total freedom in the music industry
            by using a decentralized economy.
          </p>
        </div>
        <div className="team-section">
          {teamData.map((team) => {
            return (
              <div className="team-member" key={team.id}>
                {/* <img src={team.img} alt="" /> */}
                <h3>{team.founderName}</h3>
                <small>{team.pos}</small>
                <div className="team-socials">
                  <a href={team.tweet} target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href={team.linked} target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="bull3_downbg">
        <h1> Freedom For The People In Music</h1>
      </div>
    </>
  )
}

export default Team
