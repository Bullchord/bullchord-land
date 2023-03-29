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
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
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
              <main className="img">
                <div className="card">
                  <img src={artiste.img} alt="" className="card-img" />
                  <div className="card-content">
                    <h2>{artiste.artisteName}</h2>
                    <p>{artiste.intro}</p>
                    <div className="social-handles">
                      <img src={tiktok} alt="" />
                      <img src={twitter} alt="" />
                      <img src={insta} alt="" />
                    </div>
                  </div>
                </div>
              </main>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
