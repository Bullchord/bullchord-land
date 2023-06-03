import React from 'react'
import { artisteData } from './data'
import './artists.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react'

import twitter from '../../assets/twitter1.svg'
import tiktok from '../../assets/tiktok1.svg'
import insta from '../../assets/insta.svg'

import { EffectCoverflow, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css'

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      <h1>Artistes</h1>
      <Swiper
        effect={'coverflow'}
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {artisteData.map((artiste) => {
          return (
            <SwiperSlide>
              <div className="swiper-img">
                <img src={artiste.img} alt="img" />
                <div className="card-content">
                  <div className="card-intro">
                    <h2>
                      {artiste.artisteName} <img src={artiste.country} alt="" />
                    </h2>
                  </div>
                  <p>{artiste.intro}</p>

                  <div className="socials-hand">
                    <a href={artiste.tiktokLink}>
                      <img src={tiktok} alt="" />
                    </a>
                    <a href={artiste.twitterLink}>
                      <img src={twitter} alt="" />
                    </a>
                    <a href={artiste.instaLink}>
                      <img src={insta} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
