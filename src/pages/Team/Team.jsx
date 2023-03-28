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

import { Swiper, SwiperSlide } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

// import required modules
import { EffectCube, Pagination } from 'swiper'

const teamData = [
  {
    id: 1,
    founderName: 'Michael Balogun',
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
]

const Team = () => {
  const swiper = new Swiper('.sample-slider', {
    effect: 'cards', //make slider card
    grabCursor: true, //grab cursor
    pagination: {
      //pagination(dots)
      el: '.swiper-pagination',
    },
    navigation: {
      //navigation(arrows)
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  return (
    <>
      <div className="bull3_team-container">
        {/* <Header des="Meet the team" /> */}
        <div className="bull3_vid-banner-team">
          <Video className="video" autoPlay loop muted>
            <source src={Colorful} type="video/mp4" />
          </Video>
          <h1>Team</h1>
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
        <h1> Empowering Artists Like Never Before</h1>
      </div>

      {/* <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </>
  )
}

export default Team
