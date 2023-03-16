import React from 'react';
import { artisteData } from './data';
import './artists.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// font-size: 18px;
//     font-family: verdana;
//     color: rgb(91, 94, 109);



const Carousel = ({ images }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />,
    cssEase: "linear",
    // speed: 500,
   
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", padding: "10px", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-desc-card">
          <p>
            We work with both globally renowned musicians and those who are
            taking the first steps into their musical journey. We provide the
            tools and knowledge you need to succeed in all stages of your
            career.
          </p>
        </div>
        <div className="carousel-card">
          <Slider className='slide-no' {...settings}>
            {artisteData.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <div className="card-top">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="card-bottom">
                    <p>{item.artisteName}</p>
                    <small>{item.stream}</small>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Carousel
